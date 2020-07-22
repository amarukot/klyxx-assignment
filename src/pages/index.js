import React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Products from "../components/products"

const IndexPage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, [])

  console.log(products)
  return (
    <Layout>
      <SEO title="Twitch Sticker Store" />
      <Products products={products} />
    </Layout>
  )
}

export default IndexPage
