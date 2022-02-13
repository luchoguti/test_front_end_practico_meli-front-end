import React from 'react';
import { BrowserRouter as Router,Routes } from 'react-router-dom'
import Main from './pages/Main/page';
import './App.css';

function App() {
  return (
      <>
        <Router>
          <Routes>
              <Main/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
