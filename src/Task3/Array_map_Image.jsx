import React from 'react'

function Array_map_Image() {
    const images=[
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmFFWD47Wo_mXigIBAcqxZA-YfeXqEpwf_A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_xCRXoBKpF9NqMqpeGv-RsupGdVQbty-pg&s",
        "https://images.unsplash.com/photo-1661950159450-566edc48747d?ixlib=rb1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit        =crop&w=387&q=80"
    ]
  return (
    <div className='place-items-center'>
    <div>Array_map_Image</div>
    <div className='flex'>
    {
        images.map((im)=><div><img src={im} className='p-2 h-40 w-60'></img></div>)
    }
    </div>
    </div>
  )
}

export default Array_map_Image