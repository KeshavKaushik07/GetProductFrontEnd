import React, { useEffect, useState } from 'react';
import style from "../Css/Login.module.css"

const Login = ({ setShowLogin, setShowShowSignUp, setUserData, Api }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [showPassword,setShowPassword] = useState("false");
  // const [success,setSuccess] = useState(false);
  // const [error,setError] = useState(false);

 async function handleLogin(){
    try{
      const apiData = await fetch(`${Api}/auth/login`,{
        method: "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify({...input})
      });
      const data = await apiData.json();
      // console.log(apiData);
      // console.log(data);
      if(data.success)
      {
        setInput({
          email: "",
    password: "",
        });
        // setSuccess(true);
        setUserData(data.user);
         setShowLogin(false);
        //  setError(false);
         alert(data.message);
      }else
        {
        // setError(data.message);
        alert(data.message);
        // setError(false);
      }
    }catch(err)
    {
      console.log("error in login :" ,err)
    }
  }

  // useEffect(() => { console.log(input) }, [input]);

  return (
    <>
      <div className={style.container}>
        <div className={style.loginForm}>
          <h1 className={style.title}>Login</h1>
          <div className={style.form}>
            <button onClick={() => setShowLogin(false)} className={style.Cross}>X</button>
            <label htmlFor="email">Email : </label>
            <input type="email" onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='Enter Email' name='email'/>
            <label htmlFor="password">Password : </label>
            <input type={showPassword ? "password":"text"} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='Enter password' name='password'/>
            <div className={style.check}>
               <input type="checkbox" name="" id="" onChange={()=>setShowPassword(!showPassword)}/>
            <span>Show Password</span>
            </div>

            <div className={style.signup}>
              <span>New user ? </span>
              <button className={style.signButton} onClick={()=> {setShowLogin(false); setShowShowSignUp(true )}}>sing up</button>
              </div>
           
            <button className={style.loginButton} onClick={handleLogin}>Login</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login