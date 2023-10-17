import React, { useState } from 'react'

export default function TodoForm(props) {
    const [input,setInput] = useState('');
   
    const changeHandle = e =>{
        setInput(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random() * 100000),
            text:input,
            isComplete:false
    })
    setInput('');

    }
  return (
    <div>
        <form className=' w-full' >
            <input className='todo-input min-w-[250px] md:w-[20rem] p-2 font-bold rounded-md mr-2 border border-black'
             onChange={changeHandle} type='text' placeholder='Add a todo' value={input} name='text'
            
            ></input>
            <button onClick={submitHandler}
             className='todo-btn bg-gray-200 border border-black rounded-md cursor-pointer p-[7px] mt-1 hover:bg-black hover:text-white font-bold'
              type='submit' >Add to list</button>
        </form>
        
    </div>
  )
}
