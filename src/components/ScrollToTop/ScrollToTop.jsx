import { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <div className="app__scroll">
            <button onClick={scrollToTop} className="app__scroll--arrow">
                &#8679;
            </button>
            <p className="app__scroll--text">Top</p>
        </div>
    );
};

export default ScrollToTop;