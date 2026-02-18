import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Task1 from './Task1'
import D2Task1 from './Task/D2Task1'
import D2Task2 from './Task/D2Task2'
import Array_map from './Task3/Array_map'
import Array_filter from './Task3/Array_filter'
import Array_map_Image from './Task3/Array_map_Image'
import Array_map_image_info from './Task3/Array_map_image_info'
import Task3 from './Task3/Task3'
import Contact from './Contact';
import Navbar from './Navbar';
import { createContext } from 'react';
import Home from './Home';
export const UserContext = createContext();
import { useEffect } from 'react';
import Change_val from './Task5/Change_val';
import Update_counter from './Task5/Update_counter';
import Change_image from './Task5/Change_image';
import Change_Style from './Task5/Change_Style';
import UseEffect from './Task5/UseEffect';
import Task5 from './Task5/Task5';
import Task5_ex from './Task5/Task5_ex';
import Alert_msg from './Task5/Alert_msg';
import React_Event_object from './Task5/React_Event_object';
import If_statement from './Task5/If_statement';
import Logical_operator from './Task5/Logical_operator';
import Ternary_operator from './Task5/Ternary_operator';


function App() {
  // const [count, setCount] = useState(0)
  // const String = "Diya"
  
  const str="hello from App";
  

  return (
    <>
    
      {/* <Change_val/> 
      <Update_counter/> 
      <Change_image/>
      <Change_Style/>
      <UseEffect/>
      <Task5/>
      <Task5_ex/> */}
      {/* <Alert_msg/> */}
      {/* <React_Event_object/> */}
      {/* <If_statement/><If_statement isMatch={true}/> */}
      <Logical_operator/>
      <Ternary_operator/>

      {/* <div className="App">
        <Router>
        <Navbar />
      
        <UserContext.Provider value={str}>
          <h1>{`Hii ${str}!`}</h1>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Task3/Task3" element={<Task3 />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
        </UserContext.Provider>
        
        </Router>
      </div> */}

      

      {/* <Task3/> */}
      {/* <Array_map_image_info/> */}
      {/* <Array_map_Image/> */}
      {/* <Array_filter/> */}
      {/* <Array_map/> */}
      {/* <D2Task2/> */}
      {/* <D2Task1/> */}
      {/* <Task1/> */}
     
    </>
  )
}

export { App }


//  import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
//      <div className= 'card m-20 place-items-center my-60'>
//         <img class="text-center" height='200px' width='300px' src='https://images.unsplash.com/photo-1615829253947-faef9cf73097?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
// =crop&w=1170&q=80'/>
//         <p className='para font-bold text-3xl m-5'>Nature</p>
//       </div> 




//       <Homepage str=' Diya'/>
//       <Homepage str=' Good Morning'/> 
//        <Homepage name='Diya' Age='21'/> 
      
//        <div className="min-h-screen py-10 px-6 bg-neutral-100">
//         <h1 className="text-4xl font-bold text-shadow-lg/20 hover:scale-102 text-center text-black my-10">Departments</h1>

//         <div className='flex flex-col sm:flex-row gap-9 place-items-center p-10'>
//           <Task1 Title="Computer Engineering" Description="Computer Engineering is a four year undergraduate programme introducing its students to realms of computer, including the theory and design of data storage, software, operating systems."/>

//           <Task1 Title="IT Engineering" Description="Information Technology is an undergraduate engineering course which focuses on expanding and growing in terms of  dissemination of knowledge within and outside curriculum and skill development activities."/>

//           <Task1 Title="Computer Science" Description="Computer Engineering with ML & AI at Silver Oak University is a 4-year undergraduate specialization programme that presents a solid foundation in the principles and technologies to get on the path of an exciting, sprouting career." />

//         </div>
//       </div>
 
