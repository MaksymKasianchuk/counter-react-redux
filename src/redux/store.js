import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reduser';


const store = configureStore({
    reducer: {
       counter: counterReducer, 
    },
});

export default store;