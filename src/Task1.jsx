import React from 'react'

function Task1(props) {
  return (
        <div class="border-3 border-cyan-800 shadow-lg shadow-cyan-500/10  rounded-3xl bg-amber-50 text-center p-4 hover:scale-101">
            <h1 class="text-2xl font-semibold p-2">{props.Title}</h1>
            <p class="p-2 text-center">{props.Description}</p>
            <button class="bg-amber-100 border-3 font-bold text-amber-950 border-amber-900 hover:bg-orange-200 px-4 py-1 m-2 rounded  hover:scale-110 ">Apply Now</button>
        </div>
  )
}
 
export default Task1