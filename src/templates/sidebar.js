import React from "react"
import {Link, graphql , useStaticQuery} from "gatsby"
import '../utils/fontawesome'
import Sstyles from "../styles/style.module.scss"





const SideBar = () => {
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
 
    return (
        
          
            
            <div >
              <ul className={Sstyles.sidebar}>
                {data.allContentfulABlogPost.edges.map (edge => {
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
           
        
    )
}

export default SideBar;