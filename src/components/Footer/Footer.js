import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-container">

        <div className="footer-col about">
          <div className="logo2">
                <Link to='/'><img src='https://i.imgur.com/Lg3kv0j.png' alt="ECESS Logo" /></Link>
          </div>

          <p className= "logo-text">Electronics and Communication Engineering Student's Society at NIT Durgapur.</p>
        </div>

        <div className="footer-col links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/events">Events</Link></li>
            {/*<li><Link to="/contact">Contact</Link></li>*/}
          </ul>
        </div>

        <div className="footer-col contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Dhritishree Saha (President)<br />
              <a href="tel:+919732996467">+91 97329 96467</a>
            </li>
            <li>
              Manas Mahata (Vice President)<br />
              <a href="tel:+916294260685">+91 62942 60685</a>
            </li>
            <li>
              Mohammed Asif (General Secretary)<br />
              <a href="tel:+918967290251">+91 89672 90251</a>
            </li>
          </ul>
        </div>

        <div className="footer-col social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/ecess.nitdgp/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/ece_students_society/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/73885679/admin/feed/posts/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="mailto:ecess.ece.nitdurgapur@gmail.com"><i className="fa fa-envelope"></i></a>
          </div>
        </div>

      </div>

      <hr />
      <div className="footer-bottom">
        <p>©2025 ECESS NITDGP | Designed & Developed by <b>Web Development Team</b></p>
      </div>
    </footer>
  );
}

export default Footer;
