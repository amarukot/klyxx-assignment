/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useState } from "react"

import Navbar from "./navbar"
import "./layout.css"

const Layout = props => {
  const [test, setTest] = useState(["this is a test"])
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{props.children}</main>

        <footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          © {new Date().getFullYear()} -{` `}
          <a href="https://aldo-marukot.netlify.app">Aldo Marukot</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
