import { App, assertEnvVar, H5GroveProvider } from '@h5web/app';
import { useLocation } from 'react-router-dom';

const URL = import.meta.env.VITE_H5GROVE_URL;
const FILEPATH = import.meta.env.VITE_H5GROVE_FALLBACK_FILEPATH;

import type { FeedbackContext } from '@h5web/app';
import { getFeedbackMailto } from '@h5web/app';

function getFeedbackURL(context: FeedbackContext): string {
      const email = "no-one@nowhere.com"
        return getFeedbackMailto(context, email);
}


function H5GroveApp() {
  assertEnvVar(URL, 'VITE_H5GROVE_URL');
  assertEnvVar(FILEPATH, 'VITE_H5GROVE_FALLBACK_FILEPATH');

  // const filepath = "/data/lizard.nxs"
  // const URL = "http://localhost:5173/api"

  const query = new URLSearchParams(useLocation().search);
  const filepath = query.get('file') || FILEPATH;

  return (
    <H5GroveProvider
      url={URL}
      filepath={filepath}
      axiosConfig={{ params: { file: filepath } }}
    >
      <App sidebarOpen={false} getFeedbackURL={getFeedbackURL} />
    </H5GroveProvider>
  );
}

export default H5GroveApp;
