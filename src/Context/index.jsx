// AQUI VAMOS A CREAR TODO EL CONTEXTO GLOBAL DE APLICACION, DE AQUI SALDRA LA INFORMACION A TODAS PARTES
// este sera el banco de informacion global
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

// con este provider vamos a "proveer" toda la informacion a los demas 
export const ShoppingCartProvider = ({children}) => {
    // shopping cart - increment quantity
    const [count, setCount] = useState(0)

    // Product detail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout side menu - open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product detail - show product
    const [productToShow, setProductToShow] = useState({})

    // shopping cart products - add products to cart
    const [cartProducts, setCartProducts] = useState([])


    return (
        <ShoppingCartContext.Provider value={{ 
            // aqui lo que hacemos es proveer a los hijos (lo que esta abajo que se llama children) con los datos para que ellos los usen y los
            // mofiquen tambien si lo necesitan
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}