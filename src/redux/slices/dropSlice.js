import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    droped: [],
}

export const dropSlice = createSlice({
    name: 'drop',
    initialState,
    reducers: {
        setDropList: (state, action) => { state.droped = action.payload },
        addDroped: (state, action) => {
            if (!state.droped.includes(action.payload)) {

                state.droped.push(action.payload)
            }
        },
        addToBeginning: (state, action) => {
            if (!state.droped.includes(action.payload)) {

                state.droped.unshift(action.payload)
            }
        }
    },
})

export const { addDroped, addToBeginning, setDropList } = dropSlice.actions

export default dropSlice.reducer