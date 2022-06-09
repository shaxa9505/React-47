import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (

        <nav>
            <div className="nav-wrapper header_nav">
                <Link to="/" className="brand-logo">React</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact</Link>
                    </li>
                    <li>
                        <Link to="/movie">Movie</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Header;