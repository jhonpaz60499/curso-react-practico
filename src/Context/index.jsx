// AQUI VAMOS A CREAR TODO EL CONTEXTO GLOBAL DE APLICACION, DE AQUI SALDRA LA INFORMACION A TODAS PARTES
// este sera el banco de informacion global
import { createContext } from "react";

const ShoppingCartContext = createContext()

// con este provider vamos a "proveer" toda la informacion a los demas 
export const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}