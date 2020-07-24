import React from "react"
import { useEffect, useState } from "react"

import SEO from "../components/seo"
import Products from "../components/products"

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
    console.log(`${item} added to cart`)
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
    <>
      <SEO title="Twitch Sticker Store" />
      <Products products={products} addToCart={addToCart} />
    </>
  )
}

export default IndexPage
