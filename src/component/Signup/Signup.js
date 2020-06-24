import React, { useState, useContext } from 'react';
import InputItem from '../Login/InputItem';
import './Signup.css'
import { Link, Redirect } from 'react-router-dom';
import { Context } from '../Login/useAuth';
import axios from 'axios'
import Loading from '../utils/Loading';
import { useEffect } from 'react';
import { createContext } from 'react';

const Signup = (props) => {

  const auth = useContext(Context)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // input field handler
  const onchangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value)
    }
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
    if (name === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }

  const SignUpWithUserPass = async (email, passsword) => {
    try {
      const response = await auth.Context(useContext)//wrong.... 
      console.log(response);
      
      return response;
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <section className="sign-up" id="sign-up-aria-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-3 m-auto">
            <div className="sign-up-aria-logo py-5 m-auto">
              <img className="w-50 d-block m-auto" src="https://i.ibb.co/Snjf3fp/logo2.png" alt="" />
            </div>
            <form onSubmit={SignUpWithUserPass}>
            <InputItem name="name" type="text" required placeholder="Name" onchangeHandler={onchangeHandler} value={name} />
            <InputItem name="email" type="email" required placeholder="Email" onchangeHandler={onchangeHandler} value={email} />
            <InputItem name="password" type="password" required placeholder="Password" onchangeHandler={onchangeHandler} value={password} />
            <InputItem name="confirmPassword" type="password" required placeholder="Confirm Password" onchangeHandler={onchangeHandler} value={confirmPassword} />
            <button type="submit" className="btn sign-up-btn w-100">Submit</button>
          </form>
          <p className="text-center py-2 has-account"><Link to="/login">Already have an account</Link></p>
        </div>
      </div>
    </div>
  </section >
  ); 
};

export default Signup;