import React from "react";
function Products({product,onClick,itemDetail}) {
  return (
    <>

    <div className="card bg-base-100 w-fit shadow-sm">
  <figure>
    <img
      src={product.image}
      alt="Shoes" 
      onClick={()=>itemDetail(product)}
      className="w-full"/>
  </figure>
  <div className="card-body flex flex-col justify-evenly">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <div className="price flex gap-3 m-3">
            <div className="realPrice font-bold">$ {product.price}</div>
            <div className="orgPice line-through ">$ {product.originalPrice}</div>
        </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{onClick(product)}}>Add to Cart</button>
    </div>
  </div>
</div>
    </>
  );
}

export default Products;
