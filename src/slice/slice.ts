import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    lista: {
        1: {
            titulo: "Aprender componentes de React",
            completada: false
        },
        2: {
            titulo: "Completar las prácticas del módulo 1",
            completada: true
        },
        3: {
            titulo: "Realizar la autoevaluación",
            completada: false
        }
    }
};

const slice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        // Aquí van las acciones
    }
});