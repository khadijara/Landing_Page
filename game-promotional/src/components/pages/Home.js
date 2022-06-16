import React from 'react';

import Navbar from "../Header/Header";
// import Video from '../Main/Video';
// import Pricing from '../Pricing/pricinghome';
// import Game from '../Games/Game';
 import Footer from '../Footer/Footer';
 import Background from '../Background/Background';
 import About from '../About-main/AboutMain';
 import Contact from '../Contact/ContactHelp';

export function Home() {
    return (
<>

    <Navbar />
    <Background />
    <About />
    <Contact />
    {/* <Video />
    <Game />
    <Pricing />*/
    <Footer /> }
</>

    );

}
export default Home;