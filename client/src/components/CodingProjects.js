//this page holds images and links for users to explore my coding projects

//import React
import React from 'react';

//coding projects component creation
//each <a> tag is clickable and includes an icon and a title
//when clicked, each takes you to a different project website
function CodingProjects() {
    return (
        <div id="codingprojects">
            <h1>Coding Projects</h1>
            <hr />
            < br />

            <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-emily-olivia">
                <img src="/images/codingprojectsicons/tic-tac-toe.svg" title="" alt="" />
                <p>Tic-Tac-Toe Browser Game</p>
            </a>

            <a href="https://github.com/BurlingtonCodeAcademy/zorkington-olivia-michael">
                <img src="/images/codingprojectsicons/zork.svg" title="" alt="" />
                <p>Zorkington, a Text Adventure Game</p>
            </a>

            <a href="https://github.com/BurlingtonCodeAcademy/guess-the-number-otwig">
                <img src="/images/codingprojectsicons/guess.svg" title="" alt="" />
                <p>Guess the Number Game</p>
            </a>

            <a href="https://github.com/BurlingtonCodeAcademy/remock-otwig">
                <img src="/images/codingprojectsicons/dice.svg" title="" alt="" />
                <p>www.HarkensDice.com</p>
            </a>


        </div>
    )
}

export default CodingProjects;