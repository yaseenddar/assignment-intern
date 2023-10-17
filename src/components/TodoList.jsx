import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {
    const [todos,setTodos] = useState([]);

    const addTask = task=>{
        if(!task.text){
            return
        }
        const newTodos = [task,...todos];
        setTodos(newTodos);
        toast.success("task added");
    }

    // remove the task
    const removeTask = id =>{
      let updatedtask = [...todos].filter(task => task.id !== id);
      setTodos(updatedtask);
      toast("task removed");

    }

    //we will remove the task from todo when we complete
    const completetask = id =>{
      let updatedTasks = todos.map(todo =>{
        if(todo.id === id ){
          todo.isComplete = true; 
         
        }
        return todo;
      })
      setTodos(updatedTasks);//now updarted the tasks once deleted one 
      toast.success("task achieved");

    }
  return (
    <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completetask={completetask} removeTask={removeTask} setTodos={setTodos} ></Todo>
        <ToastContainer/>
    </div>
  )
}
