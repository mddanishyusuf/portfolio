import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import getSlug from 'speakingurl'

import { getReadingTime, onlyPublished } from '../config/Functions'
import '../styles/blog-section.scss'

const BlogPage = ({ showAll }) => {
    const { allGithubIssue } = useStaticQuery(
        graphql`
            query {
                allGithubIssue {
                    nodes {
                        title
                        body
                        created_at
                        number
                        labels {
                            id
                            name
                        }
                    }
                }
            }
        `
    )

    let arrayList = []
    const postArray = onlyPublished(allGithubIssue.nodes)

    if (!showAll) {
        for (let i = 0; i < 5; i++) {
            arrayList.push(postArray[i])
        }
    } else {
        arrayList = postArray
    }

    return (
        <div className="blog-container" name="blog">
            <div className="content-section">
                <h2>Blog</h2>
                <div className="section-heading">
                    I write about my Startups, Projects, Life experience, daily hacks - I do in my Projects.
                </div>
                <div className="blog-cards">
                    {arrayList.map((item, index) => {
                        const summary = item.body.split(/\r?\n/)[0]
                        return (
                            <div className="row" key={index}>
                                <div className="metadata col-md-2">
                                    <div className="label">#{item.labels[0].name}</div>
                                </div>
                                <div className="content col-md-10">
                                    <div className="blog-post-item">
                                        <div className="post-card">
                                            <div className="post-title">
                                                <Link to={`/${getSlug(item.title)}-${item.number}`}>{item.title}</Link>
                                            </div>
                                            <small className="reading-time">{getReadingTime(item.body)}</small>
                                            <div className="summary">
                                                <p>{summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {!showAll && <Link to="/blog">View all {postArray.length} articles</Link>}
                </div>
            </div>
        </div>
    )
}

export default BlogPage
