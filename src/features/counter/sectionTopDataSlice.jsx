import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title1: "Simple and Elegant",
}

export const sectionTopDataSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.title1 += action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeText } = sectionTopDataSlice.actions

export default sectionTopDataSlice.reducer