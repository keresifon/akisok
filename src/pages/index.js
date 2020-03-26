import React from "react"

import Layout from "../component/layout"
import Top from "../component/top"
import Mid from "../component/mid"
import Third from "../component/third"


const HomePage = () => {
    
  return (
    <div>
     <Layout>
      <Top />
      <Mid />
      <Third />
     </Layout>

    </div>
  )
}

export default HomePage