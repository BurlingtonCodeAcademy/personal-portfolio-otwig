//imports for React and React Router and components for use below
import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

//this component holds the main title, image and gallery for my website. each image is clickable and takes a view to the associated page of the site. 
function Home() {
    return (
        <div id="home">
            <div id="intro">
                <h1>Hi, I'm Olivia</h1>
                <img id="portrait" src="/images/OliviaH.png" alt="An illustration of Olivia Hartwig" title="Portait by Liv Numa" />

                <h4>Full Stack Web Developer with a passion for social justice and craftsmanship</h4>
            </div>
            {/* ******************************* */}
            <div id="wipImgContainer">
                <div id="WIP">
                    <br />
                    <h2><img src="/images/socialicons/road-barrier.png" alt=""></img>#WIP<img src="/images/socialicons/road-barrier.png" alt=""></img></h2>
                    <p>My site is currently under construction!
                    <br />
                    I hope you come back soon to see what awesome changes are in store. Meanwhile, check out my current projects below!</p>
                </div>

                <div id="homegallery">
                    <a href="http://www.harkensdice.com/" alt=""><img src="/images/diceGallery/harkensdice.png" alt="" title="" /></a>
                    <a href="http://www.phantomtheater.org/" alt=""><img src="/images/phantomlogo.jpg" alt="" title="" /></a>

                    {/* <Link to="../components/PotteryProjects"><img src="/images/claygallery/home1.png" alt="" title="" /></Link>
                <Link to="../components/PotteryProjects"><img src="/images/claygallery/home2.png" alt="" title="" /></Link>
                <Link to="../components/DiceProjects"><img src="/images/dicegallery/dice1.png" alt="" title="" /></Link>
                <Link to="../components/DiceProjects"><img src="/images/dicegallery/dice2.png" alt="" title="" /></Link>
                <Link to="../components/CodingProjects"><img src="/images/codingprojectsicons/harkenssite.png" alt="" title="" /></Link>
                <Link to="../components/DiceProjects"><img src="/images/codingprojectsicons/tictactoe.png" alt="" title="" /></Link> */}
                </div>
                <div id="contactButtons">
                    <a className="button" href="https://github.com/otwig">Github</a>
                    <a className="button" href="https://www.linkedin.com/in/oliviahartwig/">LinkedIn</a>
                    <a className="button" href="/images/Olivia Hartwig - Resume.pdf">Resume</a>
                </div>
            </div>
        </div>
    )
}
export default Home;