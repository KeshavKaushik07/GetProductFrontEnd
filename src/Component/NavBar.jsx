import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import { NavLink } from 'react-router-dom';
import Register from './Register'
import Login from './Login';
import React, { useState } from 'react'


function NavBar({ count, onClick, setFilter, orgProductApi, userData, setUserData }) {
  const API = "https://get-product-sever.vercel.app/api/v1";

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowShowSignUp] = useState(false);

  function handleLogOut() {
    const isConfirmed = confirm("Do you really want to logout?");
    if (isConfirmed) {
      setUserData(null);
    }
  }


  const filter = (search) => {
    const newApi = orgProductApi.filter(product =>
      product.name.toLowerCase().startsWith(search.toLowerCase()) ||
      product.category.toLowerCase().startsWith(search.toLowerCase()) ||
      product.description.toLowerCase().startsWith(search.toLowerCase())
    );
    onClick(newApi);
    setFilter(true);
  }
  // function SignUp(){
  //    if(!user){
  //     return <Register Api={API} setShowLogin={setShowLogin} />
  //    }else{
  //     return <Button>Log Out</Button>
  //    }
  // }
  return (
    <div className='sticky top-0 z-10  '>
      <Navbar expand="lg" className="bg-body-tertiary text-white  ">
        <Container fluid className=' bg-black text-2xl p-4'>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <span className='text-2xl md:text-4xl text-white font-bold'>GetProduct!</span>

          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"

            >
              <Nav.Link as={NavLink} to="/" className="text-white font-extrabold m-3 p-3" style={({ isActive }) => ({ background: isActive ? "blue" : "black", borderRadius: "10px" })}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart" className="text-white font-bold m-3 p-3" style={({ isActive }) => ({ background: isActive ? "Blue" : "black", borderRadius: "10px" })}>
                <span className='text-xl md:text-3xl'>🛒 <span className='bg-red-500 p-1 md:p-2 rounded-full'>{count}</span></span>

              </Nav.Link>
            </Nav>
            <div className='w-full md:w-1/2 flex flex-col gap-3'>
              <div className="mx-0 md:mx-5">
                <Search filter={filter} />
              </div>
            </div>
            {
              userData ?
                <div className="loginSingin flex justify-center ">
                  <Button variant='outline-danger' onClick={handleLogOut}><span className='font-bold'>Log out</span></Button>
                </div>
                : <div className="loginSingin flex gap-3 justify-center ">
                  <div className='m-2'>
                  <Button variant='outline-primary' onClick={() => setShowShowSignUp(true)}><span className='font-bold'>Sign up</span></Button>
                  </div>
                  {showSignUp &&
                    <Register
                      Api={API}
                      setShowLogin={setShowLogin}
                      setShowShowSignUp={setShowShowSignUp}
                      setUserData={setUserData}
                    />}
                    <div className='m-2'>
                  <Button variant='outline-primary' onClick={() => setShowLogin(true)}><span className='font-bold'>Login</span></Button>
                  </div>
                  {showLogin &&
                    <Login
                      Api={API}
                      setShowLogin={setShowLogin}
                      setShowShowSignUp={setShowShowSignUp}
                      setUserData={setUserData}
                    />}
                </div>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
// function LogOut() {
//   return (
//     <button>Log out</button>
//   );
// }

export default NavBar;