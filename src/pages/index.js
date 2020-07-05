import React from "react"

import Layout from "../component/layout"
import Top from "../component/top"
import Mid from "../component/mid"
import Last from "../component/last"
import Loadable from "react-loadable"


const HomePage = props => {
  const InfiniteCarousel = Loadable({
    loader: () => import("../component/baseSlider"),
    loading() {
      return <div>Loading...</div>
    },
  })
  return (
    <div>
      <Layout>
        <Top />
        <Mid />
        <Last />
        <InfiniteCarousel />
      </Layout>
    </div>
  )
}

export default HomePage
