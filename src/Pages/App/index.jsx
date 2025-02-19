import { useRoutes, BrowserRouter } from 'react-router-dom' // esto es lo de las rutas
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/my-account', element: <MyAccount/>},
    {path:'/my-order', element: <MyOrder/>},
    {path:'/my-orders', element: <MyOrders/>},
    {path:'/sign-in', element: <SignIn/>},
    {path:'/*', element: <NotFound/>}, // con el * decimos "cualquier otra ruta que no este especificada aqui"
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
