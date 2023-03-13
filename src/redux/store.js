import { configureStore } from "@reduxjs/toolkit"
import constructorReducer from "./slices/constructorSlice"
import dropReducer from "./slices/dropSlice"
import logicReducer from "./slices/logicSlice"

export const store = configureStore({
  reducer: {
    constr: constructorReducer,
    drop: dropReducer,
    logic: logicReducer,
  },
})