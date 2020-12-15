import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

import {TodoInputContext, TodoContext} from "./context/context";

import "./App.css";


//==============================================================//
//==============================================================//

function App() {
  let initialTodoArray = window.localStorage.getItem("todos")
  ? JSON.parse(window.localStorage.getItem("todos"))
  : [];


  const [todos, setTodos] = useState(initialTodoArray);

  //==============================================================//
  //==============================================================//

  function addTodo(todo) {
    const newTodos = [
      ...todos,
      {
        todo: todo,
        isCompleted: false,
        id: uuidv4(),
      },
    ];
    setTodos(newTodos);
  }

  //==============================================================//
  //==============================================================//

  function removeTodoById(id) {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  }
  //==============================================================//
  //==============================================================//

  function todoDoneByID(id){


    let newTodos = [...todos];
    newTodos.map((todo)=> {

      if(todo.id === id && todo.isCompleted){
        todo.isCompleted = false;
        return todo;
      }

      if(todo.id === id && !todo.isCompleted){
        todo.isCompleted = true;
        return todo;
      }


    } );

    setTodos(newTodos)
  
  }


  //==============================================================//
  //==============================================================//
  function showAllTodo() {
    return todos.map((todoList) => {
      return (
        <TodoContext.Provider 
          key={todoList.id}
          value={{ todoList, removeTodoById, todoDoneByID}}>

        <Todo/>
          </TodoContext.Provider>
      );
    });
  }

  //==============================================================//
  //==============================================================//

  function showToDoInput() {
    return (
      <TodoInputContext.Provider value={{ addTodo}}>
      <TodoInput />
      </TodoInputContext.Provider>
    )
  }

  //==============================================================//
  //==============================================================//
useEffect(()=> {
  window.localStorage.setItem("todos", JSON.stringify(todos))
  console.log(window)
}, [todos])

  //==============================================================//
  //==============================================================//


  return (
    <div className="App">
      {showToDoInput()}
      {showAllTodo()}
    </div>
  );
}

export default App;
