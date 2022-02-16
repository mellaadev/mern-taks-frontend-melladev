import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ tarea }) => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(projectContext)
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tasksContext = useContext(taskContext)
    const { eliminarTarea, obtenerTareas } = tasksContext

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
                        >Completo</button>
                    )      
                :
                    (
                        <button 
                            type='button'
                            className='incompleto'
                        >Incompleto</button>
                    )   
            }
        </div>

        <div className='acciones'>
            <button
                type='button'
                className='btn btn-primario'
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