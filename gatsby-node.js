const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const getfeaturedposts = makeRequest(graphql, `
    query MyQuery {
      allStrapiFeatureds {
          edges {
            node {
              slug
              id
            }
          }
        }
      }      
      `).then(result => {
      // Create pages for each article.
      result.data.allStrapiFeatureds.edges.forEach(({ node }) => {
        createPage({
          path: `featured/${node.slug}`,
          component: path.resolve(`src/template/featuredpostpage.js`),
          context: {
            id: node.id,
          },
        })
      })
    });
  
    const getblogposts = makeRequest(graphql, `
    query MyQuery {
        allStrapiBlogposts {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      
      `).then(result => {
      // Create pages for each user.
      result.data. allStrapiBlogposts.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve(`src/template/blogpage.js`),
          context: {
            id: node.id,
          },
        })
      })
    });
  
    // Queries for articles and authors nodes to use in creating pages.
    return Promise.all([
      getfeaturedposts,
      getblogposts,
    ])
  };