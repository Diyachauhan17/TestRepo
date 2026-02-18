import React from 'react'
import { useState } from 'react'

function Update_counter() 
{
    const [num,setNum]=useState(0);
    
    function increment(){ //const increment=()=>{setNum(num+1);};
        setNum(num+1);
    };

    function decrement(){
        if(num<=0){
            return setNum(0);
        }
        else{
            return setNum(num-1);
        }
    };

  return (
    <div className='place-items-center my-30'>

        <div className=" bg-gray-200 h-fit w-fit text-center p-10 rounded-3xl ">
        <h1 className='text-3xl font-bold p-5'>Update value</h1>

            <div className='flex place-content-center space-x-5 my-2.5 '>
                <button onClick={decrement} className='bg-white px-3 pb-0.5 border'> - </button>
                <h1>{num}</h1>
                <button onClick={increment} className='bg-white px-2.5 pb-0.5 border'> + </button>
            </div>
        </div>
    </div>

  )
}

export default Update_counter