import { configureStore } from "@reduxjs/toolkit"
import constructorReducer from "./slices/constructorSlice"
import dropReducer from "./slices/dropSlice"

export const store = configureStore({
  reducer: {
    constr: constructorReducer,
    drop: dropReducer,
  },
})