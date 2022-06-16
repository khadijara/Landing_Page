

import React from 'react'
import { Menu } from './Menu';
import './Header.css';



// import logo from '../../assets/Logo.png';


class Header extends React.Component {


    state = { clicked: false} //stating when you click on something
    click = () => {
        this.setState({clicked: !this.state.clicked}) //if clicked is true, set it to false, else set it to true
    }

    // change(option){
    //     console.log(option.target.value);
    //     localStorage.setItem('language', option.target.value);
    //     window.location.reload();
    // }


    
    render() {

        return (
            <nav className='Header'>
                <h1 className='Header-logo'>
                    {/* <img src={logo} alt="Logo"  width="70" height="80"></img> */}
                    Off_World
                    
                </h1>
                <div className='Menu' onClick={this.click}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>  {/* if clicked is true, show x, else show bars */}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menu.map((item) => {
                        return (
                            <li key={item.id}>
                                <a  className={item.classname} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <select className='selects' onChange={this.change} >
                    <option value="es-ES">Español</option>
                    <option value="en-US">English</option>

                </select>
            </nav>
        )
    }
}

export default Header;
