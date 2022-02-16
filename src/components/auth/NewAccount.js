import React, { useState, useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
 
const NewAccount = () => {

  // State para iniciar sesión
  const [ usuario, setUsuario ] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  })

  // Extraer el usuario
  const { nombre, email, password, confirmar, } = usuario

  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value,
    })
  }

  // Cuando el usuario quiere iniciar sesión
  const handleSubmit = e => {
    e.preventDefault()

    // Validar los datos introducidos y que no haya campos vacios

    // Password minimo de 6 caracteres

    // Los 2 password son iguales

    // Pasarlo al action que es la función declarada en el reducer
  }

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Registrate</h1>

        <form
          onSubmit={handleSubmit}
        >
          <div className='campo-form'>
            <label htmlFor='nombre'>Nombre</label>
            <input 
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu Nombre'
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input 
              type='email'
              id='email'
              name='email'
              placeholder='Tu Email'
              value={email}
              onChange={onChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              id='password'
              name='password'
              placeholder='Tu Password'
              onChange={onChange}
              value={password}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='confirmar'>Confirmar Password</label>
            <input 
              type='password'
              id='confirmar'
              name='confirmar'
              placeholder='Repite tu Password'
              onChange={onChange}
              value={confirmar}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Registrarme'
            />
          </div>
        </form>

        <Link 
          to={'/'} 
          className='enlace-cuenta'
        >
          Iniciar Sesión</Link>
      </div>
    </div>
  )
}

export default NewAccount