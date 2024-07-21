import React from "react";
import { useEffect, useRef, useState } from "react";
import "./home.css";
import ImageAccordion from "./carousel.js";
import img1 from '../../images/ecedepartment1.jpeg';
import img2 from '../../images/ecedepartment2.jpeg';
import img3 from '../../images/ecedept1-square.png';
import Carousel from "./carousel-actual.js";

const items = [
  { image: `${img1}` },
  { image: `${img1}` },
  { image: `${img2}` },
  { image: `${img3}` },
];

function Home() {
  const images = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
  ];

  return (
    <div className="whole-website">

      <div className="primary-section">
        <div className="container">
          <div class="box">
            <span></span>
            <div class="content">
              <h1>ECESS</h1>
              <h2>Electronics & Communication Engineering Students' Society</h2>
              <h4>LEARN.INNOVATE.COLLABORATE</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="secondary-section">
        <div className="section" >
          <div className="card one">
            <div className="heading">Mission</div>
            <div className="description mission-desc">
              <p> To develop a community by the students of the Electronics and
                Communication Department that will work towards the welfare of the
                department and its students in general. To develop a strong alumni
                network and involve them in conducting various seminars as well as
                career guidance assistance via interaction sessions with the
                students of Electronics and Communication Engineering. To
                systematically access the computer laboratory of the department
                for maximum utilization by the students and software that can be
                made available to the students to hone their software skills and
                perform necessary simulations.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card two">
              <div className="heading">Vision</div>
              <div className="description ">
                <p className="vision-desc"> To produce highly competent and resourceful young engineers
                  who can perform well in varied professions. To develop a
                  strong fundamental base which enables students to explore
                  academic and collaborative interactions with industry,
                  academia and research organizations. To develop excellent
                  research facilities</p>
              </div>
            
          </div>
        </div>

        <div className="section">
          <div className="card three">
            <div className="heading">Values</div>
            <div className="description">
              <p> The embryonic formation of the Department of Electronics and
                Communication Engineering was in the year 1983 with the
                introduction of an undergraduate course. Situated amidst a lush
                green campus with teak plantations, the Department, over time, has
                grown in several dimensions and provides a magnetic ambience in
                teaching and learning. The faculties are engaged in research in
                diverse topics focussing on Telecommunication, Antenna and
                Microwave, Microelectronics and VLSI, Signal and Image processing
                and Computational Systems Biology.</p>
            </div>
          </div>
        </div>
      </div>

        {/* <ImageAccordion items={items} /> */}
        <Carousel images={images} />
    </div>
  );
}

export default Home;
/* <div className="back"></div>
  <div className="who-are-we" id="about-ecess">
    <h1>ECESS</h1>
    <h2>Electronics & Communication Engineering Students' Society</h2>
    <h4>LEARN.INNOVATE.COLLABORATE</h4>
  </div>
</div> */