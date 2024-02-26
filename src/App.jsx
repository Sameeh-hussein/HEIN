import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './components/Routes';

export default function App() {
  return (
    <RouterProvider router={Router} />
  )
}
