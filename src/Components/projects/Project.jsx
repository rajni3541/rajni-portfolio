import React from 'react'
import './Project.css'
import hearteEmoji from '../../img/heartemoji.png'
import Card from '../../Components/Card/Card'
// import Humble from '../../img/humble.png'
// import glassesimoji from '../../img/glassesimoji.png'
import Rajni from '../../img/Rajni (1).pdf'
import Aos from 'aos';
import { useEffect } from 'react'
const Project = () => {
    useEffect(() => {Aos.init();},[]);
    return (
        <div className="project" data-aos="fade-up">
            {/* left side */}
            <div className="awesome" >
                <span>My Awesome Projects</span>
                <span className="technologies">my projects include html5,css,javascript,mongodb,expres.js,react.js,redux,node.js,</span>
                <a className="cv" href={Rajni} Download>
                    <button className='button s-button'>DOWNLOAD CV</button>
                </a>

                <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
                {/* right side */}
                <div className='cards'>
                    <div >
                        <Card
                            emoji={hearteEmoji}
                            heading={'Social-Media'}
                            details={"web app like instagram"}
                        />
                    </div>
                    {/* second card */}
                    <div  >
                        <Card
                            emoji={hearteEmoji}
                            heading={'E-commerce'}
                            details={"web app for shopping"}
                        />
                    </div>
                    {/* THIRD card */}
                    <div >
                        <Card
                            emoji={hearteEmoji}
                            heading={'Zee5'}
                            details={"web app of movies "}
                        />
                    </div>
                    {/* Fourth Card */}
                    <div >
                        <Card
                            emoji={hearteEmoji}
                            heading={'Gym Website'}
                            details={"web app of movies "}
                        />
                    </div>
                    {/* FIFTH card */}
                    <div >
                        <Card
                            emoji={hearteEmoji}
                            heading={'covid app'}
                            details={"web app of movies "}
                        />
                    </div>
                    {/* SIXTH card */}
                    <div >
                        <Card
                            emoji={hearteEmoji}
                            heading={'beauty product site'}
                            details={"web app of movies "}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project