import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, removeTask, editTask } from './Slices/todoSlice'; // Import the necessary actions from your Redux slice
import { useSelector } from "react-redux";
export default function Todo() {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todoList);// subscribe to the todo store from redux 
  // console.log(todos)

  // update the editted task
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedText(todos[index].text);
  };

  //dispatch the actoin that updates the taks list in redux
  const handleUpdate = (index) => {
    dispatch(editTask({ id: todos[index].id, newText: editedText }));
    setEditIndex(-1);
  };

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'complete task-div flex px-1 border-[5px] border-red-400 rounded-md mx-7 mt-2 shadow-md hover:shadow-md hover:border-green-400' 
      : 'task-div flex px-1 border-[5px] border-blue-400 rounded-md mx-7 mt-2 shadow-md hover:shadow-md hover:border-green-400'}
      key={index}
    >
      {
        editIndex === index 
        ? (
          <>
            <input 
              type="text" 
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)} 
            />
            <span 
              className='rounded-md bg-green-600 text-sm w-[75px] font-[600]' 
              onClick={() => handleUpdate(index)}
            >
              Update
            </span>
          </>
        )
        : (
          <>
            <div 
              className={todo.isComplete ? 'todo-text line-through w-full text-left text-[30px]' : 'w-full text-left text-[25px]'}
            >
              {todo.text}
            </div>
            <div className='icons flex gap-2 cursor-pointer my-auto font-semibold'>
              <span 
                className='rounded-md bg-green-600 w-[60px] font-[600]' 
                onClick={() => dispatch(removeTask(todo.id))}
              >
                ❌
              </span>
              <span 
                className='rounded-md shadow-xl border text-sm w-[75px] font-[600]' 
                onClick={() => dispatch(completeTask(todo.id))}
              >
                ✔️
              </span>
              <span 
                className='rounded-md bg-green-600 text-sm w-[75px] font-[600]' 
                onClick={() => handleEdit(index)}
              >
                ✏️
              </span>
            </div>
          </>
        )
      }
    </div>
  ));
}
