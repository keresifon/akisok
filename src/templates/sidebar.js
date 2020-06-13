import React from "react"
import {Link, graphql , useStaticQuery} from "gatsby"
import '../utils/fontawesome'






const SideBar = (props) => {
  const data = useStaticQuery(graphql`
  query   {
    allContentfulABlogPost(sort: { fields: date, order: DESC }) {
        edges{
          node {
            
            title
            category
            slug
          }
        }
          
          
          
        }
      
    }
    `)
 const { edges } = data.allContentfulABlogPost;
 let filtered = edges.filter(edge => edge.node.category === props.data.contentfulABlogPost.category)
    return (
        
          
           <div> 
             <div>{ props.data.contentfulABlogPost.category}</div>
            <div >
                
              <ul >
                {
                filtered.map (edge => {
                  return (
                    <li key={edge.node.title}>
                      <Link  to={`${edge.node.slug}`}>
                      <p>{edge.node.title}</p>
                      </Link>
                      
                    </li>
                  )
                })}
            
            </ul>
            
            </div>
            </div >
                
           
           
        
    )
}

export default SideBar;