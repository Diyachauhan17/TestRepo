import React from 'react'

function Array_map_image_info() {
    const images=[
        {
            image:"https://m.media-amazon.com/images/I/41JKECG1H5L._SX300_SY300_QL70_FMwebp_.jpg",
            text:"Samsung Crystal 4K 65 inch",
            price:"₹ 72,490"
        },
        {
            image:"https://m.media-amazon.com/images/I/51dGr-tOX5L._SX300_SY300_QL70_FMwebp_.jpg",
            text:"Vu 55 inch QLED 4K",
            price:"₹ 77,990"
        },
        {
            image:"https://i01.appmifile.com/webfile/globalimg/13/C788E5B6-2BC8-7C22-93F1-3D3EC675B9C1.jpg",
            text:"Mi QLED 75 inch",
            price:"₹ 59,999"
        }
    ]
  return (
    <div className='place-items-center'>
    <div>Array_map_image_info</div>
    <div className='flex'>
        {
            images.map((im)=><div className='place-items-center'><img src={im.image} class="h-40 w-60 p-2"></img><h1>{im.text}</h1><h1 className='text-green-600 font-bold'>{im.price}</h1></div>)
        }
    </div>
    </div>
  )
}

export default Array_map_image_info