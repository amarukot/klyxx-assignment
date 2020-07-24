import React, { useState } from "react"
import { Link, navigate } from "gatsby"

const Products = ({ products, addToCart }) => {
  // map through all products
  const allProducts = products.map((item, index) => {
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
