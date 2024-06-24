import React from "react";
import "./home.css";
import bg from "../../images/semiconductor.jpg";
import ImageAccordion from "./carousel.js";
import img1 from '../../images/ecedepartment1.jpeg';
import img2 from '../../images/ecedepartment2.jpeg';
import img3 from '../../images/ecedept1-square.png';
import Carousel from "./carousel-actual.js";



const items = [
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
      <div
        className="primary-section"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="secondary-section">
        <div className="section " >
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

        <div className="section ">
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

        <div className="section ">
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
      {/* <CarouselFadeExample /> */}
      <ImageAccordion items={items} />
      <Carousel images={images} />
    </div>
  );
}

export default Home;

/*
/* <div className="secondary-section">
        <div className="section ">
          <div className="logo"> <img className="logo" src={logo} alt="" /> </div>
          <div className="heading"> MISSION  </div>
          <div className="descreption">
            To develop a community by the students of the Electronics and Communication Department that will work towards the  welfare of the department and its students in general.
            To develop a strong alumni network and involve them in conducting various seminars as well as career guidance assistance via interaction sessions with the students of Electronics and Communication Engineering.
            To systematically  access to the computer laboratory of the department for maximum utilization by the students and  software that can be made available to the students to hone their software skills and perform necessary simulations.

          </div>
        </div>
        <div className="section two">
          <div className="logo"> <img className="logo" src={logo} alt="" /> </div>
          <div className="heading"> VISION  </div>
          <div className="descreption">
            <p>To produce highly competent and resourcefull young engineers who can perform well in varied professions.</p>
            <p> To develop a strong fundamental base which enable students to explore academic and collaborative interactions with industry, academia and research organizations.</p>
            <p> To develop excellent research facilities.</p>
          </div>
        </div>
        <div className="section one">
          <div className="logo"> <img className="logo" src={logo} alt="hhhh" /> </div>
          <div className="heading"> VALUES  </div>
          <div className="descreption">
            The embryonic formation of the Department of Electronics and Communication Engineering was in the year 1983 with the introduction of an undergraduate
            course.Situated amidst lush green campus with teak plantations,the Department, over the time, has grown in several dimensions and
            provides a magnetic ambience in teaching and learning.The faculties are engaged in research in diverse topics focussing in
            Telecommunication, Antenna and Microwave, Microelectronics and  VLSI, Signal and Image processing and Computational Systems Biology.
          </div> */
/* </div> */
/* </div> */

// </div > */}
//   <div className="card">
//     {/* <div className="card-area mission">
//       <h3>MISSION</h3>
//     </div>
//     <div className="card-overlay"> */}
//     <div className="card-text">
//       <h3 className="card-heading">MISSION</h3>
//       <p className="description">
//         To develop a community by the students of the Electronics and
//         Communication Department that will work towards the welfare of
//         the department and its students in general. To develop a strong
//         alumni network and involve them in conducting various seminars
//         as well as career guidance assistance via interaction sessions
//         with the students of Electronics and Communication Engineering.
//         To systematically access to the computer laboratory of the
//         department for maximum utilization by the students and software
//         that can be made available to the students to hone their
//         software skills and perform necessary simulations.
//       </p>
//     </div>
//     {/* </div> */}
//   </div>
// </div>

// <div className="section two">
//   <div className="card">
//     <div className="card-area vision">
//       <p>Vision</p>
//     </div>
//     <div className="card-overlay">
//       <div className="card-text">
//         <h3>VISION</h3>
//         <p>
//           To produce highly competent and resourceful young engineers
//           who can perform well in varied professions. To develop a
//           strong fundamental base which enables students to explore
//           academic and collaborative interactions with industry,
//           academia and research organizations. To develop excellent
//           research facilities
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="section three">
//   <div className="card">
//     <div className="card-area values">
//       <p>Values</p>
//     </div>
//     <div className="card-overlay">
//       <div className="card-text">
//         <h3>VALUES</h3>
//         <p>
//           The embryonic formation of the Department of Electronics and
//           Communication Engineering was in the year 1983 with the
//           introduction of an undergraduate course. Situated amidst a
//           lush green campus with teak plantations, the Department,
//           overtime, has grown in several dimensions and provides a
//           magnetic ambience in teaching and learning. The faculties are
//           engaged in research in diverse topics focussing on
//           Telecommunication, Antenna and Microwave, Microelectronics and
//           VLSI, Signal and Image processing and Computational Systems
//           Biology.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>*/
