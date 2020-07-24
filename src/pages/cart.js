import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cart = ({ cartItems }) => {
  if (!cartItems) return <h1>NO ITEMS IN CART</h1>

  return (
    <>
      <SEO title="shopping cart" />
      <h1>Shopping Cart Page</h1>
    </>
  )
}

export default Cart
