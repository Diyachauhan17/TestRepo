import React from 'react'
const price=[10,20,30,40,50]

function Array_map() {
  return (
    <>
    <div>Array_map</div>
    <div>
        {
            price.map((amount)=><h1>{amount}</h1>)
        }
    </div>
    </>
  )
}

export default Array_map