import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from './9a32f425-52e6-4f53-84fd-16c3732dbcf4_200x200.png';
import smallLogo from './b31eb0cd-6ed1-4061-9681-9ad341b19923_200x200.png'

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
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
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
            <NavLink id='nav-bar-logo' className='logo' exact to="/">
              <img className='desktop'
                  key='desktop'
                  src={logo} alt='logo desktop' />
              <img className='mobile'
                  key='mobile'
                  src={smallLogo} alt='logo mobile' />
            </NavLink>
          </li>
            Search
          <li>
            {isLoaded && sessionLinks}
          </li>
        </ul>
    </>
  ); 
}

export default Navigation;