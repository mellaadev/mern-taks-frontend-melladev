import React, { useContext, useEffect } from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext';
import AlertaContext from '../../context/alertas/alertaContext'
import { CSSTransition, TransitionGroup } from "react-transition-group"

const ProjectsList = () => {

  // Extraer proyectos del state incial
  const proyectosContext = useContext(projectContext)
  const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  // Obtener proyectos cuando carge el componente
  useEffect(() => {

    // Si hay un error
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje])

  // Reviar si proyectos tiene conteneido
  if( proyectos.length === 0 ) return <p>No hay proyectos, crea uno.</p>;
  

  return (
    <ul className='listado-proyectos'>
      { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null }
      <TransitionGroup>
      {proyectos.map(proyecto => (
        <CSSTransition
          key={proyecto._id}
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