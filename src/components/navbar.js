import { Link } from "gatsby"
import React from "react"

const Navbar = ({ cartItems }) => {
  console.log(`${cartItems} in navbar`)
  return (
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <h1
            style={{
              margin: 0,
              color: "white",
              padding: "20px",
            }}
          >
            Home
          </h1>
        </Link>
        <Link to="/cart/" cartItems={cartItems}>
          <h1
            style={{
              margin: 0,
              color: "white",
              padding: "20px",
            }}
          >
            Cart
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
