
import React from 'react';
import eventsData from './Events/eventsData';

const EventSlider = () => {
  // Filter to select events with specific ids
  const selectedEvents = eventsData.filter(event =>
    [0, 1, 2, 6].includes(event.id)
  );

  return (
    <div className="bg-blue-950 bg-opacity-80 py-10">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6">
        {selectedEvents.map(event => (
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
             <img 
               src={event.image} 
                 alt={event.title} 
                className="object-contain w-full h-full max-h-[400px] transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-30 border-double hover:border-dashed"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
               <span className="text-white text-lg font-semibold">{event.title}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSlider;
