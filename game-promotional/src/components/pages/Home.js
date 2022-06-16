import React from 'react';

import Navbar from "../Header/Header";
 import Footer from '../Footer/Footer';
 import Background from '../Background/Background';
 import About from '../About-main/AboutMain';
 import Contact from '../Contact/ContactHelp';
import Gallery from '../Gallery/Galleryheader';

export function Home() {
    return (
<>

    <Navbar />
    <Background />
    <About />
    <Gallery />
    <Contact />
    <Footer /> 
</>

    );

}
export default Home;