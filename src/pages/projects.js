import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/projects'

const Projects = () => (
    <Layout>
        <SEO
            title="Projects - I build project to solve real problems"
            description="List of all my projects like public-apis.xyz, nocodeapis.com, tweetjobs.dev etc"
        />
        <div className="project-page">
            <ProjectPage showAll />
        </div>
    </Layout>
)

export default Projects
