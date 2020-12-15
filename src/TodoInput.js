import React, { useState, useContext} from 'react'
import {TodoInputContext} from "./context/context";

const TodoInput = ()=>{

    const {addTodo} = useContext(TodoInputContext)
    const [todo, setTodo] = useState("")


function handleCreateNewTodo(e){
    e.preventDefault()

    addTodo(todo)
} 




return (
    <form onSubmit={handleCreateNewTodo}>
        <input
            type ="text"
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
        />
        <button >Submit Todo</button>
    </form>
)
}
export default TodoInput;