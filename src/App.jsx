import React, { useEffect, useState } from 'react'
import orgProductApi from "./assets/api";
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from "./Component/Body";
import Cart from './Component/Cart';

// import { toast, ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [Api, setApi] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [noFilter, setNoFilter] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addCartAnimation, setAddCartAnimation] = useState(false);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [userData, setUserData] = useState(true);
  // toast.configure();
  let rup = "₹";

  useEffect(() => {
    setApi(orgProductApi);
    const getLocal = localStorage.getItem("Cart");
    setCart(JSON.parse(getLocal));
    const getUserFromLocal = localStorage.getItem("userData");
    setUserData(JSON.parse(getUserFromLocal));
  }, [])

  const setApiData = () => {
    setApi(orgProductApi);
    setNoFilter(false);
  }
  // useEffect(() => { console.log(noFilter) }, [noFilter])

  //to add to Cart 
  const toAddCart = (product) => {
    setAddCartAnimation(true)
    setTimeout(() => {
      setAddCartAnimation(false);
    }, 1000);

    // AddCart(product);
    const exist = cart.find(item => item.id === product.id);
    if (!exist) {
      setCart([...cart, product]);
    } else {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
      // toast.success("Item added to cart!", { position: "top-right", autoClose: 2000, });
    }

  }

  function itemDetail(product) {
    let index = Api.findIndex(item => item.id == product.id)

    setProductDetail(Api[index]);
    setShowItemDetail(true);

  }

  useEffect(() => {
    // console.log(cart)
    setCount(cart.length);
    setTotalPrice(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2));
    if(userData){
       localStorage.setItem("Cart", JSON.stringify(cart));
    }
   
  }, [cart])

  useEffect(()=>{
    // console.log(userData)
    localStorage.setItem("userData", JSON.stringify(userData));
  },[userData]);
  return (
    <>
    <div className="app">
      <BrowserRouter>
        <NavBar
          count={count}
          onClick={setApi}
          setFilter={setNoFilter}
          orgProductApi={orgProductApi}
          userData={userData}
          setUserData={setUserData}
        />
          <main className='content'>
        <Routes>

          <Route path='/'
            element={
              <Body
                Api={Api}
                noFilter={noFilter}
                toAddCart={toAddCart}
                setApiData={setApiData}
                orgPoductApi={orgProductApi}
                setNoFilter={setNoFilter}
                setApi={setApi}
                addCartAnimation={addCartAnimation}
                setShowItemDetail={setShowItemDetail}
                showItemDetail={showItemDetail}
                productDetail={productDetail}
                itemDetail={itemDetail}
              />
            }>
          </Route>
          <Route path='/cart' element={
            <Cart
              cart={cart}
              setCart={setCart}
              totalPrice={totalPrice}
              userData={userData}
            />
          }>
          </Route>
        

        </Routes>
          </main>

        <Footer />

      </BrowserRouter>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}

export default App