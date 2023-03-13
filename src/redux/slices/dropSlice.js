import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    droped: [],
    queue: []
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
        },
        undoDroped: (state, action) => {
            state.droped = state.droped.filter((item) => item !== action.payload)
        },
        addToQueue: (state, action) => {
            if (!state.queue.includes(action.payload)) {

                state.queue.push(action.payload)
            }
        },
        popQueue: (state) => {
            state.queue.pop()
        }
    },
})

export const { addDroped, addToBeginning, setDropList, undoDroped, addToQueue, popQueue } = dropSlice.actions

export default dropSlice.reducer