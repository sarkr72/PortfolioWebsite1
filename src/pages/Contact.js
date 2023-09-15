import React from "react";
import background1 from '../images/background1.jpg';
// import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import '../pages/contactPage.css';
const Contact=()=>{
    return(
        <div id = "wholeContact">
        <div clas="logo">
        {/* <img src={logo} alt ='e'/> */}
    </div>
    <div class="container3">
        <div class="header2">
            <h1>Let's Connect</h1>
        </div>
        <div class="context">
            <img class="avatar" src={background1} width="122" height="122" alt ='s'/>
            <h1>Rinku Sarkar</h1>
            <p class="text">Thanks for visiting! You can contact me with the number, email and follow me on social media
                that are provided below.
            </p>
            <p class="contact">contact@example.com <br></br>(631)-xxx-98456</p>
            <div class="social-icons">
                <a href="https://www.facebook.com/login/" class="facebook">
                    <img src={facebook} width="20" alt = 'd'/>
                </a>
                <a href="https://www.instagram.com/" class="instagram">
                    <img src={instagram} width="20" alt = 'f' /></a>
            </div>
        </div>
    </div>
    </div>
    );
}

export {Contact};