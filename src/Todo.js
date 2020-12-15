import React, { useContext } from 'react';
import {TodoContext} from "./context/context";

const Todo = ()=>{

const {todoList: {todo, id, isCompleted}, removeTodoById, todoDoneByID} = useContext(TodoContext)
// key={todoList.id}

return (
    <div style ={{textDecoration: isCompleted ? "line-through": ""}}>

        {todo}


    <div>

    <button onClick={()=> todoDoneByID(id)}>Done</button>
    <button onClick={()=> removeTodoById(id)}>Delete</button>

    </div>
    <hr />


    </div>
)
}
export default Todo
