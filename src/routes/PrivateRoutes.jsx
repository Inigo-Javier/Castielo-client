import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
// import { MessageContext } from "../context/message.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"


const PrivateRoute = () => {

    const { isLoggedIn, isLoading } = useContext(AuthContext)
    // const { showMessage } = useContext(MessageContext)

    if (isLoading) {
        return <Loader />
    }

    if (!isLoggedIn) {
        // showMessage('Desautorizad@', 'Inicia sesión para acceder')
        return <Navigate to="/inicio-sesion" />
    }

    return <Outlet />
    //componente Outlet representa todas las rutas anidadas dentro de una ruta.
}

export default PrivateRoute