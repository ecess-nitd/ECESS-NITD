import React, { useEffect, useState } from "react";
import "./landing.css";
import Slider from 'react-slick';
import TeamCardHome from './teamcardhome'
import { TeamDataHome } from './teamDataHome';
import { Link } from "react-router-dom";
import eventsData from '../Events/eventsData';

const Landing = () => {
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

    const selectedEvents = eventsData.filter(event =>
        [0, 1, 2, 6].includes(event.id)
    );

    const [currentSlide, setCurrentSlide] = useState(0);
      
    const slides = [
        "https://nitdgp.ac.in/uploads/0507284ec43c705a861174910f4d6d17.JPG",
        "https://i.imgur.com/7jLBiUX.jpeg",
        "https://i.imgur.com/i8iclAE.jpeg",
    ];
      
    const totalSlides = slides.length;
      
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3500); // Auto-scroll every 3 seconds
      
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="landing-page">
            <div className="carousel relative w-full h-[100vh] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item absolute w-full h-[100vh] transition-opacity duration-1000 ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-1 pb-5 z-20">
                    {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-6 h-1 transition-all duration-300 cursor-pointer ${
                        currentSlide === index ? 'bg-black' : 'bg-gray-400'
                        }`}
                    />
                    ))}
                </div>
                
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                    <button
                        onClick={() =>
                            setCurrentSlide((prevSlide) =>
                                prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
                        )}
                        className="text-white text-3xl hover:text-gray-200 pl-10 z-10"
                    >
                        ❮
                    </button>
                    <button
                        onClick={() =>
                            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
                        }
                        className="text-white text-3xl hover:text-gray-200 pr-10"
                    >
                        ❯
                    </button>
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
                <div className="bg-blue-950 bg-opacity-80 py-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
                        {selectedEvents.map(event => (
                        <div className="relative rounded-lg shadow-lg overflow-hidden">
                            <img 
                            src={event.image} 
                                alt={event.title} 
                                className="object-contain w-full h-full max-h-[400px] transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-30 border-double hover:border-dashed"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-80 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">{event.title}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div class="container">
                    <Link to="/events" style={{ textDecoration: 'none' }}>
                        <div className="d-flex justify-content-center mt-n1">
                            <button
                            className="btn btn-white text-center d-flex align-items-center fs-4 px-4 py-2 rounded-pill border-0 shadow-none"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
                                borderRadius: '50px', // Curved edges
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                backdropFilter: 'blur(10px)', // Adds a blur effect for a frosted glass look
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            >
                            <span style={{ color: '#00BCD4', fontWeight: '600', fontSize: '20px' }}>Our</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '20px', marginLeft: '0.5px' }}>Events</span>
                            <span style={{ color: '#00BCD4', marginLeft: '1px' }}>→</span>
                            </button>
                        </div>
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
                    <Link to="/team" style={{ textDecoration: 'none' }}>
                        <div className="d-flex justify-content-center mt-n1">
                            <button
                            className="btn btn-white text-center d-flex align-items-center fs-4 px-4 py-2 rounded-pill border-0 shadow-none"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
                                borderRadius: '50px', // Curved edges
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                backdropFilter: 'blur(10px)', // Adds a blur effect for a frosted glass look
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            >
                            <span style={{ color: '#00BCD4', fontWeight: '600', fontSize: '20px' }}>Meet</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '20px', marginLeft: '0.5px' }}>Our</span>
                            <span style={{ color: '#00BCD4', fontWeight: '600', fontSize: '20px', marginLeft: '0.5px' }}>Team</span>
                            <span style={{ color: '#FFFFFF', fontSize: '20px', marginLeft: '1px' }}>→</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;
