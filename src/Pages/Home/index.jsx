import { useState, useEffect } from "react" //useState es para crear el estado, pero practicamente siempre debe
// ir acompaniado de useEffect para ayudarnos a encapsular la respues de la API y comsumir la API
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"


function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json()) //pasamos la respues que nos da (que es una promesa) y la pasamos a json
    .then(data => setItems(data))
  },[])

    return (
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item=>(
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
      </Layout>      
    )
  }
  
  export default Home