import {React, useState , useEffect} from 'react';
import bck1 from '../../assets/bck-1.png';
import bck2 from '../../assets/bck-2.png';
import bck3 from '../../assets/bck-3.png';
import bck4 from '../../assets/bck-4.png';
import logo from '../../assets/off-world-logo.png';
import './background.css';

export function Background(){

// making automatic slideshow images with classname slides and changing them every 5 seconds

    const [index, setIndex] = useState(0);
    const [images] = useState([bck1, bck2, bck3, bck4]);
    const [image, setImage] = useState(bck1);
    const [image2, setImage2] = useState(bck2);
    const [image3, setImage3] = useState(bck3);
    const [image4, setImage4] = useState(bck4);

    useEffect(() => {
        setInterval(() => {
            setIndex(index + 1);
        }, 5000);
    }, [index]);

    useEffect(() => {
        setImage(images[index % images.length]);
        setImage2(images[(index + 1) % images.length]);
        setImage3(images[(index + 2) % images.length]);
        setImage4(images[(index + 3) % images.length]);
    }, [index, images]);

    useEffect(() => {
        setImage(image);
    }, [image]);

    useEffect(() => {
        setImage2(image2);
    }, [image2]);

    useEffect(() => {
        setImage3(image3);
    }, [image3]);

    useEffect(() => {
        setImage4(image4);
    }, [image4]);


    return(
        <>
        <div>
        <img className="slides" alt='background' src={image} ></img>
        </div>
        <div>
        <h3> Welcome to Off_World</h3>
            </div>
        </>
    );
}

export default Background;