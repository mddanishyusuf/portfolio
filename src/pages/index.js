import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSection from '../components/heroSection'
import AboutMe from '../components/aboutMe'
import BlogPage from '../components/blogSection'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <HeroSection />
        <AboutMe />
        <BlogPage />
    </Layout>
)

export default IndexPage
