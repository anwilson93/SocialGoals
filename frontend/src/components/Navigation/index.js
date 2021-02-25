import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from './9a32f425-52e6-4f53-84fd-16c3732dbcf4_200x200.png';
import logo2 from './7cb4e30c-5529-4b3b-82bb-aab4818e5692_200x200.png';
import smallLogo from './b31eb0cd-6ed1-4061-9681-9ad341b19923_200x200.png'
import SearchBar from '../SearchBar';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/'><button className='login-form-buttons'>Login</button></NavLink>
      </>
    );
  }

  // return (
  //   <ul>
  //     <li>
  //       <NavLink exact to="/">Home</NavLink>
  //       {isLoaded && sessionLinks}
  //     </li>
  //   </ul>
  // );

  return (
    <>
      <div id='border-heading'></div>
        <ul id='top-nav-bar'>
          <li>
            <NavLink className='logo' exact to="/">
              <img className='desktop' id='nav-bar-logo'
                  key='desktop'
                  src={logo2} alt='logo desktop' />
              <img className='mobile'
                  key='mobile'
                  src={smallLogo} alt='logo mobile' />
            </NavLink>
          </li>
            < SearchBar />
          <li>
            {isLoaded && sessionLinks}
          </li>
        </ul>
    </>
  ); 
}

export default Navigation;