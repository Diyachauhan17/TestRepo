import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffect() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(count+1);
        },1000);
    },[count]);
    

  return (
    <>
        <div>
            <h1>The counter value is: {count} </h1>
        </div>
    </>
  )
}

export default UseEffect