import React from 'react'

function Homepage(props) {
  return (
    <>
    <div class="text-5xl p-5 text-center bg-gray-500 text-white font-bold">Hey !!! 
     <h1 class="text-2xl p-3 text-red-950 ">My name is : {props.name} <br></br>And My Age is : {props.Age}</h1>
    
    </div>
    </>
  )
}

export default Homepage