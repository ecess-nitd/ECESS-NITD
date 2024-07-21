import React, { useState } from "react";
import "./carousel.css";

const ImageAccordion = ({ items = [] }) => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section className="image-accordion">
      {items.map((item, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={index}
            className={`image-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
            onMouseEnter={() => handleToggle(index)}
          >
            <img src={item.image} alt={item.header} />
          </article>
        );
      })}
    </section>
  );
};

export default ImageAccordion;

            // <div className="content">
            //   {/* <span className="material-symbols-outlined">photo_camera</span> */}
            //   <div>
            //     <h2>{item.header}</h2>
            //     <p>{item.text}</p>
            //   </div>
            // </div>