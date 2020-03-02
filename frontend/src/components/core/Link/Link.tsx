import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props: Record<string, any>) => (
    <Link className="nav-link" to={props.to}>

      {
        props.children
      }
    </Link>
);

export default NavLink;
