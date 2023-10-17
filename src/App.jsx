import './App.css'
import TodoList from './components/TodoList'
function App() {
  

  return (
   
      <div className='mt-1 p-2 flex flex-col text-center  shadow-lg
      border-2 border-black m-2 min-w-[10rem] md:w-[30rem] min-h-[25rem] md:h-[30rem]  bg-[#2aa8a0] rounded-md'>
        <TodoList></TodoList>
       </div>
   
  )
}

export default App
