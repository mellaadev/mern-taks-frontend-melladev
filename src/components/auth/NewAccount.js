import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
 
const NewAccount = (props) => {

  let history = useNavigate()

  // Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext; 

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // En caso de que el usuario se haya autenticado o registrado o se un registro duplicado
  useEffect(() => {
    if(autenticado) {
      history('/projects')
    }

    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, history])
  

  // State para iniciar sesión
  const [ usuario, setUsuario ] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  })

  // Extraer el usuario
  const { nombre, email, password, confirmar, } = usuario;

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
    if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      return
    } else if (password.length < 6) {
      // Password minimo de 6 caracteres
      mostrarAlerta('El password debe de tener al menos 6 caracteres.', 'alerta-error')
      return
    } else if (password !== confirmar) {
      // Los 2 password son iguales
      mostrarAlerta('Los password introducidos no son iguales.', 'alerta-error')
      return
    }

    // Pasarlo al action que es la función declarada en el reducer
    registrarUsuario({
      nombre,
      email,
      password,
    })

  }

  return (
    <div className='form-usuario'>
      { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
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