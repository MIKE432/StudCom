import React from 'react';
import NavLink from '../Link/Link';

class NavBar extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/" iconName="fas fa-home">
          Strona główna
        </NavLink>
        <NavLink to="register" iconName="fas fa-registered">
          Zarejestruj się
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
