import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

// import {
//   FaMailBulk,
//   FaInstagram,
//   FaPhone,
//   FaLinkedinIn,
//   FaFacebook,
// } from "react-icons/fa";
function Footer() {
  return (
    <footer className="all-pages_footer">
      <div className="footer-cols">
        <div className="col">
          <div className="logo">
            <Link to='/'>
              <img src='https://i.imgur.com/Lg3kv0j.png' alt="ECESS Logo" />
            </Link>
          </div>
        </div>

        <div className="col">
          <div className="footer-widget-heading">
            <h3>
              Contact Us{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
          </div>
          <ul>
            <li>Arghya : +918017219590</li>
            <li>Praveen : +917416238044</li>
          </ul>
        </div>

        <div className="col">
          <h3>
            Useful Links
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

        <div className="col">
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
          <i class="fa fa-copyright"></i>2023 ECESS NITDGP.
          <br></br>
          <p>
            Designed and Developed by{" "}
            <b style={{ color: "rgba(244, 233, 111, 0.961)" }}>
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
