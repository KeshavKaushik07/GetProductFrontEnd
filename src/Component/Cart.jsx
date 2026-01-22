import React, { useState } from 'react';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import CheckOut from './CheckOut';


const Cart = ({ cart, setCart, totalPrice, userData }) => {
  const [showCheckOut, setShowCheckOut] = useState(false);


  const handleIncrement = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setCart(cart.flatMap(item => {
      if (item.id === id) {
        if (item.quantity > 1) { return { ...item, quantity: item.quantity - 1 }; }
        else {
          return []; // remove item 
        }
      } return item;
    }));
  };

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      {showCheckOut ?
        <CheckOut setShowCheckOut={setShowCheckOut} />
        :
        <>
          <h1 className="text-2xl font-bold m-10 flex justify-center">Your Cart 🛒</h1>
          <div className="max-w-4xl mx-auto m-6 mt-10 p-8 min-h-[80vh] bg-blue-100">

            <div className={`mt-16 mb-4 min-h-full flex flex-col justify-evenly ${cart.length > 1 ? "" : "gap-28"}`}>
              {cart.length > 0 ? (
                cart.map(product => (
                  <CartItem
                    key={product.id}
                    product={product}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                  />
                ))
              ) : (<>
                <p className="text-gray-500 text-2xl mb-10 mt-10 h-32 flex justify-center">Your cart is empty !</p>
                <NavLink to="/" className="w-fit self-center" style={{ textDecoration: "none" }}>
                  <button className='m-4 bg-gray-300 p-2 pb-3 font-bold overflow-hidden text-2xl ' style={{ borderRadius: "20px" }} ><sub> <span className='text-3xl'>←  </span></sub> Back to Shopping</button>
                </NavLink>
              </>)}
            </div>

          </div>
          {cart.length > 0 && <div className="flex flex-col items-center m-7 gap-6 text-2xl font-bold">
            <span>Total Price : ${totalPrice}</span>
            {userData ?
              <button
                className="bg-amber-300 sm:w-48 px-4 py-3 rounded cursor-pointer mb-3"
                onClick={() => { setShowCheckOut(true) }}>
                Checkout
              </button>
              : <button className="bg-amber-200 sm:w-48 px-4 py-3 rounded mb-3" disabled title='Login to checkout'> Checkout </button>}


          </div>}
        </>
      }
    </>
  );
};

export default Cart;
