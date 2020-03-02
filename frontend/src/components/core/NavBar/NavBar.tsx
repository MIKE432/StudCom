import React from 'react';
import NavLink from '../Link/Link';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({

})

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink to="/">
        <i className="fas fa-home" />
          Strona główna
        </NavLink>
        <NavLink to="register">
          <i className="fas fa-registered" />
          Zarejestruj się
        </NavLink>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(NavBar);
