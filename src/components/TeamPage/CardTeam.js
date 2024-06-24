import React from 'react'
import './CardTeam.css'
import 'remixicon/fonts/remixicon.css';

const CardTeam = ({ image, name, position, facebook, linkedin, instagram }) => {
    return (
        <div className="card-team">
            <div className="pic-team"><img src={image} alt=""/></div>
            <div className="team-content-team">
                <h4 className="title-team">{name}</h4>
                <span className="post-team">{position}</span>
            </div>
            <div className="social-team">
                <a href={facebook} className="facebook"><i class="ri-facebook-box-line"></i></a>
                <a href={linkedin} className="linkedin"><i class="ri-linkedin-box-line"></i></a>
                <a href={instagram} className="instagram"><i class="ri-instagram-line"></i></a>
            </div>
        </div>
    )
}

export default CardTeam
