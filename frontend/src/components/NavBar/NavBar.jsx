import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.brand}>ProjectHub</div>
                <div className={styles.navbarLinks}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/registration" className={styles.link}>About Us</Link>
                    <Link to="/projects" className={styles.link}>Projects</Link>
                    <Link to="/login" className={styles.link}>Login</Link>
                </div>

                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        <svg className="icon_registr" height="25" viewBox="0 0 15 15" width="25"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="..."></path>
                        </svg>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                        <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </nav>

            <div>
                <Outlet/>
            </div>
                {/* This is where the child routes will be rendered */}

        </>
    );
}

export default NavBar;
