import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    //This is the standard syntax
    //After doing this below, the react components could access values from the counter using useSelector
    reducer:{
        counter: counterReducer,// Now we have connected our counterSlice to our store
        // user: userReducer //Like this we can connect many slices altogether
    }
})

/**
 * React by default cannot talk to redux, we need a Provider which will help to act as a bridge between react and 
 * redux
 * main.jsx madhe provider provide kelela ahe bgh
 */