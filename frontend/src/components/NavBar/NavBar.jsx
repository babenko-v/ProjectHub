import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from "./SideBar/SideBar.jsx";// Import the Sidebar
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                {/*<button*/}
                {/*    type="button"*/}
                {/*    className="btn btn-secondary modal_btn"*/}
                {/*    data-bs-toggle="offcanvas"*/}
                {/*    data-bs-target="#navigationSidebar"*/}
                {/*    aria-controls="navigationSidebar"*/}
                {/*>*/}
                {/*    <span className="icon">*/}
                {/*        <svg viewBox="0 0 175 80" width="40" height="40">*/}
                {/*            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>*/}
                {/*            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>*/}
                {/*            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>*/}
                {/*        </svg>*/}
                {/*    </span>*/}
                {/*    <span className="text">MENU</span>*/}
                {/*</button>*/}

                <button
                    className={styles.side_bar_btn}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navigationSidebar"
                    aria-controls="navigationSidebar"
                >
                    <div className="hamburger">
                        <svg fill="none" viewBox="0 0 50 50" height="30" width="30">
                            <path

                                stroke-width="4"
                                stroke="black"
                                d="M6 11L44 11"
                            ></path>
                            <path
                                stroke-width="4"
                                stroke="black"
                                d="M6 24H43"
                            ></path>
                            <path
                                stroke-width="4"
                                stroke="black"
                                d="M6 37H43"
                            ></path>
                        </svg>
                    </div>
                </button>

                <div>
                    <Link className={styles.brand} to="/">ProjectHub</Link>
                </div>
                <div className={styles.navbarLinks}>
                    <Link to="/about-us" className={styles.link}>About Us</Link>
                    <Link to="/top-command" className={styles.link}>Top Command</Link>
                    <Link to="/project" className={styles.link}>Project</Link>
                </div>

                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        <svg className={styles.icon_registr} height="25" viewBox="0 0 15 15" width="25"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.915 13.481c-1.097-1.887-2.788-3.241-4.762-3.883a5.17 5.17 0 0 0 2.16-2.508
                                5.14 5.14 0 0 0 .188-3.297 5.162 5.162 0 0 0-1.857-2.737 5.204 5.204 0 0 0-6.288 0 5.161
                                5.161 0 0 0-1.857 2.737 5.14 5.14 0 0 0 .189 3.297 5.17 5.17 0 0 0 2.159 2.508c-1.974.641-3.665
                                1.995-4.762 3.883a.572.572 0 0 0 .42.87.579.579 0 0 0 .578-.296C2.44 11.72 4.839 10.327 7.5 10.327c2.66
                                0 5.06 1.393 6.417 3.728a.576.576 0 1 0 .998-.574ZM3.465 5.164c0-.794.237-1.57.68-2.23a4.03 4.03 0 0 1
                                1.811-1.48 4.053 4.053 0 0 1 4.397.871 3.997 3.997 0 0 1 .875 4.376A4.02 4.02 0 0 1 9.74 8.503a4.049 4.049
                                0 0 1-5.093-.5 4.01 4.01 0 0 1-1.183-2.839Z">
                            </path>
                        </svg>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
                        <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </nav>

            <Sidebar/> {/* Render the Sidebar here */}

            <div>
                <Outlet/>
            </div>
        </>
    );
}

export default NavBar;
