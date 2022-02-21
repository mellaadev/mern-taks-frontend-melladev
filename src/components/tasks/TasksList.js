import React, { useContext } from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from "react-transition-group"

const TasksList = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(projectContext)
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Obtener las tareas del proyecto
    const tasksContext = useContext(taskContext)
    const { tareasproyecto } = tasksContext

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el priyecto actual
    const [ proyectoActual ] = proyecto;

    // Eliminar un proyecto
    const handleEliminarProyecto = () => {
        eliminarProyecto(proyectoActual._id)
    }

  return (
    <>
        <h2>Proyecto: {proyectoActual.nombre}</h2>

        <ul className='listado-tareas'>
            {tareasproyecto.length === 0
                ? (<li className='tarea'><p>No hay Tareas</p></li>)
                : 
                <TransitionGroup>
                {tareasproyecto.map(tarea => (
                    <CSSTransition
                        key={tarea.id}
                        timeout={200}
                        classNames='tarea'
                    >
                        <Task 
                            tarea={tarea}
                        />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            }
        </ul>

        <button 
            type='button'
            className='btn btn-eliminar'
            onClick={handleEliminarProyecto}
        >Eliminar Proyecto &times;</button>
    </>
  )
}

export default TasksList