import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage() {
    const [darkMode, setDarkMode] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
    

    useEffect(() => {
        const updateCursorPos = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPos);

        return () => {
            window.removeEventListener('mousemove', updateCursorPos);
        };
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleAbout = () => setAboutActive(!aboutActive);

    return (
        <div className={`${darkMode ? 'dark-mode' : 'light-mode'} ${aboutActive ? 'about-active' : ''}`}>
            <div className="title" onClick={toggleDarkMode}>
                <h1>CAMERON CUMMINGS</h1>
            </div>
            <div className="about" onClick={toggleAbout}>
               <h2>ABOUT</h2>
            </div>
            <div className="contact">
                <a href="mailto:info@cameroncummings.ca" style={{ color: 'inherit', textDecoration: 'none' }}>
                <h2>CONTACT</h2>
                </a>
            </div>
            {aboutActive && (
                <div className="about-info">
                    <p>Cameron Cummings is a designer, writer and educator based in Montreal. His work documents pop artifacts as architectures of gay life, including contemporary and historical built forms, media interfaces, and mythologized narrative environments. Since 2022 he’s established an interdisciplinary design- research office spanning set design, digital publishing and writing, working between Montreal, New York, and Los Angeles. In 2021, he presented Interviews at the 17th Venice Biennale of Architecture, a documentary archiving architectural fictions commissioned for the exhibition Impostor Cities, curated by David Theodore; this work was exhibited at Toronto’s Museum of Contemporary Art in 2023, curated by November Paynter. With Samiha Meem, he collaboratively runs PopCodex.TV, a research practice focused on mediatic spatiality constructed around pop bodies and music videos. He is currently Adjunct Faculty at McGill University School of Architecture, where he teaches studio courses that examine archive structures. He chairs the queer digital platform @clubquarantine, and writes for Canadian Architect and Border Crossings Magazine.</p>
                    <div id="blur-effect"></div> {}
                </div>
            )}
             {/* Soft blue circle that follows the cursor */}
             <div className={`${darkMode ? 'dark-cursor-circle' : 'cursor-circle'}`} style={{ left: cursorPos.x, top: cursorPos.y }}></div>
        </div>
    );
}

export default HomePage;
