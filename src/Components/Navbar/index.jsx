import { NavLink } from "react-router-dom"

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        secondhand
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronica
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Muebles
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Juguetes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    jfpazguzman@gmail.com    
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Mis ordenes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Mi cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Iniciar sesion
                    </NavLink>
                </li>
                <li>
                    <NavLink >
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar