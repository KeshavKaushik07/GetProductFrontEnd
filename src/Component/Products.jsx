// import React from 'react'

// const Products = () => {
//   return (
//     <>
      {/* <div className="container">
        <div className="img"></div>
        <div className="title"></div>
        <div className="dis"></div>
        <div className="price"></div>
      </div> */}
    {/* </>
  )
}

export default Products */}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "../Css/Product.module.css";

function Products({product,onClick,itemDetail}) {
  return (
    <>
    <div className='flex justify-center shadow-xl/30 w-fit rounded-xl overflow-hidden ' >
    <Card style={{ width: '18rem' }} >
      <img src={product.image} alt="" onClick={()=>itemDetail(product)}/>
      <Card.Body>
        <Card.Title ><span className='font-bold'>{product.name}</span></Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <div className="price flex gap-3 m-3">
            <div className="realPrice font-bold">$ {product.price}</div>
            <div className="orgPice line-through ">$ {product.originalPrice}</div>
        </div>
        <Button variant="primary" onClick={()=>{onClick(product)}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Products;
