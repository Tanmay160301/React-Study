import { useState } from "react";
import { useTodoContext } from "../context/Todocontext";

function TodoForm() {

    //Functionalities je ahet te useContext through access karta yetat
    const {addTodo} = useTodoContext();
    const [msg, setmsg] = useState("");//Aplyala toh message disayla pahije as we type


    const addTodoObj = (e) => {
        e.preventDefault();

        if (msg === "") {
            return
        }
        else{
            // console.log(msg )
            addTodo({msg:msg, completed:false})
            setmsg("");// for performing clean-up operation
        }
        
    }
 

    return (
        <form onSubmit={addTodoObj}  className="flex">
            <input

                type="text"
                placeholder="Write Todo..."
                value={msg}
                onChange={(e) => setmsg(e.target.value)}
                className="w-full border bg-teal-700 border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit"  className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

