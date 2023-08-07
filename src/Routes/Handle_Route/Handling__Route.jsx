import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../Routes/Routes.js'
import Private__Routes from '../../Utils/Private__Routes.jsx'
import {Login}  from '../../Pages/index.js'


const Handling__Route = () => {
    return (
        <div>
            <Routes>
                {publicRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<route.component />}
                        exact={true}
                    />
                ))}
                {/* private route */}
                <Route path='/' element={<Private__Routes />} >
                    {privateRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={<route.component />}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>

                <Route path='*' element={<Login />} />
            </Routes>
        </div >
    )
}

export default Handling__Route