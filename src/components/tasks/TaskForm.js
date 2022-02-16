import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';

const TaskForm = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(projectContext)
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el priyecto actual
    const [ proyectoActual ] = proyecto;

  return (
    <div className="formulario">
        <form>
            <div className='contenedor-input'>
                <input 
                    type='text'
                    className='input-text'
                    placeholder='Nombre Tarea'
                    name='nombre'
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
    </div>
  )
}

export default TaskForm