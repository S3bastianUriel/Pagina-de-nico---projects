import React from 'react';
import '@styles/Home.scss';

// import 
import nico from '@logos/nico2.jpg';
import sql from "@logos/sql-logo.png";
import pandas from "@logos/pandas_icon.png";
import matplotlib from "@logos/Matplotlib_icon.svg.png";
import numpy from "@logos/numpy(1).png";
import python from "@logos/Python-Symbol.png";
import powerbi from "@logos/PowerBI.jpg";
import excel from "@logos/Excel.png"



//Projects cover
// import summation_of_sales from "@projects/summation_of_sales_per_year.jpg";
// import the_best_company from "@projects/best_company_in_the_world.jpg";
// import the_best_company2 from "@projects/best_company_in_the_world2.png";
// import the_best_company3 from "@projects/best_company_in_the_world3.png";

import tesla from "@projects/TESLA.jpg";

import sandk from "@projects/Sin título5.png";


import github from '@logos/github.png';
import platzi from '@logos/platzi.png';
import linkedin from '@logos/linkedin.png';
import hackerrank from '@logos/HackerRank_Icon-1000px.png';

// import ModalMenu from '@components/ModalMenu'
import Footer from '@components/Footer';


const Home = () => {
    return (
        <React.Fragment>
        <section className="profile">
            <div className="profile__content">
                

                <div className="profile__socialmedia">
                    <div className="profile__socialmedia--icon">
                        <a href="https://github.com/NicoLeo455"  target="_blank" >
                            <img src={github} className="" alt="socialmedia__icon"/>
                        </a>
                    </div>

                    <div className="profile__socialmedia--icon">
                        <a href="https://platzi.com/p/zymax777/"  target="_blank" >                    
                            <img src={platzi} className="" alt="socialmedia__icon"/>
                        </a>
                    </div>

                    <div className="profile__socialmedia--icon">
                        <a href="https://www.linkedin.com/in/nicolas-santiva%C3%B1ez-/"  target="_blank" >
                            <img src={linkedin} className="" alt="socialmedia__icon"/>
                        </a>
                    </div>

                    <div className="profile__socialmedia--icon">
                        <a href="https://www.hackerrank.com/zymax007"  target="_blank" >
                            <img src={hackerrank} className="" alt="socialmedia__icon"/>
                        </a>
                    </div>
                </div>  

                <div className="profile__picture">
                    {/* <a href="https://www.linkedin.com/in/sebastian-uriel-santiva%C3%B1ez-645087234/"  target="_blank" ></a> */}
                    <img src={nico} className="" alt="profile__pic" />
                </div>

                <div className="profile__name">
                    <p>Hi! My name is <strong>Nicolas Santivañez</strong>. <br/>I'm a <strong>BI-Data Analyst</strong> and Python Developer from Argentina.</p>
                </div>


            </div>
        </section>

        <section className="intersection">
            <h2>Data Management Skills</h2>
        </section>

        <section className="skills">
            <div className="skills__content">

                <div className="skills__content--logos">
                    <img src={sql} className="" alt="" />
                </div>
                <div className="skills__content--logos">
                    <img src={pandas} className="" alt="" />
                </div>
                <div className="skills__content--logos">
                    <img src={matplotlib} className="" alt="" />
                </div>
                <div className="skills__content--logos">
                    <img src={numpy} className="" alt="" />
                </div>
                <div className="skills__content--logos">
                    <img src={python} className="" alt="" />
                </div>
                {/* <div className="skills__content--logos">
                    <img src={sql} className="" alt="" />
                </div> */}
                <div className="skills__content--logos">
                    <img src={powerbi} className="" alt="" />
                </div>
                <div className="skills__content--logos">
                    <img src={excel} className="" alt="" />
                </div>

                


            </div>
        </section>
        

        <section className="intersection">
            <h2>Some Dashboards & Projects</h2>
        </section>

        <section className="projects">
            <div className="projects__content">

                <div className="projects__item">
                    <a href="https://colab.research.google.com/drive/1CvUL48oZEDiwSjx8_ty-yhEK_GMfEzUJ?usp=sharing"  target="_blank" >
                        <img src={tesla} className="" alt=""   />
                    </a>
                        <div className="projects__item--text">
                            <p>Tesla Stock Analysis - Python</p>
                        </div>    
                </div>

                <div className="projects__item">
                    <a href="https://colab.research.google.com/drive/1DftzN5nCQmWwg34mRVCe1EdwiB14TBS9?usp=sharing"  target="_blank" >
                        <img src={sandk} className="" alt=""   />    
                    </a>
                        <div className="projects__item--text">
                            <p>s&p 500 Analysis - Python</p>
                        </div>    
                </div>

                {/* <div className="projects__item">
                    <img src={itemimg} className="" alt=""   />
                        <div className="projects__item--text">
                            <p>Consumer and Products Analytics - Power BI</p>
                        </div>    
                </div>

                <div className="projects__item">
                    <img src={itemimg} className="" alt=""   />
                        <div className="projects__item--text">
                            <p>Consumer and Products Analytics - Power BI</p>
                        </div>    
                </div>

                <div className="projects__item">
                    <img src={itemimg} className="" alt=""   />
                        <div className="projects__item--text">
                            <p>Consumer and Products Analytics - Power BI</p>
                        </div>    
                </div>
                <div className="projects__item">
                    <img src={itemimg} className="" alt=""   />
                        <div className="projects__item--text">
                            <p>Consumer and Products Analytics - Power BI</p>
                        </div>    
                </div> */}
            </div>
        </section>

        <section className="intersection">
            {/* <button className="buttons">More Projects</button> */}
        </section>

        <section className="contact">
            <div className="contact__list--title">
                <h2>Contact me:</h2>
            </div>
            <div className="contact__list">
                <div className="contact__list--text" >
                    <span>
                    Thanks for take time to look my website.<br />
                    If you found my profile and experience interesting, we can communicate to establish synergies.<br />
                    <br />
                    </span>

                    <span><strong>Name</strong>:  Nicolas Leonardo Santivañez<br /></span>
                    <span><strong>Email</strong>:  nicolasantivanez1994zymx@gmail.com<br /></span>
                    <span><strong>WhatsApp</strong>:  +54 9 11 6573-4879<br /></span>
                    
                </div>
                
            </div>
            
            <Footer />

        </section>


        </React.Fragment>
    );
}

export default Home;