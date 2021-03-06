//imports for React and React Router and components for use below
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//this component holds the header for projects as well as links to each of my project pages, arranged by type.
function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <h4 className="summary">
        Please enjoy galleries featuring selections from various bodies of work
        below.
      </h4>

      <div id="projectlinks">
        <Link to="../components/CodingProjects">Coding Projects</Link>

        <Link to="../components/PotteryProjects">Pottery Projects</Link>

        <Link to="../components/DiceProjects">Dice Projects</Link>
      </div>
    </div>
  );
}

export default Projects;
