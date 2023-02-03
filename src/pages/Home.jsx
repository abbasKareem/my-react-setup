import React, { useState } from "react"
import { Input } from "react-daisyui"

const Home = () => {
  const [name, setName] = useState("")
  return (
    <div className="home">
      <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
      <h2>Wellcome</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptate commodi quaerat, possimus, omnis quo reprehenderit beatae tempore quod, quidem dolorem maiores sit eaque! Eaque, nemo! Enim non odit ab.</p>
    </div>
  )
}

export default Home
