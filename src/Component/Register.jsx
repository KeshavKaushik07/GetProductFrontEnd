import React, { useEffect, useState } from 'react';
import style from "../Css/Register.module.css";
import img from "../assets/icons8-mailchimp-100.png";

const Register = ({ Api, setShowLogin, setShowShowSignUp, setUserData }) => {
    const [input, setInput] = useState({
        userName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        answer: "",
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false)
    async function submitHandle() {
        try {
            setShowSpinner(true);
            const apiData = await fetch(`${Api}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...input, address: [input.address] }),
            });
            setShowSpinner(false);
            const data = await apiData.json();
            // console.log(apiData);
            // console.log(data);
            if (data.success) {
                setInput({
                    userName: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: "",
                    answer: "",
                })
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
                setShowShowSignUp(false);
                setUserData(data.user);
                setError(false);
            } else {
                setError(data.message);
                setTimeout(()=>{
                    setError(false);
                },1500)
            }

        } catch (err) {
            console.log("error in sign up : ", err);
        }
    }
    // useEffect(()=>{
    //     console.log(input);
    // },[input])
    return (
        <>
            <div className={`${style.mainContainer} z-999`}>

                <div className={style.container}>
                    
                    <img src={img} alt="" />
                    <div className={style.formContainer}>
                        <p style={{ textAlign: "center" }}>Get start with Free Account</p>
                        <div className={style.form}>
                            {Object.keys(input).map(key => (
                                <div key={key} className={style.inputs}>
                                    <label htmlFor="">{`${key} : `}</label>
                                    <input
                                        type={key === "password" ? "password" : key === "email" ? "email" : "text"}
                                        onChange={e => setInput({ ...input, [key]: e.target.value })}
                                        placeholder={key}
                                        value={input[key]}
                                        required />
                                </div>
                            ))}
                        </div>
                        <div className={style.login}>
                            <span>Create a free account to get our best services.<br />already have an account ?<button onClick={() => { setShowLogin(true), setShowShowSignUp(false) }}>Login</button></span>

                        </div>

                        {success && <p style={{ color: "rgb(16, 139, 16)", fontWeight: "bold" }}>Registered successfully !</p>}

                        {error && <p style={{ color: "red", fontSize: "20px" }}>{`${error} !`}</p>}

                        <button onClick={submitHandle} className={style.signup}>Sign up</button>

                    </div>
                    <button onClick={() => setShowShowSignUp(false)} className={style.button}>X</button>
                </div>
                {
                    showSpinner &&
                 <div className="w-15 h-15 border-8 border-blue-500 border-t-transparent rounded-full motion-safe:animate-spin absolute"></div>

                }
            </div>
        </>
    )
}

export default Register