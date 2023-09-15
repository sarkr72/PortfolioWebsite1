import React from "react";
import { useRef } from 'react';
import { Footer } from "../components/Footer";
import { Headerhomepage } from "../components/Headerhomepage";
// import { Homepagenavs } from "../components/Homepagenavs";
import { Aboutpage } from "../pages/Aboutpage";
import { Experience } from "../pages/Experience";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import EssayForm from "./FeedbackPage";
import logo from '../images/logo.png';
import './homePage.css';
const HomePage = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const ref2 = useRef(null);
    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref3 = useRef(null);
    const handleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref4 = useRef(null);
    const handleClick4 = () => {
        ref4.current?.scrollIntoView({ behavior: 'auto', block:'end' });
    };
    const ref5 = useRef(null);
    const handleClick5 = () => {
        ref5.current?.scrollIntoView({ behavior: 'auto', block:'end' });
    };
    return (
        <body>
            <div className="containers">
                <div class = "homeBlock">
            <div className="container">
            <img src={logo} class="logo" alt='logo'/>
            <div className="btns">
            <button className="btn" onClick={handleClick}><b>About</b></button>
            <button className="btn" onClick={handleClick2}><b>Experience</b></button>
            <button className="btn" onClick={handleClick3}><b>Projects</b></button>
            <button className="btn" onClick={handleClick4}><b>Contact</b></button>
            <button className="btn" onClick={handleClick5}><b>Feedback</b></button>
            </div>
            <Headerhomepage />
            </div>
            </div>
            <br></br><br></br>
            <div ref={ref}><Aboutpage /></div>
            <br></br><br></br>
            <div ref={ref2}><Experience /></div>
            <div ref={ref3}><Projects /></div>
            <br></br><br></br>
            <div ref={ref4}><Contact /></div>
            <br></br><br></br>
            <div ref={ref5}><EssayForm /></div>
            <Footer />
            </div>
        </body>
    );
}

export { HomePage };
