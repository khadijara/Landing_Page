import React, {useState} from 'react';
import intro from '../../assets/intro.PNG';
import single from '../../assets/single.PNG';
import singlegame from '../../assets/singlegame.PNG';
import sgame from '../../assets/sgame.PNG';
import anothergame from '../../assets/anothergame.PNG';

import './Gallery.css';
import GalleryList from './GalleryList';

const TeamData = [
    // { id: 1, text: 'FrontEnd Developer', title: 'Gerard Marquina', url: [gerard] },
    // { id: 2, text: 'BackEnd Developer', title: 'Alex Andreba', url: [alex] },
    // { id: 3, text: 'Backend Developer',title: 'Xavi Moya', url: [xavi] },
    // { id: 1, text: 'Frontend Developer', title: 'Khadija Rehman', url: [khadija]},

    {id:1 , text: 'We are going to start the game from here!!' , title: 'Introduction' , url: [intro] },
    {id:2 , text: 'Single Player Game' , title: 'Single Player' , url: [single] },
    {id:3 , text: 'Here, you will see the game options of the single Player' , title: 'Single Player Game Options' , url: [singlegame] },
    {id:4 , text: 'Another view of the field' , title: 'Single Game Player view' , url: [sgame] },
    {id:5 , text: 'Here, you will see the game options of the single Player' , title: 'Another Game Scene' , url: [anothergame] },

  ];



export function Galleryheader(){
    const [gallery, setgallery] = useState(TeamData);
    return(
        <>
        <main className='main' id='Gallerys'>
        <header>
            <h1 className='headGallery'>Our Gallery</h1>
        </header>        
        <section>
        <GalleryList items={gallery}/>
        </section>
        </main>
        </>
    );
}


export default Galleryheader;