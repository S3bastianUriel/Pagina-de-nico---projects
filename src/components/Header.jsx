// import React, { useContext } from 'react';
import React, { useState, useContext } from 'react';

// import React from 'react';
// import { Context } from '@context/AppContext';

import '@styles/Header.scss';
// import '../styles/Header.scss';
import menu from '@icons/menu.png';
import ModalMenu from '@components/ModalMenu'

import Menu from '@components/Menu';

// import logo from '@logos/logo.png';
// import shoppingCart from '@icons/shopping-cart.svg';
// import ModalMenu from '@components/ModalMenu'
// import Menu from '@components/Menu';

// const Header = () => {
// function Header(props) {
//     const handleModalMenu = () => {
//         props.setmenuModal(prevState => !prevState);
// };

function Header(props) {
	const [toggle, setToggle] = useState(false);
	// const [toggleOrders, setToggleOrders] = useState(false);
	// const { state } = useContext(AppContext);

	const onClickButton = () => {
		setToggle(!toggle);
	}


    return (
        <nav className="header">

            <div className="header__list">
                <div className="header__menu" >
                    <div className="header__menu--logo" onClick={onClickButton}>
                        <img src={menu} alt/>
                    </div>
                    {/* <img src={menu}  alt=""/> */}

                    <div className="header__menu--name">
                        <p>Nicolas Santivañez - Data Analyst</p>
                    </div>

                </div>

                <div className="header__routes">
                    {/* <img src={logo} alt=""/> */}
                    <ul className="header__routes--list">
                    {/* <ul> */}
                        <a href="https://nicolassantivanez.netlify.app/"  >HOME</a>
                        <a href="https://nicolassantivanez-aboutme.netlify.app/" >ABOUT ME</a>
                        <a href="/" >PROJECTS</a>
                    </ul>
                </div>
            </div>
            {/* {toggle && <Menu />}	{/*	//toogle se inicializa false y luego "&& Menu" para que se muestre Menu cuando el estado de toogle cambie*/ }  

            {!!toggle && (
                <ModalMenu>
                    <Menu />
                </ModalMenu>
            )}

        </nav>
    );
}

export default Header;