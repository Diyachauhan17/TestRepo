import React from 'react'

function D2Taskcomponent(props) {
  return (
    <div class="p-2 flex flex-col text-center justify-between">
        <div className='hover:scale-101'>
             <img src={props.src} className='h-50 w-80'/>
        </div>
        <div class="text-2xl font-semibold p-2">{props.Title}</div>
        <div className='text-center'>
            <button class="bg-gray-100 font-bold border text-amber-950 border-gray-900 hover:bg-gray-200 px-2  m-2 rounded  hover:scale-110">Explore</button>
        </div>
    </div>
  )
}

export default D2Taskcomponent