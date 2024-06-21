import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-10">
      <h1 className="text-3xl text-center font-bold">Redux Toolkit</h1>
      <AddTodo/>
      <Todo/>
      </div>
    </>
  )
}

export default App
