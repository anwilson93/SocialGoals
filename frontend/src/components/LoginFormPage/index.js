import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/feed" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }), <Redirect to='/feed' />)
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const demoLogin = () => {
    setCredential('demo@user.io');
    setPassword('password');

    return dispatch(sessionActions.login({ credential, password }), <Redirect to='/feed' />)
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });

  }

  return (
    <>
      <h1 className='h1'>Log In</h1>
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
              placeholder='Email or Username' 
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
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
          </div>

          <div className='buttons-footer'>
            <button type="submit" className='login-form-buttons'>Log In</button>
            <button onClick={demoLogin} className='login-form-buttons'>Demo Login</button>
            <Link to='/signup'><button className='login-form-buttons'>Sign Up</button></Link>
          </div>

        </form>
      </div>
    </>
  )
}

export default LoginFormPage;
