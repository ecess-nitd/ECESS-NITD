import React from 'react'
import './TeamSection.css'
import { HeadTeamData, SecondYearTeamData } from './teamData'
import { FinalTeamData } from './teamData'
import { PrefinalTeamData } from './teamData'

import CardTeam from './CardTeam'

const TeamSection = () => {
    return (
        <div className="body-team">
            <div class="heading-team">
                <div className='headingmain'>Our Team</div>
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
                                {...profile}
                            />
                        ))}
                    </div>
                    <div className='each-year-team'>
                        {FinalTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                {...profile}
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
                                {...profile}
                            />
                        ))}
                    </div>
                </div>
                <div className='members-team'>
                    <div class='teamheading-team'>Second Year</div>
                    <div className='each-year-team'>
                        {SecondYearTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                {...profile}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection
