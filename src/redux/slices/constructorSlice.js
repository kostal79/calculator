import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode: "Constructor",
}

export const constructorSlice = createSlice({
    name: 'constr',
    initialState,
    reducers: {
        setMode: (state, action) => { state.mode = action.payload },
    },
})

export const { setMode } = constructorSlice.actions

export default constructorSlice.reducer