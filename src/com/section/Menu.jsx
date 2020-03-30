import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { AppContext } from '../../shared/App';

const Menu = () => {
  const {isMenu, setIsMenu} = useContext(AppContext);

  const handleNavClick = () => {
    setIsMenu(false);
  }

  return (
    <div className = {`Menu ${isMenu ? 'active' : 'default'}`}>
      <div className="con">
        <ul className="gnb-mobile">
          <li><NavLink exact to ="/" activeClassName="active" onClick={handleNavClick}>about</NavLink></li>
          <li><NavLink to ="/study" activeClassName="active" onClick={handleNavClick}>study</NavLink></li>
          <li><NavLink to ="/member" activeClassName="active" onClick={handleNavClick}>members</NavLink></li>
          <li><NavLink to ="/contact" activeClassName="active" onClick={handleNavClick} >contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;