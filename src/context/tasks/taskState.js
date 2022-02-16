import React, { useReducer } from "react"
import TaskContext from './taskContext'
import TaskReducer from "./taskReducer"

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
} from '../../types'

const TaskState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Forma', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Pago', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
            { id: 7, nombre: 'Elegir Forma', estado: false, proyectoId: 2 },
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2 },
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { id: 10, nombre: 'Elegir Forma', estado: false, proyectoId: 1 },
        ],
        tareasproyecto: null,
        errortarea: false,
    }

    // Dispatch y state
    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    // Crear funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea,
        })
    }

    // Valida y muestra un error en caso de la tarea error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;