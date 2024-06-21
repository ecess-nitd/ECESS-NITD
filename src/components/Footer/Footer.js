import React from 'react'
import './Footer.css'
function Footer() {
  return (
    
    <div className="all-pages_footer">
      <div className='rfooterLinks'>
    <a href="https://www.instagram.com/ece_students_society/"><i className="fa fa-instagram"></i></a> 
    <a href="https://github.com/ecess-nitd"><i className="fa fa-github"></i></a>  
    <a href="https://www.linkedin.com/in/ecess-nitdgp-512b351b7/"><i className="fa fa-linkedin"></i></a>  
    <a href="https://www.facebook.com/ecess.nitdgp/"><i className="fa fa-facebook"></i></a> 
    </div>
    <div className='rcopyRight'>
    <i className="fa fa-copyright"></i>2023 ECESS NITDGP.
    <br></br>
    <p>Designed and Developed by <b style={{color:'rgba(244, 233, 111, 0.961)'}}>Web Development Team</b> .</p>
    </div>
    </div>
  )
}

export default Footer