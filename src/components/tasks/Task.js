import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ tarea }) => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(projectContext)
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tasksContext = useContext(taskContext)
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tasksContext

    // Aplicar destructuring al proyecto
    const [ proyectoActual ] = proyecto

    // Funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
    const handleEliminarTarea = id => {
        const confirmar = window.confirm(`¿Estás seguro de que quieres eliminar la tarea?\n\nTarea: ${tarea.nombre}`)

        if(confirmar) {
            eliminarTarea(id)
            obtenerTareas(proyectoActual.id)
        }
    }

    // Función que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea);
    }

    // Función que va a recoger la tarea actual
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

  return (
    <li className='tarea sombra'>
        <p>{tarea.nombre}</p>

        <div className='estado'>
            {tarea.estado 
                ? 
                    (
                        <button 
                            type='button'
                            className='completo'
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )      
                :
                    (
                        <button 
                            type='button'
                            className='incompleto'
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )   
            }
        </div>

        <div className='acciones'>
            <button
                type='button'
                className='btn btn-primario'
                onClick={() => seleccionarTarea(tarea)}
            >Editar</button>

            <button
                type='button'
                className='btn btn-secundario'
                onClick={() => handleEliminarTarea(tarea.id)}
            >Eliminar</button>
        </div>
    </li>
  )
}

export default Task