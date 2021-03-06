import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/global/Background"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Image from "../images/fondo.jpeg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title=""
      styleClass="default-background"
    />
      <Menu items={data.menu} />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "fondo.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulMenuItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(height: 50, width: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
