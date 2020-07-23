import React from "react"
import { useState } from "react"
// import { Link } from "gatsby"

// import productsLocal from "../../db/twitch-stickers.json"

const Products = props => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = async e => {
    e.preventDefault()
    let thisItemName = e.target
      .querySelector("[name=itemName]")
      .getAttribute("value")
    //const item = new FormData(e.target).get("name")
    const item = e.target.querySelector("[name=itemName]").getAttribute("value")
    const price = e.target
      .querySelector("[name=itemPrice]")
      .getAttribute("value")

    let newState = [...cartItems, { item: item, price: price }]
    setCartItems(newState)
    console.log(`Item added to cart`)
  }

  // map through all products
  const allProducts = props.products.map((item, index) => {
    return (
      <div
        style={{
          padding: "20px",
          border: "thin solid black",
          maxWidth: "400px",
          margin: "10px",
        }}
        key={index}
      >
        <form onSubmit={addToCart}>
          <img style={{ maxWidth: "300px" }} src={item.img} alt={item.name} />
          <div name="itemName" value={item.name}>
            {item.name}
          </div>
          <div name="itemPrice" value={item.price}>
            ${item.price.toFixed(2)}
          </div>
          <button>ADD TO CART</button>
        </form>
      </div>
    )
  })

  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {allProducts}
    </div>
  )
}

export default Products
