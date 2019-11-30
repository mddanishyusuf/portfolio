import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import * as Scroll from 'react-scroll'

import '../styles/header.scss'

const LinkTo = Scroll.Link

const Header = ({ siteTitle }) => (
    <header>
        <div className="home-navbar">
            <div className="text-logo">
                <Link to="/">Mohd Danish</Link>
            </div>
            <div className="menu">
                <div className="nav-item">
                    <LinkTo to="blog" spy smooth offset={50} duration={1000}>
                        Blog
                    </LinkTo>
                </div>
                <div className="nav-item">
                    <LinkTo to="projects" spy smooth offset={50} duration={1000}>
                        Projects
                    </LinkTo>
                </div>
                {/* <div className="nav-item">
                    <a href="https://www.linkedin.com/in/mddanishyusuf/" target="_blank">
                        Resume
                    </a>
                </div> */}
                <div className="nav-item">
                    <LinkTo to="getInTouch" spy smooth offset={50} duration={1000}>
                        Contact
                    </LinkTo>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
