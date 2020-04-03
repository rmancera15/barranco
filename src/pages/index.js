import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/global/Background"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Barranco"
      styleClass="default-background"
    />
    <Info />
 
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "fondo.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

  }
`

export default IndexPage
