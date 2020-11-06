//imports for React and React Router and components for use below
import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

//this component holds the main title, image and gallery for my website. each image is clickable and takes a view to the associated page of the site. 
function Home() {
    return (
        <div id="home">
            <div id="intro">
                <img id="portrait" src="/images/OliviaH.png" alt="An illustration of Olivia Hartwig" title="Portait by Liv Numa" />
                <h1>Olivia Hartwig</h1>
                <h4>Software Developer - Maker</h4>
            </div>

            <div id="homegallery">
                <Link to="../components/PotteryProjects"><img src="/images/claygallery/home1.png" alt="" title="" /></Link>
                <Link to="../components/PotteryProjects"><img src="/images/claygallery/home2.png" alt="" title="" /></Link>
                <Link to="../components/DiceProjects"><img src="/images/dicegallery/dice1.png" alt="" title="" /></Link>
                <Link to="../components/DiceProjects"><img src="/images/dicegallery/dice2.png" alt="" title="" /></Link>
                <Link to="../components/CodingProjects"><img src="/images/codingprojectsicons/harkenssite.png" alt="" title="" /></Link>
                <Link to="../components/DiceProjects"><img src="/images/codingprojectsicons/tictactoe.png" alt="" title="" /></Link>
            </div>

        </div>
    )
}
export default Home;