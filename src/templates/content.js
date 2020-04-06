import React from "react"
import Layout from "../component/layout"
import {graphql} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import cStyles from "../styles/content.module.scss"
import '../utils/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import Img from "gatsby-image"




export const query = graphql`
query ($slug: String!)  {
  contentfulABlogPost( slug: { eq: $slug }) {
      
        title
        date (formatString:"YYYY-MM-DD")
        category
        featuredImage {
              fluid {
              src
            }
        }
        body {
          json
        }
      }
    
  }
  `
const Content = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block":(node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return<img alt={alt} src={url}/>
      }
    }

  }
    return (
        <Layout>
          <div className={cStyles.wrapper}>
            <div className={cStyles.main}>
            <img className={cStyles.image} src={props.data.contentfulABlogPost.featuredImage.fluid.src} alt={props.data.contentfulABlogPost.featuredImage.title}/>
            <h1>{props.data.contentfulABlogPost.title}</h1>
            <p>{props.data.contentfulABlogPost.date}&nbsp;&nbsp;<FontAwesomeIcon
                         icon={"folder-open"}
                          style={{ color: "#000" }}
                        />{" "}{props.data.contentfulABlogPost.category}</p>
            {documentToReactComponents(props.data.contentfulABlogPost.body.json, options)}
          
            </div>  
            <div className={cStyles.sidebar}>
              Side
            </div>
            </div>
        </Layout>
    )
}

export default Content;