import './about.css';
import logo from '../images/logo.png';
import background1 from '../images/background1.jpg';

const Aboutpage=()=>{
    return(
        <div id = "aboutPage">
        <div id="header">
    </div>
    <div id="aboutBlock">
        <div class="yellowBox">
            <img src={logo} class="logo" alt='logo'/>
            <img src={background1} class="image" alt='icon'/>
        </div>
        <div class="aboutPagecontainer">
            <h1 class="sub-title">About Me</h1>
            <p class="para"> My name is Rinku Sarkar. I graduated from suffolk Community College. I have been working
                as a freelance web developer for the last three years and cooperated with several startups. I cannot say
                with 100% confidence
                where I see myself in five years or what my big career goal is. The world is changing rapidly, and I
                don’t have enough professional
                experience to be certain about such things. However, I know that I can provide a fresh take and an
                extraordinary approach to every project. </p>
        </div>
        </div>
        </div>
    );
}

export{Aboutpage};