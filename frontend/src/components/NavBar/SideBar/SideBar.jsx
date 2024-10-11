import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="navigationSidebar"
            aria-labelledby="sidebarLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarLabel">Navigation Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="list-group-item">
                        <a href="/projects">My project</a>
                    </li>
                    <li className="list-group-item">
                        <a href="/about">About Us</a>
                    </li>
                    <li className="list-group-item">
                        <a href="/complaint">Complaint a Teacher</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
