import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Vidone = () => {
    const data = useStaticQuery(graphql`
    query {
  allContentfulAVideo {
    nodes {
      title
      embeddedVid {
        childMarkdownRemark
        {
          html
        }
      }
    }
  }
}
  `)

  return (
    <div  >
      <ul dangerouslySetInnerHTML = {{__html:data.allContentfulAVideo.nodes[0].embeddedVid.childMarkdownRemark.html}} />
      <h1>{data.allContentfulAVideo.nodes[0].title}</h1>
    </div>
      
   
  )
}

export default Vidone
