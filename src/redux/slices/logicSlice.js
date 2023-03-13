import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: "0",
    previosNumber: null,
    operator: null,
}

export const logicSlice = createSlice({
    name: 'constr',
    initialState,
    reducers: {
        setDisplay: (state, action) => { state.display = action.payload },
        setPreviosNumber: (state, action) => { state.previosNumber = action.payload },
        setOperator: (state, action) => { state.operator = action.payload },
        
    },
})

export const { setDisplay, setPreviosNumber, setOperator } = logicSlice.actions

export default logicSlice.reducer