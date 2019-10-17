import React from 'react';
import { ContainerNavBar } from './estilo';
import { FaReact, FaArrowRight } from 'react-icons/fa'

function NavBar() {
  return (
    <ContainerNavBar>
      <div className="logo">
        <FaReact size={70} color="#2a9eea" />
      </div>
      <div className="menu">
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="Home">About</a></li>
          <li><a href="Home">Services</a></li>
          <li><a href="Home">Case Study</a></li>
          <li><a href="Home">Elements</a></li>
          <li><a href="Home">Pages</a></li>
        </ul>
        <button>CONSULTANCY <FaArrowRight /></button>
      </div>
    </ContainerNavBar>
  );
}

export default NavBar;
