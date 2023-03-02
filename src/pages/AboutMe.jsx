import React from 'react';
import '@styles/AboutMe.scss';
import nico from '@logos/nico2.jpg';

import Footer from '@components/Footer';


const AboutMe = () => {
    return (
        <React.Fragment>
            <section className="aboutme">
                <div className="aboutme__content">
                    <div className="aboutme__content--item">
                        <div className="aboutme__content--item--pic">
                            <img src={nico} className="" alt="" />
                        </div>
                        {/* <button className="aboutme__content--item--buttons">Curriculum</button> */}
                    </div>

                    <div className="aboutme__content--data">
                        <h2> About Me  </h2>
                        <p> Hello! My name is Nicolas, I work as a nurse in a hospital but this year I needed a real change in my life. I began to be interested in the world of technology, this is because I was passionate about mathematics. I started being self-taught but now I am studying to be a data analyst, I love programming in python and my dreams are to use mathematical logic supported by artificial intelligence to be a professional in the field of both technology and medicine.</p>
                    </div>
                </div>
            </section>

            <section className="aboutme__list">
                <div className="aboutme__list--item">
                    <h3>Academic: </h3>
                    {/* <span>Software Solutions Analyst - MVM Ingeniería de Software | Full Time - Remote</span>
                    <p>[Aug - 2022]  - [Actually]</p> */}
                    <span>Platzi Student - Data Analyst </span>
                    <p>[January-2022] - [Actually]</p>
                    {/* <ul>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                    </ul> */}
                </div>

                <div className="aboutme__list--item">
                    <h3>Enginner Electronic </h3>
                    {/* <span>Software Solutions Analyst - MVM Ingeniería de Software | Full Time - Remote</span>
                    <p>[Aug - 2022]  - [Actually]</p> */}
                    <span>Universidad Tecnologica Nacional</span>
                    <p>[February-2021] -[December-2021] (Stand by)</p>

                    {/* <ul>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                    </ul> */}
                </div>

                <div className="aboutme__list--item">
                    <h3>NurseTechnician</h3>
                    {/* <span>Software Solutions Analyst - MVM Ingeniería de Software | Full Time - Remote</span>
                    <p>[Aug - 2022]  - [Actually]</p> */}
                    <span>Hospital Interzonal General de Agudos 'Pedro Fiorito'  </span>
                    <p>[March-2015]-[December-2017]</p>
                    {/* <ul>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                    </ul> */}
                </div>

                <div className="aboutme__list--item">
                    <h3>Languages</h3>
                    {/* <span>Software Solutions Analyst - MVM Ingeniería de Software | Full Time - Remote</span>
                    <p>[Aug - 2022]  - [Actually]</p> */}
                    <span>English: Intermediate - Spanish: Native</span>
                    <p></p>
                    {/* <ul>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                        <li>Analysis of hourly dedication and professional profiles for the planning of hydroelectric projects </li>
                    </ul> */}
                </div>
                


            </section>

            <Footer />


        </React.Fragment>
    );
}

export default AboutMe;