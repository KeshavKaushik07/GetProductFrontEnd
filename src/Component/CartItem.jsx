import React from 'react';

const CartItem = ({ product, onIncrement, onDecrement, onDelete }) => {
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg bg-white mb-4 shadow-xl gap-2">
      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md" />

      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-md font-bold text-blue-600">${(product.price*product.quantity).toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onDecrement(product.id)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          −
        </button>
        <span className="px-3 font-semibold">{product.quantity}</span>
        <button
          onClick={() => onIncrement(product.id)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onDelete(product.id)}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
