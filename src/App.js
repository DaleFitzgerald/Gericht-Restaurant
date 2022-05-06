import React, {useEffect, useState} from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import { ScrollToTop } from './components';
import './App.css';

const App = () => {

   // The back-to-top button is hidden at the beginning
   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.pageYOffset > 300) {
         setShowButton(true);
       } else {
         setShowButton(false);
       }
     });
   }, []);

   return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    {showButton && (<ScrollToTop/>)}
  </div>
   )
  
}

export default App;
