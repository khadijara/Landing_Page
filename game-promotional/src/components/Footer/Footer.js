import React from 'react';
import  logo from '../../assets/Logo.png';
import {FooterArrayCl3} from './FooterArray';
import './Footer.css';

export function Footer(){
        return(
            
                <>
                <div className="footer">
                <div className="footer-content">
                    <h1 className="footer-content-left">
                        Alan Turing</h1>
                    <img src={logo} alt="Logo" width="140" height="140" ></img>
                </div>

                <div className="footer-content-right-col3">
                    <ul>
                    <h1 className='heading'>Socials</h1>
                        {FooterArrayCl3.map((item) => {
                            return (
                                <h1 key={item.id}>
                                    <a href={item.url}>
                                        {item.title}
                                    </a>
                                </h1>
                            );
                        })}

                    </ul>
                </div>
            </div>
            <div className='copyright'>
                    <div className='footer'>

                        <p className='copyright1'>© 2022 Alan_Turing. All rights reserved.</p>

                    </div>
                </div>
                
                    </>
                     );

                    }

                    export default Footer;