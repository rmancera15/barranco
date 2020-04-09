import React from "react"
import { graphql } from "gatsby"



import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/global/Background"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title=""
      styleClass="about-background"
    />
    <Info />
    <socialFollow/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "barrPatio.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
