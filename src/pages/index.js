import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText="Hello!"/>
    <Link to="/contact/">Contact</Link>
    <p>What are you doing</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
