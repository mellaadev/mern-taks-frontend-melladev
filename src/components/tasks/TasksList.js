import React, { useContext } from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(projectContext)
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el priyecto actual
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Forma', estado: false},
        {nombre: 'Elegir Pago', estado: true},
    ]

    // Eliminar un proyecto
    const handleEliminarProyecto = () => {
        eliminarProyecto(proyectoActual.id)
    }

  return (
    <>
        <h2>Proyecto: {proyectoActual.nombre}</h2>

        <ul className='listado-tareas'>
            {tareasProyecto.length === 0
                ? (<li className='tarea'><p>No hay Tareas</p></li>)
                : tareasProyecto.map(tarea => (
                    <Task 
                        tarea={tarea}
                    />
                ))
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