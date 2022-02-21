import React, { useContext, useEffect } from 'react';
import SideBar from '../layout/SideBar';
import Bar from '../layout/Bar';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';

import AuthContext from '../../context/autenticacion/authContext';

const Projects = () => {

  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='contenedor-app'>
      <SideBar />

      <div className="seccion-principal">
        <Bar />

        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects