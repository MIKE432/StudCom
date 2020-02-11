import React from 'react'
import NavLink from '../Link/Link'

class NavBar extends React.Component {
    constructor(props: Record<string, any>) {
        super(props)
    }

    render() {
        return (
            <div className="nav-bar">
                <NavLink to="register" iconName="fas fa-registered">
                    Zarejestruj się
                </NavLink>
            </div>
        )
    }
}

export default NavBar;