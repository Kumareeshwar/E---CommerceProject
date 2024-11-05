import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginWithEmail = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const registerWithEmail = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("User created:", authUser);
        navigate('/'); 
      })
      .catch((err) => console.error("Error creating account:", err));
  };

  return (
    <div className='login'>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className='login__logo' alt="logo" />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type='submit' className='login__signInButton' onClick={loginWithEmail}>
            Sign In
          </button>
        </form>
        <p>By signing in you agree to Amazon's Conditions of use & sales.</p>
        <button className='login__registerButton' onClick={registerWithEmail}>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login;

