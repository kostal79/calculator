import { configureStore } from "@reduxjs/toolkit"
import constructorReducer from "./slices/constructorSlice"

export const store = configureStore({
  reducer: {
    constr: constructorReducer,
  },
})