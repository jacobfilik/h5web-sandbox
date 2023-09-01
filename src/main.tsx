import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import H5GroveApp from './H5GroveApp.tsx'
import { BrowserRouter as Router, Navigate, Route, Routes, } from 'react-router-dom';


ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<H5GroveApp />} />
        </Routes>
    </Router>
  </StrictMode>,
  document.querySelector('#root'),
);
