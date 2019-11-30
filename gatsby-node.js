// const _ = require('lodash')
const getSlug = require('speakingurl')

// const POST_PER_PAGE = 40

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = require.resolve('./src/templates/blogPost.js')

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        posts: allGithubIssue {
                            nodes {
                                title
                                body
                                id
                                number
                                created_at
                                labels {
                                    id
                                    name
                                }
                            }
                        }
                    }
                `
            ).then(results => {
                if (results.error) {
                    reject(results.error)
                }

                results.data.posts.nodes.forEach(x => {
                    // loop over split pages
                    const slugId = `${getSlug(x.title)}-${x.number}`
                    createPage({
                        path: `/${slugId}`,
                        component: blogPost,
                        context: {
                            post_id: x.number,
                        },
                    })
                })
            })
        )
    })
}
