import { configureStore } from "@reduxjs/toolkit";
import tareas from '../slice/slice';


export const store = configureStore({
    reducer: { tareas }
});