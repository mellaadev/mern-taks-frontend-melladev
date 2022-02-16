import React, { useContext, useEffect } from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from "react-transition-group"

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
      <TransitionGroup>
      {proyectos.map(proyecto => (
        <CSSTransition
          key={proyecto.id}
          timeout={200}
          classNames='proyecto'
        >
          <Project 
            proyecto={proyecto}
          />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </ul>
  )
}

export default ProjectsList