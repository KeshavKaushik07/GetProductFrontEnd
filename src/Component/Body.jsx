import React from 'react';
import Products from './Products';
import Button from 'react-bootstrap/Button';
import style from "../Css/Body.module.css";

const Body = ({ noFilter, setApiData, Api, toAddCart, orgPoductApi, setNoFilter, setApi, addCartAnimation, showItemDetail, setShowItemDetail, productDetail, itemDetail }) => {
  const filter = (search) => {
    const newApi = orgPoductApi.filter(product =>
      product.name.toLowerCase().startsWith(search.toLowerCase()) ||
      product.category.toLowerCase().startsWith(search.toLowerCase()) ||
      product.description.toLowerCase().startsWith(search.toLowerCase())
    );
    setApi(newApi);
    setNoFilter(true);
  }

  return (
    <>
      <div className="filter flex gap-2 justify-center align-baseline flex-wrap mb-4 mt-2">
        <span className='font-bold text-2xl'>Catagory : </span>
        <Button variant="outline-primary" onClick={() => filter("shirt")}><span className='text-xl font-bold'>shirt</span></Button>
        <Button variant="outline-primary" onClick={() => filter("jeans")}><span className='text-xl font-bold'>jeans</span></Button>
        <Button variant="outline-primary" onClick={() => filter("watch")}><span className='text-xl font-bold'>watch</span></Button>
        <Button variant="outline-primary" onClick={() => filter("shoes")}><span className='text-xl font-bold'>shoes</span></Button>
        <Button variant="outline-primary" onClick={() => filter("t-shirt")}><span className='text-xl font-bold'>t-shirt</span></Button>
      </div>

      {noFilter &&
        <div className="flex justify-end px-8">
          <Button variant="danger" className='mx-5'>
            <span className='text-xl font-bold' onClick={setApiData}>Remove Filter</span>
          </Button>
        </div>
      }

      {addCartAnimation &&
        <div className='fixed z-999  top-40 w-full flex justify-end'>
          <span className={`${style.cart} text-2xl bg-amber-300 p-3 rounded-2xl font-bold mr-20 mt-10`}>
            Added to Cart
          </span>
        </div>
      }

      <div className="cards grid gap-5 m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
        {Api.map((item, index) => (
          <Products product={item} key={index} onClick={toAddCart} itemDetail={itemDetail} />
        ))}
      </div>

      {/* Product Detail Modal */}
      {showItemDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
          <div className="relative bg-white p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-6 transform transition-all scale-95 hover:scale-100 justify-center items-center">
            
            {/* Product Image */}
            <div className="img flex-shrink-0">
              <img
                src={productDetail.image}
                alt={productDetail.name}
                className="w-64 h-64 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Product Details */}
            <div className="itemDetail flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-2xl mb-2">{productDetail.name}</h2>
                <p className="text-gray-600 mb-4">{productDetail.description}</p>
                <div className="text-lg">
                  <span className="text-green-600 font-semibold mr-2">
                    ${productDetail.price}
                  </span>
                  <del className="text-gray-400">${productDetail.originalPrice}</del>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4 shadow-md transition" onClick={()=>toAddCart(productDetail)}>
                Add to Cart
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition"
              onClick={() => setShowItemDetail(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      
    </>
  );
}

export default Body;
