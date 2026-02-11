import React from 'react'
import D2Taskcomponent from './D2Taskcomponent'

function D2Task1() {
  return (
    <div className='min-h-screen py-10 px-6 place-items-center bg-neutral-100'>
        <div className='text-4xl font-bold text-shadow-lg/20 hover:scale-102 text-center text-black my-10' >
            Image Gallery
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 place-items-center p-10'>
          <D2Taskcomponent img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" Title="Nature" />
        
          <D2Taskcomponent img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmFFWD47Wo_mXigIBAcqxZA-YfeXqEpwf_A&s" Title="Travel" />
      
          <D2Taskcomponent img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_xCRXoBKpF9NqMqpeGv-RsupGdVQbty-pg&s" Title="Animal"/>
                  
        </div>
    </div>
  )
}

export default D2Task1