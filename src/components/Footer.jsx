import React, { useState, useContext } from 'react';


import '@styles/Footer.scss';
// import '../styles/Header.scss';
// import menu from '@icons/menu.png';


import github from '@logos/github.png';
import platzi from '@logos/platzi.png';
import linkedin from '@logos/linkedin.png';


function Footer() {
	// const [toggle, setToggle] = useState(false);


    return (
        <footer className="footer">

            <div className="footer__content">

                <div className="footer__socialmedia" >
                    <div className="footer__socialmedia--item" >
                        
                        <a href="https://github.com/NicoLeo455"  target="_blank" >
                            <img src={github} className="" alt="socialmedia__icon"/>
                        </a>


                    </div>

                    <div className="footer__socialmedia--item">
                        

                        <a href="https://platzi.com/p/zymax777/"  target="_blank" >                    
                            <img src={platzi} alt="socialmedia__icon"/>
                        </a>


                    </div>

                    <div className="footer__socialmedia--item">
                        <a href="https://www.linkedin.com/in/nicolas-santiva%C3%B1ez-/"  target="_blank" >
                            <img src={linkedin} alt="socialmedia__icon" />
                        </a>

                        
                    </div>

                </div>

                <div className="footer__contact">
                    {/* <img src={logo} alt=""/> */}
                    <ul className="footer__contact--list">
                    {/* <ul> */}
                        <span><strong>Email</strong>: nicolas94santivanez94@gmail.com</span>
                        <span><strong>WhatsApp</strong>: +54 9 11 6573-4879</span>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;