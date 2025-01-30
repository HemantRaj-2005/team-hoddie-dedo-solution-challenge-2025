import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import ProfileSetup from './pages/Auth/ProfileSetup'
import Dashboard from './pages/Dashboard/Dashboard'



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/profile-setup",
        element: <ProfileSetup />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

function App() {
  return (
  
    <>
    <RouterProvider router={router} />
    </>
    
  )
}

export default App