import React from "react"
// import { Link } from "gatsby"

// import productsLocal from "../../db/twitch-stickers.json"

const Products = props => {
  const addToCart = e => {
    console.log("Item added to cart" + e.target)
  }

  // map through available products
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
        <img style={{ maxWidth: "300px" }} src={item.img} alt={item.name} />
        <div>{item.name}</div>
        <div>${item.price.toFixed(2)}</div>
        <button onClick={addToCart}>ADD TO CART</button>
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
