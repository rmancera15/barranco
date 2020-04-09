import React from 'react';

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Home/Menu"

const menuPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`]} />
      <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
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

export default menuPage;