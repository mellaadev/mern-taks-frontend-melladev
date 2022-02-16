import React, { useContext, useEffect } from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext';

const ProjectsList = () => {

  // Extraer proyectos del state incial
  const proyectosContext = useContext(projectContext)
  const { proyectos, obtenerProyectos } = proyectosContext;

  // Obtener proyectos cuando carge el componente
  useEffect(() => {
    obtenerProyectos();
  }, [])

  // Reviar si proyectos tiene conteneido
  if( proyectos.length === 0 ) return <p>No hay proyectos, crea uno.</p>;
  

  return (
    <ul className='listado-proyectos'>
      {proyectos.map(proyecto => (
        <Project 
          key={proyecto.id}
          proyecto={proyecto}
        />
      ))}
    </ul>
  )
}

export default ProjectsList