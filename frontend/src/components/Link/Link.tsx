import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props: Record<string, any>) => (
    <div className="nav-link">
        <i className={props.iconName} />
        <Link to={props.to} >
            {
                props.children
            }
        </Link>
    </div>
)

export default NavLink