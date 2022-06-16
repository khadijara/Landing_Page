import React, {useState} from 'react';
import khadija from '../../assets/khadija.jpg';
import './Gallery.css';
import GalleryList from './GalleryList';

const TeamData = [
    // { id: 1, text: 'FrontEnd Developer', title: 'Gerard Marquina', url: [gerard] },
    // { id: 2, text: 'BackEnd Developer', title: 'Alex Andreba', url: [alex] },
    // { id: 3, text: 'Backend Developer',title: 'Xavi Moya', url: [xavi] },
    { id: 1, text: 'Frontend Developer', title: 'Khadija Rehman', url: [khadija]},
  ];
export function Galleryheader(){
    const [gallery, setgallery] = useState(TeamData);
    return(
        <>
        <main>
        <header>
            <h1 className='headTeam'>Meet Our Team</h1>
        </header>        
        <section>
        <GalleryList items={gallery}/>
        </section>
        </main>
        </>
    );
}


export default Galleryheader;