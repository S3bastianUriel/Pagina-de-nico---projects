import React from 'react';
import '@styles/Projects.scss';
import powerbi from '@logos/PowerBI.jpg';
import python from '@logos/Python-Symbol.png'

//PROJECTS
// import summation_of_sales from "@projects/summation_of_sales_per_year.jpg";
// import the_best_company from "@projects/best_company_in_the_world.jpg";

import tesla from "@projects/TESLA.jpg";
import sandk from "@projects/Las 5 mejores companias en el S&P500.jpg";
import casesofcovid19 from "@projects/Case of Covid 19 from 2020-22.png"


import Footer from '@components/Footer';


const Projects = () => {
    return (
        <React.Fragment>
            <section className="projects">
                <div className="projects__title">
                    <h1>Projects</h1>
                    <h3>I have done projects such as Dashboards in Power BI.</h3>
                </div>
            </section>

            <section className="projects__types">

                <div className="projects__types--content">
                    <div className="projects__types--content--item">
                        <div className="projects__types--content--item--pic">
                            <img src={powerbi} className="" alt="" />
                        </div>
                        <p>Power BI Dashboards</p>
                    </div>
                </div>

            </section>



            <section className="project__item">
                <div className="project__item--content">
    
                    <div className='project__item--content--article'>
                        <a href="https://colab.research.google.com/drive/1CvUL48oZEDiwSjx8_ty-yhEK_GMfEzUJ?usp=sharing"  target="_blank">
                            <img src={tesla} className="" alt=""   />
                        </a>

                        <div className='project__item--content--article--text'>
                            <a href="https://colab.research.google.com/drive/1CvUL48oZEDiwSjx8_ty-yhEK_GMfEzUJ?usp=sharing"  target="_blank">Tesla Stock Analysis - Python</a>
                        </div>
                    </div>

                    <div className='project__item--content--article'>
                        <a href="https://colab.research.google.com/drive/1DftzN5nCQmWwg34mRVCe1EdwiB14TBS9?usp=sharing"  target="_blank">
                            <img src={sandk} className="" alt=""   />
                        </a>

                        <div className='project__item--content--article--text'>
                            <a href="https://colab.research.google.com/drive/1DftzN5nCQmWwg34mRVCe1EdwiB14TBS9?usp=sharing"  target="_blank">S&P 500 Analysis - Python</a>
                        </div>
                    </div>

                    <div className='project__item--content--article'>
                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNjdlODJiZTUtNmYwNC00YWI2LTllMDktZTQyOWMyN2ZlMzUyIiwidCI6ImZhMTYyNmJlLTUxMDMtNGM5MC1iYzJmLTY2NzAxMWIzMzAwYyJ9"  target="_blank">
                            <img src={casesofcovid19} className="" alt=""   />
                        </a>

                        <div className='project__item--content--article--text'>
                            <a href="https://app.powerbi.com/view?r=eyJrIjoiNjdlODJiZTUtNmYwNC00YWI2LTllMDktZTQyOWMyN2ZlMzUyIiwidCI6ImZhMTYyNmJlLTUxMDMtNGM5MC1iYzJmLTY2NzAxMWIzMzAwYyJ9"  target="_blank">Case of Covid 19 from 2020 to 2022 - Power BI </a>
                        </div>
                    </div>

                    
                    {/* <div className='project__item--content--article'>
                        <div className="project__item--content--article--cover">
                            <a href="https://colab.research.google.com/drive/1DftzN5nCQmWwg34mRVCe1EdwiB14TBS9?usp=sharing"  target="_blank">
                                <div className="project__item--content--article--cover2">
                                    <img src={sandk} className="" alt=""   />
                                </div>
                            </a>
                        </div>

                        <div className='project__item--content--article--text'>
                            <a href="https://colab.research.google.com/drive/1DftzN5nCQmWwg34mRVCe1EdwiB14TBS9?usp=sharing"  target="_blank">S&P 500 Analysis - Python </a>
                        </div>    
                    </div> */}
                    
                </div>
                
            </section>

            <Footer />

        </React.Fragment>
    );
}

export default Projects;