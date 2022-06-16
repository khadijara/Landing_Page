import React from 'react';


import './AboutMain.css'
import image from '../../assets/about2.jpg';

export function AboutMain(){
    return(
        <>

        <div className='vision'>
        <img className="about" src={image} alt="Logo"></img>
        <h1 >Our Vision</h1>
        <blockquote>
            "We envision millions of smart robots working under human supervision on and offworld, 
            turning the inner solar system into a better, gentler, greener place for life and civilization."
        </blockquote>
        <p className='pvision'>
            We are a team of highly motivated and dedicated engineers, designers, and researchers.
            We can't simply export the 20th century heavy industrial paradigm offworld. So in pursuit of our offworld aspirations, 
            we are reinventing how we mine, process, manufacture and build cities on Earth.
        </p>
        </div>
        </>
    );
}


export default AboutMain;