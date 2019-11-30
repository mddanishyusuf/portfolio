import React from 'react'
import { graphql, Link } from 'gatsby'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { User, Tag, Calendar, Share2 } from 'react-feather'
import Markdown from 'markdown-to-jsx'
import { docco } from '../config/docco'

import { getReadingTime } from '../config/Functions'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/blog-post.scss'

const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
        {children}
        <style jsx>
            {`
                a {
                    color: #484848;
                    font-weight: 700;
                }
            `}
        </style>
    </a>
)

const CodeBlock = ({ children }) => <SyntaxHighlighter style={docco}>{children.props.children}</SyntaxHighlighter>

function BlogPostPage({ data, pageContext }) {
    const postObj = data.blogPost.nodes[0]
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <SEO title={postObj.title} description={postObj.body.split('\n')[0]} />
            <div className="reader-content">
                <div className="post-header">
                    <div className="post-header-inner">
                        <div className="title">{postObj.title}</div>
                        <div className="post-published">{getReadingTime(postObj.body)}</div>
                    </div>
                </div>
                <div className="post-body">
                    <Markdown
                        className="body-markdown"
                        options={{
                            overrides: {
                                a: {
                                    component: HyperLink,
                                },
                                pre: {
                                    component: CodeBlock,
                                },
                            },
                        }}
                    >
                        {postObj.body}
                    </Markdown>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPostPage

export const pageQuery = graphql`
    query BlogPostQuery($post_id: Int) {
        blogPost: allGithubIssue(filter: { number: { eq: $post_id } }) {
            nodes {
                id
                number
                body
                html_url
                title
                updated_at
                url
                created_at
            }
        }
    }
`
