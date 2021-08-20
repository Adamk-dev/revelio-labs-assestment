import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="nav-link flex-column  justify-content-end border-top-style border-top container">
      
      <h1 className="heading align-self-center">Hacker News

      </h1>
        <NavLink to="/new" activeClassName="" className="text-center align-self-center">
        latest | Starred
        </NavLink>
     
       
      </div>
    </>
  );
};

export default Footer;