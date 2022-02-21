import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
 
const Login = () => {

  let history = useNavigate()

  // Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext; 

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // En caso de que el password o usuario no exista
  useEffect(() => {
    if(autenticado) {
      history('/projects')
    }

    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, history])

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
    if(email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return
    }

    // Pasarlo al action que es la función declarada en el reducer
    iniciarSesion({ email, password });

  }

  return (
    <div className='form-usuario'>
      { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
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