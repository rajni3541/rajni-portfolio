import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import filename from '../../img/WhatsApp Image 2022-01-11 at 3.33.56 AM.jpeg'
// import Crown from '../../img/crown.png'
// import glassesimoji from '../../img/glassesimoji.png'
// import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Aos from 'aos'
import { useEffect } from 'react'



const Intro= () => {
    useEffect(() => {
        Aos.init();
    },[])
    return (
        <div className="intro" data-aos="fade-up">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I am</span>
                    <span>Rajni Saini</span>
                    <span>Mern Stack Developer with high level
                        of Experience in full Stack development,
                        producting the quality work</span>
                </div>

                <a href="#contact" style={{textDecoration: 'none', textAlign: 'center'}} className="button i-button">Hire me</a>
                 <div className="i-icons">
                     <a href='https://github.com/rajni3541'>
                     <img src={Github} 
                     alt="" />
                     </a>
                     <a href='https://www.linkedin.com/in/rajnisaini/'>
                     <img src={LinkedIn} 
                     alt="" />
                     </a>
                 </div>
            </div>
           
                <div className="i-right">
                <img src={filename} alt="" />
               {/* <div  style={{top: '-4%' , left: '68%'}}>
                   MERN DEVELOPER
               </div> */}

            </div>

        </div>
    )
}

export default Intro