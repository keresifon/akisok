const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/content.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")
  const blogPgTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulABlogPost {
        edges {
          node {
            slug
            category
          }
        }
      }
    }
  `)

  res.data.allContentfulABlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulABlogPost.edges.forEach(edge => {
    createPage({
      component: categoryTemplate,
      path: `/category/${edge.node.category}`,
      context: {
        category: edge.node.category,
      },
    })
  })

  paginate({
    createPage,
    items: res.data.allContentfulABlogPost.edges,
    itemsPerPage: 6,
    pathPrefix: '/blog',
    component: blogPgTemplate,
  })
}
