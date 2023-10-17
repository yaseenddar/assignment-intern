import React from 'react'

export default function Todo({todos,completetask,removeTask,setTodos}) {

  return  todos.map( (todo,index)=>( 
    <> 
   
        <div className={todo.isComplete ? 'complete  task-div flex px-1 border-[5px] border-red-400 rounded-md mx-7 mt-2 shadow-md hover:shadow-md hover:p-2 hover:border-green-400  ' 
        :
         'task-div flex px-1 border-[5px] border-blue-400 rounded-md mx-7 mt-2 shadow-md hover:shadow-md hover:p-2 hover:border-green-400 '}
         key={index}>
            <div className={todo.isComplete? 'todo-tect line-through  w-full text-left  text-[30px]'
            :
            'w-full text-left  text-[25px] '}>{todo.text}</div>
            <div className='icons flex gap-2 cursor-pointer my-auto font-semibold ' key={todo.id}>
            
            <span className=' rounded-md bg-green-600 w-[60px] font-[600]' onClick={()=>removeTask(todo.id)}>Delete</span>
            <br />
          
            <span className=' rounded-md bg-green-600  text-sm w-[75px] font-[600]' onClick={()=>completetask(todo.id)}>Achieved</span>
            <hr />
            </div>
           


        </div>
    </>
  ))
}
