// import ScrollIntoView from 'react-scroll-into-view'
import React from "react";
import logo from '../images/logo.png'
import '../pages/homePage.css';
import { Aboutpage } from "../pages/Aboutpage";
import { Experience } from "../pages/Experience";
import { HomePage } from "../pages/Homepage";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";

// import  EssayForm  from "../pages/FeedbackPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    // Redirect,
} from "react-router-dom";

const Homepagenavs = () => {
    return (

        <div>
        <nav>
            <img src={logo} className="logo" alt="logo" />
            <ul>
                <Router>
                    {/* <li class="item"><a href="homePage.html">Home</a></li>
                <li class="item"><a href="aboutPage.html">About</a></li>
                <li class="item"><a href="Experience.html">Experience</a></li>
                <li class="item"><a href="projects.html">Projects</a></li>
                <li class="item"><a href="contactPage.html">Contact</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Aboutpage">About</Link></li>
                    <li> <Link to="/Experience">Experience</Link></li>
                    <li> <Link to="/Projects">Projects</Link></li>
                    <li> <Link to="/Contact">Contact</Link></li>

                    <Routes>
                        <Route path="/" element={HomePage} exact> </Route>
                        <Route path='/Aboutpage' element={<Aboutpage />}></Route>
                        <Route path="/Experience" element={<Experience />}></Route>
                        <Route path='/Projects' element={<Projects />}></Route>
                        <Route path='/Contact' element={<Contact />}></Route>
                    </Routes>
                </Router>
            </ul>
        </nav>

        </div>
    );
}
export { Homepagenavs };