import { useRef } from 'react';
import { Contact } from '../pages/Contact';
import { Experience } from '../pages/Experience';
// import { HomePage } from '../pages/Homepage';
import { Projects } from '../pages/Projects';
import { Aboutpage } from '../pages/Aboutpage';

const Homepagenavs2 = () => {

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
        ref4.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>

            {/* <div style={{height: '155rem'}} /> */}

            <button onClick={handleClick}>About</button>
            <button onClick={handleClick2}>Experience</button>
            <button onClick={handleClick3}>Projects</button>
            <button onClick={handleClick4}>Contact</button>

            <div ref={ref}><Aboutpage /></div>
            <div ref={ref2}><Experience /></div>
            <div ref={ref3}><Projects /></div>
            <div ref={ref4}><Contact /></div>
            {/* <div style={{height: '155rem'}} /> */}
        </div>
    );
}
export { Homepagenavs2 };