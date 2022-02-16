import React, { useState, useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
 
const Login = () => {

  // State para iniciar sesión
  const [ usuario, setUsuario ] = useState({
    email: '',
    password: '',
  })

  // Extraer el usuario
  const { email, password } = usuario

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

    // Pasarlo al action que es la función declarada en el reducer
  }

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={handleSubmit}
        >
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
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesión'
            />
          </div>
        </form>

        <Link 
          to={'/new-account'} 
          className='enlace-cuenta'
        >
          Registrate</Link>
      </div>
    </div>
  )
}

export default Login