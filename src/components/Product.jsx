import React, { useState } from 'react'
import { product } from '../data/api'

const Product = () => {
  return (
    <div className='bg-gray-100'>
      <div className="container px-10 py-20 mx-auto">
      <div className="flex flex-wrap -m-4">
        {
          product.map((x)=>{
            const [picture , setPicture]  = useState(x.img)
            return(
              <>
              <div className="p-1.5 sm:w-1/2 md:w-1/3 lg:w-1/6" >
                <div className="border-2 border-opacity-50 border-gray-100 overflow-hidden hover:border-opacity-100 hover:border-r-gray-300 hover:border-l-gray-300 hover:border-b-gray-300">
                  <img src={picture} onMouseEnter={()=>{setPicture(x.onhover)}} onMouseLeave={()=>{setPicture(x.img)}} className='object-center object-cover w-auto cursor-pointer lg:h-48 md:h-36' alt="" />
                  <div className=" cursor-pointer bg-white">
                    <h3 className='text-left text-md text-black'>{x.title}</h3>
                    <h3 className='text-left text-black text-md mb-'>{x.price}</h3>
                    <h6 className='text-left text-black text-sm'>{x.off}</h6>
                  </div>
                </div>
                </div>
                </>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Product
