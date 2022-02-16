import React, { useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const TaskForm = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(projectContext)
    const { proyecto } = proyectosContext;

    // Obtener la funcion del agregar tarea
    const tasksContext = useContext(taskContext)
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tasksContext

    // State del formulario
    const [ task, setTask ] = useState({
        nombre: '',
    })

    const { nombre } = task

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el priyecto actual
    const [ proyectoActual ] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    // Funcion de submit
    const handleSubmit = e => {
        e.preventDefault()

        // validar
        if(nombre.trim() === '') {
            validarTarea();
            return
        }

        // pasar la validación


        // agregar la nueva tarea al state de tareas
        task.proyectoId = proyectoActual.id
        task.estado = false
        agregarTarea(task);

        // Volver a llamar la funcion de obtener las tareas
        obtenerTareas(proyectoActual.id)
        
        // reiniciar el form
        setTask({
            nombre: '',
        })
        
    }

  return (
    <div className="formulario">
        <form
            onSubmit={handleSubmit}
        >
            <div className='contenedor-input'>
                <input 
                    type='text'
                    className='input-text'
                    placeholder='Nombre Tarea'
                    name='nombre'
                    onChange={handleChange}
                    value={nombre}
                />
            </div>

            <div className='contenedor-input'>
                <input 
                    type='submit'
                    className='btn btn-primario btn-submit btn-block'
                    value='Agregar Tarea'
                />
            </div>
        </form>

        { errortarea ? <p className='mensaje error'>El nombre de la Tarea es obligatorio.</p> : null}
    </div>
  )
}

export default TaskForm