import React from 'react'

const CheckOut = ({setShowCheckOut}) => {
  return (
    <>
    <div className='min-h-[80vh] flex sm:flex-row flex-col' >
       
       <div className='w-1/3 bg-amber-300 flex justify-center items-center'>
           <p>data</p>
       </div>

       <div className='bg-amber-600 w-full flex justify-center items-center' >

       <button onClick={()=>setShowCheckOut(false)} className='bg-white '>Back to cart</button>

       </div>
    </div>
    </>
  )
}

export default CheckOut