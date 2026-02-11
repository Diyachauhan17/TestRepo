import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage'
import Task1 from './Task1'
import D2Task1 from './Task/D2Task1'
import D2Task2 from './Task/D2Task2'

function App() {
  // const [count, setCount] = useState(0)
  // const String = "Diya"

  return (
    <>
      <D2Task2/>
      {/* <D2Task1/> */}
      {/* <Task1/> */}


      {/* <div className= 'card m-20 place-items-center my-60'>
        <img class="text-center" height='200px' width='300px' src='https://images.unsplash.com/photo-1615829253947-faef9cf73097?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
=crop&w=1170&q=80'/>
        <p className='para font-bold text-3xl m-5'>Nature</p>
      </div> */}




      {/* <Homepage str=' Diya'/>
      <Homepage str=' Good Morning'/> */}
      {/* <Homepage name='Diya' Age='21'/> */}
      
      {/* <div className="min-h-screen py-10 px-6 bg-neutral-100">
        <h1 className="text-4xl font-bold text-shadow-lg/20 hover:scale-102 text-center text-black my-10">Departments</h1>

        <div className='flex flex-col sm:flex-row gap-9 place-items-center p-10'>
          <Task1 Title="Computer Engineering" Description="Computer Engineering is a four year undergraduate programme introducing its students to realms of computer, including the theory and design of data storage, software, operating systems."/>

          <Task1 Title="IT Engineering" Description="Information Technology is an undergraduate engineering course which focuses on expanding and growing in terms of  dissemination of knowledge within and outside curriculum and skill development activities."/>

          <Task1 Title="Computer Science" Description="Computer Engineering with ML & AI at Silver Oak University is a 4-year undergraduate specialization programme that presents a solid foundation in the principles and technologies to get on the path of an exciting, sprouting career." />

        </div>
      </div>
 */}

     
    </>
  )
}

export { App }
