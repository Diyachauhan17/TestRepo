import React from 'react'

function Alert_msg() {
    function clickhere(){
        alert("Hello! Diya Chauhan")
    }
  return (
    <div className='text-center my-50'>
        <button onClick={clickhere} className='border rounded-xl p-3'>Click Me!!!   </button>
    </div>
  )
}

export default Alert_msg

// import React from 'react'
// function Events() {
// const clickHere = (a) => {
// alert( a);
// }
// return (
// <div>
// <button onClick={()=>clickHere('Hello')} >Good morning!</button>
// </div>
// )
// }
