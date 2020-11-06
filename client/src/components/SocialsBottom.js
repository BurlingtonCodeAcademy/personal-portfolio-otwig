//this page holds the bottom menu of social media images and links

//import React
import React from 'react';

//this component is responsible for generating the social media icons and links used in this menu
function SocialsBottom() {
    return (
        <div id="socialsbottom">
            <a href="https://ko-fi.com/otwig">
                <img src="/images/socialicons/kofi.svg" title="kofi" alt="" id="kofi" />
            </a>

            <a href="https://www.linkedin.com/in/oliviahartwig/">
                <img src="/images/socialicons/linkedin.svg" title="LinkedIn" alt="" />
            </a>

            <a href="https://github.com/otwig">
                <img src="/images/socialicons/github.svg" title="GitHub" alt="" />
            </a>

            <a href="https://www.instagram.com/otwig/">
                <img src="/images/socialicons/instagram.svg" title="Instagram" alt="" id="insta" />
            </a>

        </div>
    )
}

export default SocialsBottom;