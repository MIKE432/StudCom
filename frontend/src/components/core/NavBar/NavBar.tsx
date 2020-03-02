import React from 'react';
import NavLink from '../Link/Link';
import { connect } from 'react-redux';
import { select } from '../../../state/actions/generalAction';
import SideBar from '../SideBar/Sidebar';


const UnloggedUserNavbar = () => (
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

const LoggedUserNavbar = () => (
  <div className="nav-bar">
    <NavLink to="/">
    <i className="fas fa-home" />
      Strona główna
    </NavLink>
  </div>
);


const mapStateToProps = (state: any) => ({
  user: select(state, 'user')
})

class NavBar extends React.Component<Record<string, any>, Record<string, any>> {
  render() {
    return this.props.user === null ? <UnloggedUserNavbar /> : null
  }
}

export default connect(mapStateToProps, null)(NavBar);
