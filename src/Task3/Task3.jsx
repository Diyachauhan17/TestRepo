import React from 'react'
import TV1 from './Products/TV1.jpg'
import TV2 from "./Products/TV2.jpg"
import TV3 from "./Products/TV3.jpg"
import Mobile1 from "./Products/Mobile1.jpg"
import Mobile2 from "./Products/Mobile2.jpg"
import Mobile3 from "./Products/Mobile3.jpg"
import AC1 from "./Products/AC1.jpg"
import AC2 from "./Products/AC2.jpg"
import AC3 from "./Products/AC3.jpg"

function Task3() {
    const images=[
        {
            image:TV1,
            category:"Television",
            index:1,
        },
        {
            image:TV2,
            category:"Television",
            index:2,
        },
        {
            image:TV3,
            category:"Television",
            index:3,
        },
        {
            image:Mobile1,
            category:"Mobile",
            index:3,
        },
        {
            image:Mobile2,
            category:"Mobile",
            index:5,
        },
        {
            image:Mobile3,
            category:"Mobile",
            index:4,
        },
        {
            image:AC1,
            category:"Air Conditioner",
            index:5,
        },
        {
            image:AC2,
            category:"Air Conditioner",
            index:7,
        },
        {
            image:AC3,
            category:"Air Conditioner",
            index:6,
        }    
    ]
    const tv=images.filter((item)=>item.category==="Television");
    const mobile=images.filter((item)=>item.category==="Mobile");
    const ac=images.filter((item)=>item.category==="Air Conditioner");

  return (
    <div className='place-items-center m-2.5 p-2 text-black'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold py-3 text-shadow-amber-900 text-shadow-lg/40 '>E-commerce Page</h1>

        
        <div className='text-2xl sm:text-3xl text-blue-950 font-bold py-3 text-shadow-gray-600 text-shadow-lg/40 '>Products</div>

        {/* TV section */}
        <div class="place-items-center shadow-cyan-950 shadow-md bg-blue-100 m-6 mb-10 rounded-2xl p-2 text-black">
            <h2 className='text-2xl font-bold p-2'>Television</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid p-2'>
                {tv.map((im)=>(
                    <div className='place-items-center p-2'><img src={im.image} class="h-40 w-60 p-2 place-items-center"></img><h1 className='p-1 text-lg'>{im.category} Model {im.index}</h1></div>
                ))
                }
            </div>
        </div>

          {/* Mobile section */}
          <div class="place-items-center shadow-cyan-950 shadow-md bg-blue-100 m-3 mb-10 rounded-2xl p-2  text-black">
            <h2 className='text-2xl font-bold p-2'>Mobile</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid p-2'>
                {mobile.map((im)=>(
                    <div className='place-items-center p-2'><img src={im.image} class="h-40 w-60 p-2"></img><h1 className='p-1 text-lg'>{im.category}  Model {im.index}</h1></div>
                ))
                }
            </div>
        </div>

          {/* AC section */}
          <div class="place-items-center shadow-cyan-950 shadow-md bg-blue-100 rounded-2xl p-2 text-black m-3">
            <h2 className='text-2xl font-bold p-2'>Air Conditioner</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid p-2'>
                {ac.map((im)=>(
                    <div className='place-items-center p-2'><img src={im.image} class="h-40 w-60 p-2"></img><h1 className='p-1 text-lg'>{im.category}    Model {im.index}</h1></div>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Task3