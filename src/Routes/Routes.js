 import React from 'react';
import {
    Login, Register, AddEmployee,
    Dashboard, Employee, Basic__Information, Personal__Information,
    Address, Contact__Information, Family__Information, Employment__History,
    Personal__Document, References, Education, Training, Skills,
} from "../Pages/index.js";

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
    { path: "/employee/basic_information/AddEmployee", component: AddEmployee },
    { path: "/employee/basic_information/EditEmployee/:id", component: AddEmployee },
    { path: "/employee/personal_information", component: Personal__Information },
    { path: "/employee/address", component: Address },
    { path: "/employee/contact_information", component: Contact__Information },
    { path: "/employee/family_information", component: Family__Information },
    { path: "/employee/employment_history", component: Employment__History },
    { path: "/employee/personal_document", component: Personal__Document },
    { path: "/employee/references", component: References },
    { path: "/employee/education", component: Education },
    { path: "/employee/training", component: Training },
    { path: "/employee/skills", component: Skills },
];

export { publicRoutes, privateRoutes };