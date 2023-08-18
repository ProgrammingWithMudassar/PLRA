import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private__Routes = () => {
    const [token, setToken] = useState(false)
    let auth = { 'token': true }


    const varify_user = () => {
        const data= true
        if (data) {
            return true
        }
        return false
    }

    return (
        varify_user() ?
            <Outlet /> : <Navigate to='/login' />
            //THis is commit from mudassar.

    )
}

export default Private__Routes;