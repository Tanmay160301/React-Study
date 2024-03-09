/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodoContext } from "../context/Todocontext";

function TodoItem({todo}) {


    //useCOntext cha use kelay to use the functionality in our code
     const {updateTodo,deleteTodo,changeStatusOfTodo} = useTodoContext();
    const [isTodoEditable, setIsTodoEditable] = useState(false); // for 2 html components to communicate 
    //with each other ... input tag and edit cha button ... Observe the flow 

    //todo  cha message aplyala dakhvycha ahe na UI madhe 
    const [todoMsg, setTodoMsg] = useState(todo.msg);

    // console.log(todo)

    const toggleCompleted = () => {
        changeStatusOfTodo(todo.id)
    }

    const editTodo = () => {
        updateTodo(todoMsg, todo.id);
        setIsTodoEditable(false);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button ... This is an important functionality*/}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {/* Ha khalcha code fkt display prupose sathicha ahe */
                //Observe button varti kutla UI embed zala pahije te state tharavta
                }
                {isTodoEditable ? "📁" : "✏️"} 
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
