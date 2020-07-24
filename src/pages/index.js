import React from "react"
import { useEffect, useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"
import Cart from "./cart"

const IndexPage = () => {
  const [products, setProducts] = useState([])

  // SHOPPING CART
  const [cartItems, setCartItems] = useState([])
  const addToCart = async e => {
    e.preventDefault()
    const item = e.target.querySelector("[name=itemName]").getAttribute("value")
    const price = e.target
      .querySelector("[name=itemPrice]")
      .getAttribute("value")

    let newState = [...cartItems, { item: item, price: price }]
    setCartItems(newState)
    console.log(`Item added to cart`)

    // navigate("/cart/", { state: { cartItems } })
  }

  // get products from db
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, [])

  return (
    // <Layout cartItems={cartItems}>
    <>
      <SEO title="Twitch Sticker Store" />
      <Products products={products} addToCart={addToCart} />
    </>
    // </Layout>
  )
}

export default IndexPage
