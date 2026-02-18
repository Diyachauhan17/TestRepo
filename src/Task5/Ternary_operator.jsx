import React from 'react'

function Ternary_operator() {
    const arr = [1, 8, 3,5,3,6,7,9];

  return (
        <div>
            {arr.map((value) => {
            return (
            (value % 2 === 0)? <h1>{value} - Even number</h1> : <h1>{value}
            - Odd number</h1>
            );
            })}
        </div>
  )
}

export default Ternary_operator