import React from 'react'

function Logical_operator() {
    const arr = [1, 8, 3,5,10];

    return (
        <div>
            {arr.map((value) => {
            return (
            value % 2 === 0 && 
            <h1>The even number from array is : {value}</h1>
            );
            })}
        </div>
  )
}

export default Logical_operator