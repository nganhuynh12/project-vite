import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import sectionTopDataSlice from '../features/counter/sectionTopDataSlice'
import sectionContactDataSlice from "../features/counter/sectionContactDataSlice";



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sectionTopData: sectionTopDataSlice,
        sectionContactData: sectionContactDataSlice
    },
})