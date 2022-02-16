import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';

const Project = ({ proyecto }) => {

  // Obtener el state de proyectos
  const proyectosContext = useContext(projectContext)
  const { proyectoActual } = proyectosContext;

  return (
    <li>
        <button
            type='button'
            className='btn btn-blank'
            onClick={() => proyectoActual(proyecto.id)}
        >{proyecto.nombre}</button>
    </li>
  )
}

export default Project