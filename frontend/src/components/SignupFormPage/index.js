import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
     <h1 className='h1'>Sign Up</h1>
      <div className='form-container'>
        <form id='login-form' onSubmit={handleSubmit}>
          <ul className='login-inputs'>
            {errors.map((error, idx) => (
               <li id='errors' key={idx}>{error}</li>
            ))}
          </ul>
          <div className='form-fields-container'>
            <input 
              type='text'
              className='form-field'
              placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input 
              type='text'
              className='form-field'
              placeholder='Username' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
            <input 
              type='password'
              className='form-field'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />  

            <input 
              type='password'
              className='form-field'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            /> 
          </div>

          <div className='buttons-footer'>
            <button type="submit" className='login-form-buttons'>Sign Up</button>
            {/* <button onClick={demoLogin} className='login-form-buttons'>Demo Login</button> */}
            <Link to='/'><button className='login-form-buttons'>Log In</button></Link>
          </div>

        </form>
      </div>
    </>
  )
}

export default SignupFormPage;
