import React from 'react';
import CardEvent from './cardevent';
import './EventSection.css';

import eventsData from './eventsData';

const EventSection = () => {

    return (
        <div className="event-section">
            <div className="heading-event">
                <div className="event-heading-text">Our Events</div>
                <div className="grey-line-event"></div>
                <div className="coloured-line-event"></div>
            </div>
            <div className='event-text'>
                The Electronics and Communication Engineering Student's Society (ECESS) at NIT Durgapur organises an impressive array of events
                featuring some of the most engaging technical workshops and seminars on campus, designed to inspire and educate young students.
            </div>
            <div className="card-container-event">
                {eventsData.map((event) => (
                    <CardEvent
                        key={event.id}
                        id={event.id}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventSection;
