// Наприклад, в компоненті Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import {Outlet} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/registration">Домашня</Link>
                    <Outlet></Outlet>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
