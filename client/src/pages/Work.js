//import React
import React from 'react';

//this component holds an unordered list of my work experiences
function Work() {
    return (
        <div>
            <div id="workheader">
                <h1>Experience is the best teacher.</h1>
                <p className="summary">
                    We are shaped by more than our employment history. Below is a list of experiences that lead me to my current path.
            </p>
            </div>

            <hr />

            <div id="worklist">
                <ul>
                    <h2 className="title">Student</h2>
                    <h3 className="subtitle">Software and Web Development</h3>

                    <h2 className="title">Studio Manager</h2>
                    <h3 className="subtitle">University of Vermont Pottery Co-Op</h3>

                    <h2 className="title">Owner</h2>
                    <h3 className="subtitle">O'twig Co.</h3>

                    <h2 className="title">Production Assistant</h2>
                    <h3 className="subtitle">Jeremy Ayers Pottery</h3>

                    <h2 className="title">Baker</h2>
                    <h3 className="subtitle">Great Harvest Bread Company</h3>

                    <h2 className="title">Independent Contractor</h2>
                    <h3 className="subtitle">Self-Employed</h3>

                    <h2 className="title">Glaze Technician</h2>
                    <h3 className="subtitle">Penn South Co-Op</h3>

                    <h2 className="title">Caster / Trimmer</h2>
                    <h3 className="subtitle">Christopher Spitzmiller, Inc.</h3>

                    <h2 className="title">Studio Assistant</h2>
                    <h3 className="subtitle">Various potters in NYC </h3>

                    <h2 className="title">After-School Counselor and Ceramic Technician</h2>
                    <h3 className="subtitle">Manhattan Youth</h3>

                    <h2 className="title">Farmer</h2>
                    <h3 className="subtitle">WWOOF, Italy</h3>

                    <h2 className="title">Director</h2>
                    <h3 className="subtitle">The Robert C. Turner Gallery</h3>

                    <h2 className="title">Printshop Assistant</h2>
                    <h3 className="subtitle">Alfred University</h3>

                    <h2 className="title">Arts/Industry Intern</h2>
                    <h3 className="subtitle">John Michael Kohler Arts Center</h3>

                </ul>
            </div>
        </div>
    )
}

export default Work;