import React from "react"

import {graphql} from "gatsby"

import cStyles from "../styles/content.module.scss"






export const query = graphql`
query   {
  contentfulABlogPost( category: { eq: "Technology" }) {
      
        title
        date (formatString:"YYYY-MM-DD")
        category
       
        
      }
    
  }
  `
const CatHeader = (props) => {
  

  
    return (
        
          <div className={cStyles.wrapper}>
            <div className={cStyles.main}>
            
            <h1>{props.data.contentfulABlogPost.category}</h1>
            
          
            </div>  
            
            </div>
        
    )
}

export default CatHeader;