import React from 'react'
import { useState } from 'react'
import img1 from "./Images/image.jpg"
import img2 from "./Images/image2.avif"

function Change_image() {
    const [image,setImage]=useState(img1);

    function changeImage(){
        setImage(img2);
    }
  return (
    <div className='place-items-center my-25'>

        <div className=" bg-gray-200 h-fit w-90 text-center p-7 border rounded-3xl ">
        <h1 className='text-3xl font-bold p-5'>Change Image</h1>

            <div className='place-items-center my-2 '>
                <img src={image} className='h-40 w-60 m-4'></img>
                <button onClick={changeImage} className='bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white px-3 p-1 border rounded mt-7'> Change Image </button>
               
            </div>
        </div>
    </div>
  )
}

export default Change_image