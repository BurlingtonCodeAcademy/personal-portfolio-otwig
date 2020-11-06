//this page holds images and links for users to explore my dice projects

//import React
import React from 'react';

//dice projects component creation
//first, a header and a link to my dice instagram site
//then, photos of my favorite dice
function DiceProjects() {
    return (
        <div id="dicegallery">
            <h1>Alchemical Math Rocks</h1>
            <hr />
            <h4>See more at <a href="http://www.instagram.com/harkensdice">Harkens Dice</a></h4>
            <div>
                <img src="/images/dicegallery/dice1.png" alt="" title=""></img>
                <img src="/images/dicegallery/dice2.png" alt="" title=""></img>
                <img src="/images/dicegallery/dice3.png" alt="" title=""></img>
                <img src="/images/dicegallery/dice4.png" alt="" title=""></img>
                <img src="/images/dicegallery/dice7.png" alt="" title=""></img>
                <img src="/images/dicegallery/dice8.png" alt="" title=""></img>
                <img src="/images/dicegallery/dice9.png" alt="" title=""></img>
            </div>
        </div>
    )
}


export default DiceProjects;