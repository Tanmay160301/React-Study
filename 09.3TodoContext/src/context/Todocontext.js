/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

//Observe this
//Step 1: Create the context 
export const TodoContext = createContext({
    Todos: [], // hechya corresponding aapn Parent madhe states banavnar... and provider through pathvnar

    addTodo: (newMsg) => {}, //hecha corresponding aapn parent madhe functionality lihinar 
    deleteTodo: (id) => {},
    updateTodo: (newMsg, id) => {},
    changeStatusOfTodo: (id) => {}
});


// Provider ithech banavla 
//Step 2: Create a Provider
export const TodoContextProvider = TodoContext.Provider ;



//Custom hook - so that pratyek veli 2 imports lihychi garaj nahi ... todocontext and useContext
//Step 3. Create a custom hook
export const useTodoContext = () => {
    return useContext(TodoContext)
}