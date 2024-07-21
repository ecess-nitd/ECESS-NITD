//cardevent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './cardevent.css'; 

const CardEvent = ({ image, title, description }) => {
    const urlTitle = title.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="card-event" >
            <div className="card-event-image-container">
                <img src={image} alt={title} className="card-event-image" height={200} width={200}/>
            </div>
            <div className="card-event-details">
                <h2 className="card-event-title">{title}</h2>
                <p className="card-event-description">{description}</p>
            </div>
            <div className="card-event-button">
                <Link to={`/events/${urlTitle}`} className="card-event-link">READ MORE</Link>
            </div>
        </div>
    );
};

export default CardEvent;