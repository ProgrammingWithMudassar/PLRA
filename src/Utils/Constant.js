import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const [token, setToken] = useState(false)
    let auth = { 'token': false }


    const varify_user = () => {
        const data=false
        // const data = localStorage.getItem('token');
        if (data) {
            return true
        }
        return false
    }

    return (
        varify_user() ?
            <Outlet /> : <Navigate to='/login' />
            // This is hakim commit

    )
}

export default PrivateRoutes;