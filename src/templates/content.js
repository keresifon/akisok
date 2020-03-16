import React from "react"
import Layout from "../component/layout"
import {graphql} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'




export const query = graphql`
query ($slug: String!)  {
  contentfulABlogPost( slug: { eq: $slug }) {
      
        title
        date (formatString:"YYYY-MM-DD")
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
            <h1>{props.data.contentfulABlogPost.title}</h1>
            <p>{props.data.contentfulABlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulABlogPost.body.json, options)}
            
        </Layout>
    )
}

export default Content;