import React from 'react'
import { useState } from 'react';

function Change_val() {
    const [num,setNum]=useState(0);
    function update(){
        setNum(num+1);
    }
  return (
    <div className='place-items-center my-30 '>
        <div className='bg-amber-100 h-fit w-fit text-center p-10 rounded-3xl '>
            <h1 className='text-2xl p-3'>Change value</h1>

            <button onClick={update} className='bg-amber-50 m-3 p-2 border rounded'>Click Me!</button>
            <p>My age is : {num}</p>
        </div>
    </div>
  )
}

export default Change_val