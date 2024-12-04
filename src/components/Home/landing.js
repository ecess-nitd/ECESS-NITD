import React, { useState } from "react";
import "./landing.css";
import Slider from 'react-slick';
import TeamCardHome from './teamcardhome'
import { TeamDataHome } from './teamDataHome';
import eventDataHome from './eventDataHome';
import { Link } from "react-router-dom";

const landing = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="heading-1">Electronics and Communication</div>
                <div className="heading-2">Engineering Students' Society</div>
                <div class="arrow-container animated fadeInDown">
                    <a href="#arrow-next" class="arrow-2">
                        <i class="fa fa-angle-down"></i>
                    </a>
                </div>
            </div>
            <div id="arrow-next" className="about-us-section">
                <h1 className="section-title">
                    <span className="title1">About</span> <span className="title2">Us</span>
                </h1>
                <div className="content">
                    <div className="column">
                        <h2>Who are <span>We?</span></h2>
                        <p>
                            We are a non-profit society led by the students of the Department of Electronics & 
                            Communication Engineering, NIT Durgapur. This Society is formed to make the students 
                            develop professional and technical skills to meet the growing industrial 
                            challenges. Our mission at ECESS is to foster a vibrant community of ECE students at NIT Durgapur, providing them with opportunities to 
                            enhance their professional and technical skills.  We aim to bridge the gap between academia 
                            and industry, equipping students with the knowledge necessary to excel in this 
                            field.
                        </p>
                    </div>
                    <div className="column">
                        <h2>What are <span>Our Objectives?</span></h2>
                        <ul>
                        <li>Organize workshops, seminars, and technical talks to introduce students to cutting-edge technologies and industry best practices.</li>
                        <li>Create platforms for students to connect with peers, alumni, and industry experts, expanding their professional network.</li>
                        <li>Establish a robust alumni network to foster mentorship, networking, and lifelong connections for current students.</li>
                        <li>Provide mentorship and support for students undertaking projects and research initiatives.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="event-home-section">
                <h1 className="section-title-team">
                    <span className="title1">Featured</span> <span className="title2">Events</span>
                </h1>
                <div class="gallery">
                    {eventDataHome.map((event, index) => (
                        <div key={index} class="card-event-home">
                            <figure class="card-image">
                                <img className="event-home-image" src={event.image}/>
                            </figure>
                            <div class="event-card-header">
                                <p>{event.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="container">
                    <Link to='/events' className="button type--A">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <span class="button__text">Know More</span>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </Link>
                </div>
            </div>
            <div className="team-home-section">
                <h1 className="section-title-team">
                    <span className="title1">Post</span> <span className="title2">Bearers</span>
                </h1>
                <Slider className="sliderclass" {...settings}>
                    {TeamDataHome.map((member, index) => (
                        <TeamCardHome key={index} data={member} />
                    ))}
                </Slider>

                
                <div class="container">
                    <Link to='/team' className="button type--A">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <span class="button__text">Know Our Team</span>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default landing;