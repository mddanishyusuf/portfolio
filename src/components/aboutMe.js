import React from 'react'
import PropTypes from 'prop-types'

import pi from '../images/profile-image.jpg'
import '../styles/about-me.scss'

const AboutMe = () => (
    <div className="about-container">
        <div className="content-section">
            <h2>About Me</h2>
            <div className="row">
                <div className="metadata col-md-2">
                    <div className="profile-image" style={{ backgroundImage: `url(${pi})` }} />
                </div>
                <div className="content col-md-10">
                    I'm 26y old Front-end Engineer but I can do anything related with technology. 🚀 I can make MVP in
                    days, 🧙‍♀️ Magic with NodeJS, 🤖 Automate the boring stuffs, 👨‍💻 Hack the third party APIs for any use
                    case, 🛠️ Play with No-SQl Database and I always get a solution of the problem. I have completed my
                    Master in Computer Application From Aligarh Muslim University, INDIA. I'm foodie & love to cook 🍳.
                </div>
            </div>
        </div>
    </div>
)

export default AboutMe
