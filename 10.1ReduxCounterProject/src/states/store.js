/*
SUMMARY
1. Create a Redux store with configureStore
    configureStore accepts a reducer function as a named argument
    configureStore automatically sets up the store with good default settings
2. Provide the Redux store to the React application components
    Put a React-Redux <Provider> component around your <App />
    Pass the Redux store as <Provider store={store}>
3. Create a Redux "slice" reducer with createSlice
    Call createSlice with a string name, an initial state, and named reducer functions
    Reducer functions may "mutate" the state using Immer
    Export the generated slice reducer and action creators
4. Use the React-Redux useSelector/useDispatch hooks in React components
    Read data from the store with the useSelector hook
    Get the dispatch function with the useDispatch hook, and dispatch actions as needed
*/


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
 * React by default cannot talk to redux, we need a Provider which will help to act as a bridge between react and redux
 main.jsx madhe provider provide kelela ahe bgh
 */