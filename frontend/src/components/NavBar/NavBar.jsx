// Наприклад, в компоненті Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import {Outlet} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Landing</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>

            <Outlet></Outlet>
        </nav>
    );
}

export default Navigation;
