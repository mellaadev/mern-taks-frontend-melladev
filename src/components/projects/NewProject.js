import React, { useContext, useState }  from 'react'
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(projectContext)
    const { formulario, errorformulario,  mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // State para el proyecto
    const [ project, setProject ] = useState({
        nombre: '',
    });

    // Extraer nombre de project
    const { nombre } = project

    // Funcion onChange para el input de nombre
    const onProjectChange = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario envia el proyecto con submit
    const handleSubmit = e => {
        e.preventDefault();

        // Validar el proyecto
        if(nombre === '') {
            mostrarError()
            return;
        }

        // Agregar al state en caso de que este todo correcto
        agregarProyecto(project)

        // Reiniciar el form
        setProject({
            nombre: '',
        })
    }

    const handleOpenForm = () => {
        mostrarFormulario()
    }

  return (
    <>
        <button
            type='button'
            className='btn btn-block btn-primario'
            onClick={handleOpenForm}
        >Nuevo Proyecto</button>

        {formulario ?
            (
                <form 
                    className='formulario-nuevo-proyecto'
                    onSubmit={handleSubmit}
                >
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nombre Proyecto'
                        name='nombre'
                        onChange={onProjectChange}
                        value={nombre}
                    />

                    <input 
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar Proyecto'
                    />
                </form>
            ) : null
        }

        { errorformulario ? <p className='mensaje error'>El nombre del Proyecto es obligatorio</p> : null }
        
    </>
    
  )
}

export default NewProject