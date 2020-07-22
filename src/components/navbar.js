import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = () => {
  return (
    <>
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>NavBar</h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
