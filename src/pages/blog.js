import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPage from '../components/blogSection'

const IndexPage = () => (
    <Layout>
        <SEO
            title="Blog - I write about my Projects."
            description="I write about my Projects, Life experience, daily hacks - I do in my Projects & Nomad Life."
        />
        <div className="blog-page">
            <BlogPage showAll />
        </div>
    </Layout>
)

export default IndexPage
