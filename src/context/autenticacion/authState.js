import React, { useReducer } from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    REGISTRO_EXISTOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from '../../types'


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    // Funciones
    
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);

            dispatch({
                type: REGISTRO_EXISTOSO,
                payload: respuesta.data
            })

            // Obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth')
            // console.log(respuesta.data)
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data,
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;