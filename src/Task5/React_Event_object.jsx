import React from 'react'

function React_Event_object() {
    const clickHere = (a,b) => {
        alert(a + b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
        }
        
  return (
    <div className='text-center my-50'>
        <button onClick={(event)=>clickHere('We have just used : ',event)} className='border rounded-xl p-3' >Click Me!</button>
    </div>  
    )
}

export default React_Event_object