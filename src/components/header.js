import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import * as Scroll from 'react-scroll'
import { Location } from '@reach/router'

import '../styles/header.scss'

const LinkTo = Scroll.Link

const Header = ({ siteTitle, location }) => (
    <Location>
        {({ navigate, location }) => (
            <header>
                <div className="home-navbar">
                    <div className="text-logo">
                        <Link to="/">Mohd Danish</Link>
                    </div>
                    <div className="menu">
                        <div className="nav-item">
                            {location.pathname === '/' ? (
                                <LinkTo to="blog" spy smooth offset={50} duration={1000}>
                                    Blog
                                </LinkTo>
                            ) : (
                                <Link to="/blog">Blog</Link>
                            )}
                        </div>
                        <div className="nav-item">
                            {location.pathname === '/' ? (
                                <LinkTo to="projects" spy smooth offset={50} duration={1000}>
                                    Projects
                                </LinkTo>
                            ) : (
                                <Link to="/projects">Projects</Link>
                            )}
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
        )}
    </Location>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
