module.exports = {
    siteMetadata: {
        title: `Mohd Danish`,
        description: `Article about coding, foods, tricks and new things I learn daily. So, It is my daily knowledge base book so called a personal blog`,
        author: `Mohd Danish <mddanishyusuf@gmail.com>`,
        siteUrl: `https://mohddanish.me`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mddanishyusuf-portfolio`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-github-issue`,
            options: {
                owner: 'mddanishyusuf',
                repo: 'mohddanish',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sitemap`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
