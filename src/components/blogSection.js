import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import getSlug from 'speakingurl'

import { getReadingTime } from '../config/Functions'
import '../styles/blog-section.scss'

const BlogPage = () => {
    const { allGithubIssue } = useStaticQuery(
        graphql`
            query {
                allGithubIssue(limit: 5) {
                    nodes {
                        title
                        body
                        created_at
                        labels {
                            id
                            name
                        }
                    }
                }
            }
        `
    )

    return (
        <div className="blog-container">
            <div className="content-section">
                <h2>Blog</h2>
                <div className="section-heading">
                    I write about my Projects, Life experience, daily hacks - I do in my Projects & Nomad Life.
                </div>
                <div className="row blog-card">
                    {allGithubIssue.nodes.map((item, index) => {
                        const summary = item.body.split(/\r?\n/)[0]
                        return (
                            <>
                                <div className="metadata col-md-2">
                                    <div className="label">#{item.labels[0].name}</div>
                                </div>
                                <div className="content col-md-10">
                                    <div className="blog-post-item" key={index}>
                                        <div className="post-card">
                                            <div className="post-title">
                                                <Link to={`/${getSlug(item.title)}`}>{item.title}</Link>
                                            </div>
                                            <small className="post-date">{getReadingTime(item.body)}</small>
                                            <div className="summary">
                                                <p>{summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogPage
