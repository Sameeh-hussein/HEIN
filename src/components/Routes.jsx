import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './user/Layout'
import Home from './user/Home'
import Categories from './user/Categories'
import AdminLayout from './admin/AdminLayout'
import AdminHome from './admin/Home'
import AdminCategories from './admin/Categories'
import Register from './user/Register'
import Login from './user/Login'
import CategoryDetails from './user/CategoryDetails'
import ProductView from './user/ProductView'

export const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'categories/:categoryId/products',
                element: <CategoryDetails />
            },
            {
                path: 'categories/:categoryId/products/:productId',
                element: <ProductView />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '*',
                element: <h1>404 Page Not Found</h1>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'home',
                element: <AdminHome />
            },
            {
                path: 'categories',
                element: <AdminCategories />
            },
            {
                path: '*',
                element: <h1>404 Page Not Found</h1>
            }
        ]
    }
]);
