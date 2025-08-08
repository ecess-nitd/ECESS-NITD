import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from './eventsData';
import './EventDetails.css';

const EventDetail = () => {
    const { id } = useParams();
    const event = eventsData.find(event => event.title.toLowerCase().replace(/\s+/g, '-') === id.toLowerCase());

    if (!event) return <div>Event not found</div>;

    return (
        <div className='main-event-section'>
            <div className='event-details-section'>
                <div className="header-event">
                    <h1 className="sticky-event">{event.title}</h1>
                </div>
                <div className="main-content-event">
                    <div className="event-image-event">
                        <img src={event.image} alt="Event" height={400} width={400}/>
                    </div>
                    <div className="event-details-event">
                        <p className="description-event">
                            {event.modaldescription}
                        </p>
                        <p className="event-info-event">
                            <strong>Date:</strong>{event.date}<br />
                            <strong>Time:</strong>{event.time}<br />
                            <strong>Venue:</strong>{event.venue}
                        </p>
                    </div>
                </div>
                <div className="footer-event">
                    <button class="darksoul-hover-fill-button2" onClick={() => window.history.back()} type="button">
                        <div class="color-fill-2"></div>
                        <p>Go Back</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
