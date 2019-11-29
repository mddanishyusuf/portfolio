import React from 'react'
import PropTypes from 'prop-types'

import heroImage from '../images/landing-image.png'
import '../styles/hero-section.scss'

const HeroSection = () => (
    <div className="hero-container" id="hero">
        <div className="content">
            <div className="about-me">
                <h2>Hi, I'm Danish</h2>
                <div className="headline">
                    Full Stack Developer, Entrepreneur &<br /> Digital Nomad
                </div>
            </div>
        </div>
        <div className="background">
            <div className="image" style={{ backgroundImage: `url(${heroImage})` }} />
        </div>
    </div>
)

export default HeroSection
