import React, { useEffect } from 'react'
import { useState } from 'react'

function Task5_ex() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`You clicked ${count} times `;
    },[count]);
  return (
    <div className='text-center my-50'>
        <button onClick={()=>setCount((count)=>count+1)} className='bg-gray-400 p-5'>
            click {count} times {" "}
        </button>
    </div>
  )
}

export default Task5_ex