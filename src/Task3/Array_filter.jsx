import React from 'react'

function Array_filter() {
    const price=[1,2,3,4,5,6,3,7,8,3,9]
    const new_array=price.filter((num)=>{
        if(num===3)
        {
            return false;
        }
        else{
            return true;
        }
    })
  return (    
    <>
    <div>Array_filter</div>
  
        {
            new_array.map((num)=><p>{num}</p>)
        }
  
    </>
  )
}

export default Array_filter