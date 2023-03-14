import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    display: "0",
    previosNumber: null,
    operator: null,
    isNewNumber: true,
}

export const logicSlice = createSlice({
    name: 'constr',
    initialState,
    reducers: {
        setDisplay: (state, action) => { state.display = action.payload },
        setPreviosNumber: (state, action) => { state.previosNumber = action.payload },
        setOperator: (state, action) => { state.operator = action.payload },
        setIsNewNumber: (state, action) => { state.isNewNumber = action.payload },
        
    },
})

export const { setDisplay, setPreviosNumber, setOperator, setIsNewNumber } = logicSlice.actions

export default logicSlice.reducer