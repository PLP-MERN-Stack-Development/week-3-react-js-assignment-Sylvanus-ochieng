// src/pages/Home.jsx
import React from "react"
import Card from "../components/Card"
import Button from "../components/Button"

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">🏠 Home Page</h2>
      <Card title="Welcome">
        <p>This is the home page of your React app!</p>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </Card>
    </div>
  )
}

export default Home
