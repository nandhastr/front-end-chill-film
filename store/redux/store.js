import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./dataSlice";

const store = configureStore({
    reducer: {
        data: dataReducer
    },
});

store.subscribe(() => { 
    // console.log("onchange store : ", store.getState());
 })


export default store
