/** @format */

import { useState, useRef } from "react";
import classes from "./AuthForm.module.css";

export default function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const api = "AIzaSyC20c5tIyNJc1pSe5lZwM4A6sEq6BfwGbQ";
  let url;
  function switchAuthModeHandler() {
    setIsLogin(prevState => !prevState);
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
    }
    
    setIsLoading(true);
    if ( isLogin )
    {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`
    } else
    {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`
    }
        fetch(url, opts).then(res => {
        setIsLoading(false);
        if (res.ok) {
          return res.json(res);
        } else {
          return res.json().then(data => {
            let errorMessage = "Auth Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage)
          });
        }
        } ).then( data => console.log(data) ).catch( err =>
        {
          alert( err.message );
      })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && (<button>{isLogin ? "Login" : "Create Account"}</button>)}
          {isLoading && <button>Loading...</button>}
          <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
