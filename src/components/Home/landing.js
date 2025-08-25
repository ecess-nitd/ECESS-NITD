import React, { useEffect, useState } from "react";
import "./landing.css";
import Slider from 'react-slick';
import TeamCardHome from './teamcardhome'
import { HeadTeamData, FinalTeamData } from '../TeamPage/teamData';
import { Link } from "react-router-dom";
import eventsData from '../Events/eventsData';

const Landing = () => {
    const TeamDataHome = [...HeadTeamData, ...FinalTeamData]; // Show first 7 from final year
    
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
        [0, 1, 3, 4].includes(event.id)
    );

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
      
    const slides = [
        "https://nitdgp.ac.in/uploads/0507284ec43c705a861174910f4d6d17.JPG",
        "https://i.imgur.com/7jLBiUX.jpeg",
        "https://i.imgur.com/i8iclAE.jpeg",
    ];
      
    const totalSlides = slides.length;

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
        setIsPaused(true);
        // Resume auto-scroll after 3 seconds of manual interaction
        setTimeout(() => setIsPaused(false), 3000);
    };

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        goToSlide(prevIndex);
    };
      
    useEffect(() => {
        if (isPaused) return; // Don't auto-scroll when paused
        
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000); // Auto-scroll every 4 seconds
      
        return () => clearInterval(interval);
    }, [totalSlides, isPaused]);

    // Preload next slide images for smoother transitions
    useEffect(() => {
        const preloadNextSlides = () => {
            const nextIndex = (currentSlide + 1) % totalSlides;
            const nextSlide = slides[nextIndex];
            if (nextSlide) {
                const img = new Image();
                img.src = nextSlide;
            }
        };

        preloadNextSlides();
    }, [currentSlide, totalSlides, slides]);

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
                            loading={index === 0 ? "eager" : "lazy"} // First slide loads immediately
                            onError={(e) => {
                                console.warn(`Failed to load slide ${index + 1}:`, slide);
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                ))}

                <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 pb-5 z-20">
                    {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                            ? 'bg-brand shadow-lg shadow-brand/50 scale-125' 
                            : 'bg-white/50 hover:bg-white/70 backdrop-blur-sm'
                        }`}
                    />
                    ))}
                </div>
                
                <div className="absolute left-8 right-8 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                    <button
                        onClick={prevSlide}
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-brand/30 hover:border-brand/50 hover:scale-110"
                    >
                        <span className="text-xl transition-transform duration-300 group-hover:-translate-x-0.5">❮</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-brand/30 hover:border-brand/50 hover:scale-110"
                    >
                        <span className="text-xl transition-transform duration-300 group-hover:translate-x-0.5">❯</span>
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
                {/* <div className=" "> */}
                    <div className="bg-gradient-to-b from-background/90 to-background/70 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
                        {selectedEvents.map(event => (
                        <div key={event.id} className="group relative rounded-xl shadow-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand/20">
                            <div className="aspect-square overflow-hidden">
                                <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    onError={(e) => {
                                        console.warn(`Failed to load event image: ${event.title}`);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white text-lg font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {event.title}
                                    </h3>
                                    <div className="w-12 h-0.5 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                {/* </div> */}
                <div className="container mx-auto px-4">
                    <Link to="/events" className="block">
                        <div className="flex justify-center mt-8">
                            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand/20 to-brand/10 backdrop-blur-md border border-brand/30 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/25 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="text-brand">Our</span>
                                    <span className="text-white">Events</span>
                                    <span className="text-brand transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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
                <div className="container mx-auto px-4">
                    <Link to="/team" className="block">
                        <div className="flex justify-center mt-8">
                            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand/20 to-brand/10 backdrop-blur-md border border-brand/30 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/25 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="text-brand">Meet</span>
                                    <span className="text-white">Our</span>
                                    <span className="text-brand">Team</span>
                                    <span className="text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;
