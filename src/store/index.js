import { configureStore } from "@reduxjs/toolkit";
import reducerReducer from '../reducers/reducerSlice'

export default configureStore({
    reducer: {
        reducers: reducerReducer
    }
});