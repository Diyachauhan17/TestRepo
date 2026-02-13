import React from 'react'

function Task3() {
    const images=[
        {
            image:'./src/Task3/Products/TV1.jpg',
            category:"Television",
            index:1,
        },
        {
            image:"./src/Task3/Products/TV2.jpg",
            category:"Television",
            index:2,
        },
        {
            image:'./src/Task3/Products/TV3.jpg',
            category:"Television",
            index:3,
        },
        {
            image:"./src/Task3/Products/Mobile1.jpg",
            category:"Mobile",
            index:3,
        },
        {
            image:"./src/Task3/Products/Mobile2.jpg",
            category:"Mobile",
            index:5,
        },
        {
            image:"./src/Task3/Products/Mobile3.jpg",
            category:"Mobile",
            index:4,
        },
        {
            image:"./src/Task3/Products/AC1.jpg",
            category:"Air Conditioner",
            index:5,
        },
        {
            image:"./src/Task3/Products/AC2.jpg",
            category:"Air Conditioner",
            index:7,
        },
        {
            image:"./src/Task3/Products/AC3.jpg",
            category:"Air Conditioner",
            index:6,
        }    
    ]
    const tv=images.filter((item)=>item.category==="Television");
    const mobile=images.filter((item)=>item.category==="Mobile");
    const ac=images.filter((item)=>item.category==="Air Conditioner");

  return (
    <div className='place-items-center m-2.5 p-2 text-black'>
        <h1 className='text-5xl font-bold py-3 text-shadow-amber-900 text-shadow-lg/40 '>E-commerce Page</h1>

        
        <div className='text-3xl text-blue-950 font-bold py-3 text-shadow-gray-600 text-shadow-lg/40 '>Products</div>

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