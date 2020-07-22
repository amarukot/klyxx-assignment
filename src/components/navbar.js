import { Link } from "gatsby"
// import PropTypes from "prop-types"
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
            display: "flex",
          }}
        >
          <Link to="/">
            <h1 style={{ margin: 0, color: "white", padding: "20px" }}>Home</h1>
          </Link>
          <Link to="/cart/">
            <h1 style={{ margin: 0, color: "white", padding: "20px" }}>Cart</h1>
          </Link>
          <Link to="/checkout">
            <h1 style={{ margin: 0, color: "white", padding: "20px" }}>
              Checkout
            </h1>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar