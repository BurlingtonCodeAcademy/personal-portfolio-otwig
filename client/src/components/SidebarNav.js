//this page holds the sidebar menu and links that pop out when the burger button is clicked

//import React
import React from 'react';
import { Link } from "react-router-dom";

//sidebar component creation
//when clicked, each Link below generates it's associated component. this creates the look of going to a new page.
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