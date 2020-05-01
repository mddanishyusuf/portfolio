import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { ExternalLink } from 'react-feather'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import '../styles/project-section.scss'

const ProjectPage = ({ showAll }) => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/(projects)/.*\\\\.md$/" } }
                    sort: { fields: frontmatter___rank }
                ) {
                    nodes {
                        html
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            path
                            title
                            excert
                            website
                            featuredImage {
                                childImageSharp {
                                    fluid(maxWidth: 500) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    let arrayList = []
    const postArray = allMarkdownRemark.nodes
    if (!showAll) {
        for (let i = 0; i < 4; i++) {
            arrayList.push(postArray[i])
        }
    } else {
        arrayList = postArray
    }

    return (
        <div
            className="project-container"
            name="projects"
            style={!showAll ? { backgroundColor: '#f7f7f7' } : { backgroundColor: '#fff' }}
        >
            <div className="content-section">
                <h2 className="my-p">My Projects</h2>
                <div className="section-heading">I build products to solve real problems of developers.</div>
                <div className="blog-cards">
                    <div className="side-projects">
                        <section className="side-project-list">
                            {arrayList.map((personal, key) => (
                                <section className="side-project" key={key}>
                                    <div style={{ height: '160px', width: '200px' }}>
                                        <Img
                                            fluid={personal.frontmatter.featuredImage.childImageSharp.fluid}
                                            imgStyle={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="about-project">
                                        <h2>{personal.frontmatter.title}</h2>
                                        <p>{personal.frontmatter.excert}</p>
                                        <a
                                            className="visit-project"
                                            href={personal.frontmatter.website}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <span>Website</span> <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </section>
                            ))}
                        </section>
                    </div>
                    {!showAll && <Link to="/projects">View all {postArray.length} projects</Link>}
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
