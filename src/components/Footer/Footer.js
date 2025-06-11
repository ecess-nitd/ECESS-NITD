import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="all-pages_footer">
      <div className="footer-cols">
        <div className="logo_social">
          <div className="col col-logo">
            <div className="logo2">
              <Link to='/'><img src='https://i.imgur.com/Lg3kv0j.png' alt="ECESS Logo" /></Link>
            </div>
          </div>
          <div className="col col-social">
            <h3>
              Follow Us
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>
              <a href="https://www.facebook.com/ecess.nitdgp/" target="_main">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/ece_students_society/" target="_main">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/73885679/admin/feed/posts/" target="_main">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="mailto:ecess.ece.nitdurgapur@gmail.com" target="_main">
                <i className="fa fa-envelope"></i>
              </a>
            </p>
          </div>
        </div>
        
        <div className="col col-contact">
          <div className="footer-widget-heading">
            <h3>
              Contact Us{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
          </div>
          <ul>
            <li>Dhritishree Saha (President)<br/><i class="fa fa-phone"></i> +91 97329 96467</li>
            <li>Manas Mahata (Vice President)<br/><i class="fa fa-phone"></i> +91 62942 60685</li>
            <li>Mohammed Asif (General Secretary)<br/><i class="fa fa-phone"></i> +91 89672 90251</li>
          </ul>
        </div>

        <div className="col col-link">
          <h3>
            Quick Links
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="rcopyRight" >
        <p>
          <i class="fa fa-copyright"></i>2025 ECESS NITDGP.
          <br></br>
          <p>
            Designed and Developed by{" "}
            <b style={{ color: "black" }}>
              Web Development Team
            </b>{" "}
            .
          </p>
        </p>
      </div>
    </footer>
    
  );
}

export default Footer;
