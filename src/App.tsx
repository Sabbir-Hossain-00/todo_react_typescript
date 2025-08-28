import './App.css'
import { AddTodo } from './components/AddTodo/AddTodo'

function App() {

  return (
    <>
      <main className=' w-full h-screen bg-cyan-950 text-white flex flex-col justify-center items-center'>
        <AddTodo/>
      </main>
    </>
  )
}

export default App
