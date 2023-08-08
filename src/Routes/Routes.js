import React from 'react';
import {
    Login, Register, Dashboard,
    Employee, Basic__Information,Personal__Information
} from '../Pages/index.js';

// Public Routes
const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

// Private Routes
const privateRoutes = [
    { path: "/", component: Dashboard },

    // Employee Route 
    { path: "/employee", component: Employee },
    { path: "/employee/basic_information", component: Basic__Information },
    { path: "/employee/personal_information", component: Personal__Information },


];

export { publicRoutes, privateRoutes };