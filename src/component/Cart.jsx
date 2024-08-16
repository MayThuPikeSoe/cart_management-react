import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='border border-black grid grid-cols-6 '>
        <div className="col-span-1">
            <img src={cart.product.image} alt="" />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-3"></div>
        <div className="col-span-4"></div>
    </div>
  )
}

export default Cart