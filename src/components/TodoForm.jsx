import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './Slices/todoSlice';

export default function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const changeHandle = (e) => {
    setInput(e.target.value);
  };


  // we add the todo task to the todo redux state
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false
    }));
    setInput('');
  };

  return (
    <div>
      <form className='w-full'>
        <input 
          className='todo-input min-w-[250px] md:w-[20rem] p-2 font-bold rounded-md mr-2 border border-black'
          onChange={changeHandle} 
          type='text' 
          placeholder='Add a todo' 
          value={input} 
          name='text'
        />
        <button 
          onClick={submitHandler}
          className='todo-btn bg-gray-200 border border-black rounded-md cursor-pointer p-[7px] mt-1 hover:bg-black hover:text-white font-bold'
          type='submit'
        >
          Add to list
        </button>
      </form>
    </div>
  );
}
