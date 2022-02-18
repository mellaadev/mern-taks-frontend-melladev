import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';

import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/taskState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertaState>
          <AuthState>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/new-account" element={<NewAccount />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Router>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
