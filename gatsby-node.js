const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/content.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")
  const catNameTemplate = path.resolve("./src/templates/header.js")
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

  
}
