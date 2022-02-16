import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';

import ProjectState from './context/projects/projectState'

function App() {
  return (
    <ProjectState>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/new-account" element={<NewAccount />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ProjectState>
  );
}

export default App;
