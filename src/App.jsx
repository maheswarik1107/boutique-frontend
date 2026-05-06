import { useState, useEffect } from 'react'
import './App.css'

function App() {
  console.log("API URL:", import.meta.env.VITE_API_URL);

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data)
        setProducts(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>Products from Backend</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((item, index) => (
          <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p><strong>Product:</strong> {item.name}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App