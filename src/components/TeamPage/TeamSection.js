import React from 'react'
import './TeamSection.css'
import { HeadTeamData } from './teamData'
import { FinalTeamData } from './teamData'
import { PrefinalTeamData } from './teamData'

import CardTeam from './CardTeam'

const TeamSection = () => {
    return (
        <div className="body-team">
            <div class="heading-team">
                <h1>Our Team</h1>
                <div class="grey-line-team"></div>
                <div class="coloured-line-team"></div>
            </div>
            <div className='container-team'>
                <div className='members-team'>
                    <div class='teamheading-team'>Final Year</div>
                    <div className='head-team'>
                        {HeadTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                position={profile.position}
                                facebook={profile.facebook}
                                linkedin={profile.linkedin}
                                instagram={profile.instagram}
                            />
                        ))}
                    </div>
                    <div className='each-year-team'>
                        {FinalTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                position={profile.position}
                                facebook={profile.facebook}
                                linkedin={profile.linkedin}
                                instagram={profile.instagram}
                            />
                        ))}
                    </div>
                </div>
                <div className='members-team'>
                    <div class='teamheading-team'>Pre Final Year</div>
                    <div className='each-year-team'>
                        {PrefinalTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                position={profile.position}
                                facebook={profile.facebook}
                                linkedin={profile.linkedin}
                                instagram={profile.instagram}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection
