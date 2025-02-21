// AQUI VAMOS A CREAR TODO EL CONTEXTO GLOBAL DE APLICACION, DE AQUI SALDRA LA INFORMACION A TODAS PARTES
// este sera el banco de informacion global
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

// con este provider vamos a "proveer" toda la informacion a los demas 
export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)


    return (
        <ShoppingCartContext.Provider value={{ 
            // aqui lo que hacemos es proveer a los hijos (lo que esta abajo que se llama children) con los datos para que ellos los usen y los
            // mofiquen tambien si lo necesitan
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}