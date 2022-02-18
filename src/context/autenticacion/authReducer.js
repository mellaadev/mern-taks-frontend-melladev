import {
    REGISTRO_EXISTOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXISTOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload.usuario
            }

        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload,
            }

        default:
            return state;
    }
}