import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSection from '../components/heroSection'
import AboutMe from '../components/aboutMe'
import BlogPage from '../components/blogSection'
import ProjectPage from '../components/projects'
import GetInTouch from '../components/getInTouch'
import featuredImage from '../images/featured-image.png'

const IndexPage = () => (
    <Layout>
        <SEO
            title="Mohd Danish — Full Stack Developer, Entrepreneur & Digital Nomad"
            description="I'm Mohd Danish and I'm 26y old Full Stack Developer, Entrepreneur & Digital Nomad but I can do anything related with technology."
            featuredImage={featuredImage}
        />
        <HeroSection />
        <AboutMe />
        <BlogPage />
        <ProjectPage />
        <GetInTouch />
    </Layout>
)

export default IndexPage
