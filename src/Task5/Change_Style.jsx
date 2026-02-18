import React from 'react'
import { useState } from 'react';

function Change_Style() {
    const [a,setA]=useState('skyblue');
    const changetag=()=>{
        setA('yellow');
    };

  return (
<div className='place-items-center my-25'>

        <div className=" bg-gray-100 h-fit w-90 text-center p-7 border rounded-3xl ">
        <h1 className='text-3xl font-bold p-5'>Change Text Color</h1>

            <div className='place-items-center my-2 '>
                <h1 style={{background:a}}>Hello World , Good Morning!!!</h1>
                <button onClick={changetag} className='bg-gray-600 hover:bg-gray-900 hover:scale-105 text-white px-3 p-1 border rounded mt-7'> Change Color </button>
               
            </div>
        </div>
    </div>  )
}

export default Change_Style