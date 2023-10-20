import { createSlice, nanoid } from "@reduxjs/toolkit"

interface ITarea {
    titulo: string;
    completada: boolean;
}

interface IListaTareas {
    [id: string]: ITarea;
}

interface IEstadoTareas {
    lista: IListaTareas;
}

const initialState: IEstadoTareas = {
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
        // Sintatic sugar JS
        eliminada(state, action) {
            delete state.lista[action.payload];
        },
        // Complete syntax
        /*
        eliminada(state, action) {
            const {[action.payload]: _, ...lista} = state.lista;
            return {...state, lista};
        }
        */
        alternada(state, action) {
            state.lista[action.payload].completada = !state.lista[action.payload].completada;
        },
        modificada(state, action) {
            state.lista[action.payload.id].titulo = action.payload.titulo;
        },
        todasCompletadas(state) {
            Object.values(state.lista).forEach(tarea => tarea.completada = true);
        },
        creada: {
            prepare(titulo: string) {
                return {
                    payload: { id: nanoid(), titulo },
                    meta: undefined,
                    error: undefined,
                }
            },
            reducer(state, action) {
                state.lista[action.payload.id] = {
                    titulo: action.payload.titulo,
                    completada: false
                }
            }
        }
    }
});

export const { eliminada, alternada, modificada, todasCompletadas, creada } = slice.actions;
export default slice.reducer;