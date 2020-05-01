/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import { social } from '../assets/data/info.js'

import './layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer>
                    <div className="footer">
                        <div className="footer-inner">
                            <p>
                                Build by{' '}
                                <a href="https://twitter.com/mddanishyusuf" target="_blank" rel="noreferrer noopener">
                                    @mddanishyusuf
                                </a>
                            </p>
                            <p>
                                Build with{' '}
                                <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer noopener">
                                    Gatsby
                                </a>{' '}
                                +{' '}
                                <a
                                    href="https://github.com/mddanishyusuf/dailyhack/issues"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    GitHub Issues CMS
                                </a>
                            </p>
                            <p>
                                Automation{' '}
                                <a href="https://nocodeapi.com/" target="_blank" rel="noreferrer noopener">
                                    NoCodeAPI
                                </a>
                            </p>
                        </div>
                        <div className="footer-nav right-navbar">
                            <ul>
                                {social.map(s => (
                                    <li key={s.name}>
                                        <a href={s.link} target="_blank" rel="noreferrer noopener">
                                            <img src={s.favicon} width="20px" height="20px" alt="makers" />{' '}
                                            {/* <span>Facebook</span> */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
