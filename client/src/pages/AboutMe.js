//import React
import React from 'react';

//this component holds the container for the header and About Me information
function AboutMe() {
    return (
        <div id="aboutme">
            <h1>About Olivia</h1>

            <p className="summary">
                This site is a testament to the many projects and materials that encompass my identity as a maker. I hope you enjoy and please, feel free to contact me with any questions or requests.
            </p>
            <hr />

            <p>
                Hello and welcome to my personal portfolio. I'm excited to share my story with you!
            </p>

            <p>
                I grew up in Western New York, which instilled me with a strong sense of community and rooting for the underdog. After graduating from the New York State College of Ceramics at Alfred University I lived in New York City for several years, working for various ceramic studios. In 2016 my journey brought me to Burlington, Vermont, where I have been selling pottery every since. I most recently left my role of Clay Studio Manager at the University of Vermont's Pottery Co-Op to begin a new chapter at the Burlington Code Academy.
            </p>

            <p>
                I made the switch to coding in an effort to change my fortunes for the better. Ceramics is a physically demanding field but one that honed my skills in leadership, community-building, and problem-solving; all that transfer seamlessly to coding and software development.
            </p>

            <p>
                When I'm not learning JavaScript, React, HTML, and CSS I make RPG dice and functional pottery. I also enjoy reading and spending time in my communities.
            </p>
            <hr />


        </div >
    )
}

export default AboutMe;