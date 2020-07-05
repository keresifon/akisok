import React from "react"
import {Link, graphql , useStaticQuery} from "gatsby"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight} from "@fortawesome/free-solid-svg-icons"





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
 let nfiltered = edges.filter(edge => edge.node.category !== props.data.contentfulABlogPost.category)
    return (
        
          
           <div> 
             <div className="widget-title"><h4>Other content in { props.data.contentfulABlogPost.category}</h4></div>
            <div className = "widget_recent_entries">
                
              <ul >
                {
                filtered.map (edge => {
                  return (
                    <li key={edge.node.title}>
                      <Link  to={`${edge.node.slug}`}>
                      <FontAwesomeIcon
                  icon={ faCaretRight} 
                  style={{ color: "#dddddd" }}
                />  {edge.node.title}
                      </Link>
                      
                    </li>
                  )
                })}
            
            </ul>
            
            </div>
            <div className="widget-title"><h4>Other posts </h4></div>
            <div className = "widget_other_entries">
                
            
            <ul >
                {
                nfiltered.map (edge => {
                  return (
                    <li key={edge.node.title}>
                      <Link  to={`${edge.node.slug}`}>
                      <FontAwesomeIcon
                  icon={ faCaretRight} 
                  style={{ color: "#dddddd" }}
                />  {edge.node.title}</Link> - <span><Link to={`/category/${edge.node.category}`}>{edge.node.category}</Link></span>
                      
                      
                    </li>
                  )
                })}
            
            </ul>
            </div>
            </div >
                
           
           
        
    )
}

export default SideBar;