import React from "react"

import Layout from "../component/layout"
import Top from "../component/top"
import Mid from "../component/mid"
import Last from "../component/last"
import BaseSlider from "../component/baseSlider"
//import Third from "../component/third"


const HomePage = (props) => {
    
  return (
    <div>
     <Layout>
      <Top />
      <Mid />
      <Last />
      <BaseSlider/>
     </Layout>

    </div>
  )
}

export default HomePage