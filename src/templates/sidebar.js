import React from "react"
//import Layout from "../component/layout"
import {Link, graphql , useStaticQuery} from "gatsby"
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//import cStyles from "../styles/content.module.scss"
import '../utils/fontawesome'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import SideBar from "./sidebar"
//import Img from "gatsby-image"
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
                    <li>
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