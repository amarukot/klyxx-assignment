import React from "react"
import SEO from "../components/seo"

const Cart = ({ location }) => {
  // if (!cartItems) return <h1>NO ITEMS IN CART</h1>

  return (
    <>
      <SEO title="shopping cart" />
      <h1>Shopping Cart</h1>
      <ul>
        <li>Item - Qty - Price</li>
        <li>Item - Qty - Price</li>
        <li>Item - Qty - Price</li>
      </ul>
      <div>TOTAL: $0000</div>
      <button>CHECKOUT</button>
    </>
  )
}

export default Cart
