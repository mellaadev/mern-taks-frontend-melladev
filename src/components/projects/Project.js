import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ proyecto }) => {

  // Obtener el state de proyectos
  const proyectosContext = useContext(projectContext)
  const { proyectoActual } = proyectosContext;

  // Obtener la funcion del context de tarea
  const tasksContext = useContext(taskContext)
  const { obtenerTareas } = tasksContext

  // Funcion para agregar el proyecto actual
  const handleClickProyecto = id => {
    proyectoActual(id) // Fijar un proyecto en el panel de la derecha
    obtenerTareas(id) // Filtrar las tareas de cada proyecto
  }

  return (
    <li>
        <button
            type='button'
            className='btn btn-blank'
            onClick={() => handleClickProyecto(proyecto.id)}
        >{proyecto.nombre}</button>
    </li>
  )
}

export default Project