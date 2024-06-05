import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {
   
  return (
    <div>
        <TodoForm ></TodoForm>
        <Todo ></Todo>
        <ToastContainer/>
    </div>
  )
}
