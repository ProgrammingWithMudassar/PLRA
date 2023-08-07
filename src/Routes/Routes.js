import React from 'react';
import {
    Login, Register, Dashboard,
    Employee
} from '../Pages/index.js';

// Public Routes
const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

// Private Routes
const privateRoutes = [
    { path: "/", component: Dashboard },
    { path: "/employee", component: Employee },
    { path: "/notices", component: Employee },

];

export { publicRoutes, privateRoutes };