import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo_b from 'image/logo/D_logo_b.svg';

const Header = () => {
  return (
    <header className="type-default">
      <div className="con div">
        <Link to = "/" className="header-logo">
          <img src={logo_b} alt=""/>
        </Link>

        <nav className="nav-pc">
          <NavLink activeClassName="active" className="gnb" to="/about">about</NavLink>
          <NavLink activeClassName="active" className="gnb" to="/study">study</NavLink>
          <NavLink activeClassName="active" className="gnb" to="/member">member</NavLink>
          <NavLink activeClassName="active" className="gnb" to="/contact">contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;