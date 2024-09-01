import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="all-pages_footer">
      <div className="footer-cols">
        <div className="col col-logo">
          <div className="logo">
            <Link to='/'>
              <img src='https://i.imgur.com/Lg3kv0j.png' alt="ECESS Logo" />
            </Link>
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
            <li>Arghya Kamal Das (President) <br/> +91 8017219590</li>
            <li>Praveen Thota (Vice President) <br/> +91 7416238044</li>
            <li>Harshit Loyalka (General Secretary) <br/> +91 9339193537</li>
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
            <li>
              <a href="HomePage">Home</a>
            </li>
            <li>
              <a href="FacultyPage">Faculty</a>
            </li>
            <li>
              <a href="TeamPage">Team</a>
            </li>
            <li>
              <a href="AboutusPage">About Us</a>
            </li>
          </ul>
        </div>

        <div className="col col-social">
          <h3>
            Follow Us
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>
            <a href="https://www.facebook.com/ecess.nitdgp/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/ece_students_society/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/73885679/admin/feed/posts/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="mailto:ecess.ece.nitdurgapur@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="rcopyRight" style={{ backgroundColour: "#492E87" }}>
        <p>
          <i class="fa fa-copyright"></i>2024 ECESS NITDGP.
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
