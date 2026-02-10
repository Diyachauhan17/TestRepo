import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage'
import Task1 from './Task1'

function App() {
  // const [count, setCount] = useState(0)
  // const String = "Diya"

  return (
    <>
      {/* <Homepage str=' Diya'/>
      <Homepage str=' Good Morning'/> */}
      {/* <Homepage name='Diya' Age='21'/> */}
      
      <div className="min-h-screen py-10 px-6 bg-neutral-100">
        <h1 className="text-4xl font-bold text-shadow-lg/20 hover:scale-102 text-center text-black my-10">Departments</h1>

        <div className='flex flex-col sm:flex-row gap-9 place-items-center p-10'>
          <Task1 Title="Computer Engineering" Description="Computer Engineering is a four year undergraduate programme introducing its students to realms of computer, including the theory and design of data storage, software, operating systems."/>

          <Task1 Title="IT Engineering" Description="Information Technology is an undergraduate engineering course which focuses on expanding and growing in terms of  dissemination of knowledge within and outside curriculum and skill development activities."/>

          <Task1 Title="Computer Science" Description="Computer Engineering with ML & AI at Silver Oak University is a 4-year undergraduate specialization programme that presents a solid foundation in the principles and technologies to get on the path of an exciting, sprouting career." />

        </div>
      </div>


     
    </>
  )
}

export { App }
