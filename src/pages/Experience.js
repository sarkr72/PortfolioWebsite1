import '../pages/experiencePage.css';

const Experience = () => {
    return (
        <div>
            <div id="outerBox">
                <h1>Experience</h1>
                <div class="innerBox">
                    <div class="numberText">1 / 3</div>
                    <div class="header">
                        <p class="employer1">Dunkin Donuts'</p>
                    </div>
                    <div class="detailsBox">
                        <ul>
                            <li>Gained knowledge from working with team members.</li>
                            <li>Made a good relation with co-workers and managers.</li>
                            <li>Maintained excellent customer service.</li>
                        </ul>
                    </div>
                </div>

                <div class="innerBox">
                    <div class="numberText">2 / 3</div>
                    <div class="header">
                        <p class="employer2">Cumberland Farms</p>
                    </div>
                    <div class="detailsBox">
                        <ul>
                            <li>Imparted my knowledge on crew members via leading by example.</li>
                            <li>Advised managers or supervisors of problems in regards to quality or performance of crew members.</li>
                            <li>High standards of customer service consisting of listening, patience, and attention to customer requests and concerns and prompt responses.</li>
                            <li>Maintained strong friendships with coworkers.</li>
                        </ul>
                    </div>
                </div>

                <div class="innerBox">
                    <div class="numberText">3 / 3</div>
                    <div class="header">
                        <p class="employer4">Spirit pharma</p>
                    </div>
                    <div class="detailsBox">
                        <ul>
                            <li>Acquired knowledge about data entry of production.</li>
                            <li>High levels of concentration while entering the data.</li>
                            <li>Worked with Microsoft Office.</li>
                            <li>Technical skills such as typing and short keys to enter data for production and from other paper works</li>
                        </ul>
                    </div>
                </div>
               
            </div>
            <br></br>
            <div class="dots">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
           
        </div>
    );

}

export { Experience };