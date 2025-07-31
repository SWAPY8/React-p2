import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative flex min-h-40 w-300 rounded-2xl flex-col items-center justify-center bg-gray-100 dark:bg-gray-900" >
       <h1 className="text-xl font-bold underline">
      Password Generator
    </h1>

       </div>
    </>
  )
}

export default App
