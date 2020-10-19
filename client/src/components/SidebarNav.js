import React from 'react';

import { Link } from "react-router-dom";


function SidebarNav() {
    return (
        <div id="sidebarNav">
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Hobbies">Curiosities</Link>
            <Link to="/Work">Experiences</Link>
            <Link to="/Contact">Contact Me</Link>
        </div>

    )
}

export default SidebarNav;