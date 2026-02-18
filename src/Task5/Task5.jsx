import React, { useState } from 'react'
import { useEffect } from "react";


function Task5() {
    const [count,setCount]=useState(0);
    const [mul,setMul]=useState(0);
    
    useEffect(()=>{
        setMul(count *2);
    },[count]);
  return (
    <div className='place-items-center my-25'>
        <div className=" bg-gray-100 h-fit w-90 text-center p-7 border rounded-3xl ">
            <div className='place-items-center my-2'>
                <h1>The value of Count Variable is : {count}</h1>
                <button onClick={()=>setCount((c)=>c+1)} class="bg-gray-600 hover:bg-gray-900 hover:scale-105 text-white px-3 p-1 border rounded m-7">Calculate</button>
                <h1>The value of Mul is : {mul}</h1>
            </div>
        </div>
    </div>
  )
}

export default Task5