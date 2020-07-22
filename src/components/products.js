import React from "react"
import { Link } from "gatsby"

import productsLocal from "../../db/twitch-stickers.json"

const Products = props => {
  if (props.length === 0) {
    return <h1>Loading</h1>
  }
  console.log(props.products)

  const allProducts = productsLocal.map((item, index) => {
    return (
      <div
        style={{
          padding: "20px",
          border: "thin solid black",
          maxWidth: "400px",
          margin: "10px",
        }}
        // key={{ index }}
      >
        <img style={{ maxWidth: "300px" }} src={item.img} />
        <div>{item.name}</div>
        <div>${item.price}</div>
        <button>ADD TO CART</button>
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
      }}
    >
      {allProducts}
    </div>
  )
}

export default Products
