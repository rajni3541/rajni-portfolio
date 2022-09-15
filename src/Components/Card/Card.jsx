import React  from 'react'
import  "./Card.css"

 const Card = ({emoji,heading,details}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <div style={{display: 'flex', gap: '0.5rem'}}>
        <a href="https://social-media-frontend-4559yrz0h-rajni3541.vercel.app" style={{textDecoration: 'none'}} className="c-button">Live Demo</a>
        <a href="https://github.com/rajni3541/social-media" style={{textDecoration: 'none'}} className="c-button">Github</a>
        </div>
        
    </div>
  )
}

export default Card;