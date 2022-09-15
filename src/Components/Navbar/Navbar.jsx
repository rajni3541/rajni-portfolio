import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { useContext } from 'react'
import { themeContext } from '../../App'
const Navbar = () => {
    const {dark} = useContext(themeContext)
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Rajni Saini</div>
               <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li><a style={{color: !dark && '#000'}} href="#home">Home</a></li>
                        <li><a style={{color: !dark && '#000'}} href="#experience">Experience</a></li>
                        <li><a style={{color: !dark && '#000'}} href="#portfolio">Portfolio</a></li>
                    </ul>
                    
                </div>
                <a href="#footer" style={{textDecoration: 'none'}} className="button">Contact Me</a>
            </div>
        </div>

    )
}

export default Navbar