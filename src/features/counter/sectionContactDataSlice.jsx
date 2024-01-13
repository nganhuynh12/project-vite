import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    yourName: "",
    yourEmail: "",
    yourMessage: ""
}

export const sectionContactDataSlice = createSlice({
    name: 'counter3',
    initialState,
    reducers: {
        changeContent: (state, action) => {
            const { fieldName, value } = action.payload;
            if (fieldName === 'yourName') {
                state.yourName = value;
            } else if (fieldName === 'yourEmail') {
                state.yourEmail = value;
            } else if (fieldName === 'yourMessage') {
                state.yourMessage = value;
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { changeContent } = sectionContactDataSlice.actions

export default sectionContactDataSlice.reducer