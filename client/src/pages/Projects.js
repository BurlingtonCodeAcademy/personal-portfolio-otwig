import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Projects() {
    return (

        <div>
            <h1>Projects</h1>

            <div>
                <Link to="../components/CodingProjects">Coding Projects</Link>

                <Link to="../components/PotteryProjects">Pottery Projects</Link>

                <Link to="../components/DiceProjects">Dice Projects</Link>
            </div>

        </div>

    )
}


export default Projects;