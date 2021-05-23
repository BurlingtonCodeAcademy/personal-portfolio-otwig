//this page holds images and links for users to explore my pottery projects

//import React
import React from 'react';

//pottery projects component creation
//first, a header and a link to my pottery instagram site
//then, photos of my favorite items
function PotteryProjects() {
    return (
        <div id="claygallery">
            <h1>Alchemical Experiments in Glaze and Form</h1>
            <hr />
            <h4>See more at my Etsy shop: <a href="http://www.etsy.com/shop/otwigco">O'twig Co.</a></h4>
            <div>
                <img src="/images/claygallery/clay1.jpg" alt="" title=""></img>
                <img src="/images/claygallery/clay2.jpg" alt="" title=""></img>
                <img src="/images/claygallery/clay3.jpg" alt="" title=""></img>
                <img src="/images/claygallery/clay4.jpg" alt="" title=""></img>
                <img src="/images/claygallery/clay5.jpg" alt="" title=""></img>
            </div>
        </div>
    )
}


export default PotteryProjects;