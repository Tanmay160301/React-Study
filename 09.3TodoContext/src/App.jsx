/**
 * 
 * Basic understanding from this project:
 * Todo List Project via context API
 * 
 */

import { useState, useEffect } from "react";
import { TodoContextProvider } from "./context/Todocontext";
import TodoForm from "./components/TodoForm";
import './App.css'
import TodoItem from "./components/TodoItem";

function App() {
 
  //ithe aapn context api cha object cha Todo ahe tyachya corresponding state banavla ahe ... 
  const [Todos, setTodos] = useState([]);
  
  //ithe context api chya functionalities lihinar or define karnar
  const addTodo = (newMsg) => {
    setTodos((prevTodo) => [...prevTodo, {id:Date.now() , ...newMsg} ])
    // localStorage.setItem("Todos", JSON.stringify(Todos));
  }

  const updateTodo = (newMsg , id) => {
    setTodos((prevTodo) =>
     prevTodo.map((individualTodo)=>
    {
      return individualTodo.id === id? {...individualTodo, msg: newMsg} : individualTodo;
    })) 
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter( (individualTodo) => individualTodo.id !== id))// At the end it will decide ki include karycha ahe ka nahi te
  }

  const changeStatusOfTodo = (id) => {
    setTodos((prevTodo) => prevTodo.map((individualTodo) => (individualTodo.id === id)?{...individualTodo, completed: !individualTodo.completed} :individualTodo ));
  }


  useEffect(() => {
    //Ha useEffect hook ... local storage madhla data gheun state madhe taktoy so that 
    // state through components la pathavta yeil
    try{
      const TodoData = JSON.parse(localStorage.getItem("todos"));
      if (TodoData && TodoData.length > 0) {
        setTodos(TodoData);
      }
    }
    catch (error) {
      console.error("Error parsing stored data:", error);
    }

    
  
  }, [])

  useEffect(() => {
    //Ha useEffect hook local storage la update kartoy
    localStorage.setItem("todos",JSON.stringify(Todos));
  }, [Todos])

  return (
    <TodoContextProvider value={{Todos, addTodo, deleteTodo, updateTodo, changeStatusOfTodo}} >
    <div className="bg-teal-500 min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto bg-teal-600 shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm /> 

                    </div>
                    <div className="flex flex-wrap gap-y-3">

                        {/*Loop and Add TodoItem here */}
                        {Todos.map((item) => (
                          // div la keys dilet to differentiate the components
                          //props through individual todo send kele ahet
                          <div key={item.id} className="w-full">
                            <TodoItem todo={item} />
                          </div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
