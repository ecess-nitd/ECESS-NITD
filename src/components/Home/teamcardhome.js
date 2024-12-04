import React from 'react';
import './teamcardhome.css';

const TeamCardHome = ({ data }) => {
    const { image, name, position, linkedin, instagram } = data;
    return (
        <div className="card-teamhome">
            <div className="img-bx-teamhome">
                <img src={image} alt="img" />
            </div>
            <div className="content-teamhome">
                <div className="detail-teamhome">
                    <h2>{name}<br /><span>{position}</span></h2>
                    <ul className="sci-teamhome">
                        <li>
                            <a href={linkedin} className="linkedin"><i className="ri-linkedin-box-line"></i></a>
                        </li>
                        <li>
                            <a href={instagram} className="instagram"><i className="ri-instagram-line"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamCardHome;
