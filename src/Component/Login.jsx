import React, { useEffect, useState } from 'react';
import style from "../Css/Login.module.css"

const Login = ({ setShowLogin, setShowShowSignUp, setUserData, Api }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [forgotInput, setForgotInput] = useState({
    email: "",
    answer: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState("false");
  const [showForgot, setShowForgot] = useState(false);
  const [showForPass, setShowForPass] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);


  async function handleLogin() {
    try {
      setShowSpinner(true);
      const apiData = await fetch(`${Api}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input })
      });
      setShowSpinner(false);
      const data = await apiData.json();
      // console.log(apiData);
      // console.log(data);
      if (data.success) {
        setInput({
          email: "",
          password: "",
        });
        // setSuccess(true);
        setUserData(data.user);
        setShowLogin(false);
        //  setError(false);
        alert(data.message);
      } else {
        // setError(data.message);
        alert(data.message);
        // setError(false);
      }
    } catch (err) {
      console.log("error in login :", err)
    }
  }

  // useEffect(() => { console.log(input) }, [input]);

  return (
    <>
      <div className={style.container}>
        {!showForgot ?
          <div className={style.loginForm}>
            <h1 className={style.title}>Login</h1>
            <div className={style.form}>
              <button onClick={() => setShowLogin(false)} className={style.Cross}>X</button>
              <label htmlFor="email">Email : </label>
              <input type="email" onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder='Enter Email' name='email' />
              <label htmlFor="password">Password : </label>
              <input type={showPassword ? "password" : "text"} onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder='Enter password' name='password' />
              <div className={style.check}>
                <input type="checkbox" name="" id="" onChange={() => setShowPassword(!showPassword)} />
                <span>Show Password</span>
              </div>

              <div className={style.signup}>
                <span>New user ? </span>
                <button className={style.signButton} onClick={() => { setShowLogin(false); setShowShowSignUp(true) }}>sing up</button>
              </div>

              <button className={style.loginButton} onClick={handleLogin}>Login</button>

              <p className='text-lg self-center'>forgot Password :
                <button
                  className='underline text-xl text-blue-800'
                  onClick={() => { setShowForgot(true) }}
                >forgot</button></p>
            </div>

          </div>
          :
          <div className={style.loginForm}>
            <h1 className={style.title}>Reset password</h1>
            <form action="">
              <div className={style.form}>
                <button onClick={() => setShowLogin(false)} className={style.Cross}>X</button>
                <label htmlFor="email">Email : </label>
                <input
                  type="email"
                  onChange={(e) => setForgotInput({ ...forgotInput, email: e.target.value })}
                  placeholder='Enter Email'
                  required />
                <label htmlFor="answer">Asnwer : </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setForgotInput({ ...forgotInput, answer: e.target.value })}
                  placeholder='Enter Answer '
                  name='answer' />
                <label htmlFor="password">Password : </label>
                <input
                  type={!showForPass ? "password" : "text"}
                  required
                  onChange={(e) => setForgotInput({ ...forgotInput,password: e.target.value })}
                  placeholder='Enter password'
                  name='password' />
                <label htmlFor="password">Conform password : </label>
                <input
                  type={!showForPass ? "password" : "text"}
                  required
                  onChange={(e) => setInput(console.log("bb"))}
                  placeholder='Re-enter the password'
                  name='password' />
                <div className={style.check}>
                  <input type="checkbox" name="" id="" onChange={() => setShowForPass(!showForPass)} />
                  <span>Show Password</span>
                </div>
                <button type="submit"
                  className="bg-amber-600 w-full self-center py-2 px-3 rounded text-white mt-2 font-bold"
                >Update</button>
              </div>
            </form>
            <button className="bg-blue-700 w-fit self-center py-1 px-3 rounded text-white" onClick={() => { setShowForgot(false) }}>back to login</button>
          </div>
        }

        {
          showSpinner &&
          <div className="w-15 h-15 border-8 border-blue-500 border-t-transparent rounded-full motion-safe:animate-spin absolute"></div>

        }
      </div>
    </>
  )
}

export default Login