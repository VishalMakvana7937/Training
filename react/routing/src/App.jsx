import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashbord from './components/Dashbord'
import Navbar from './components/Navbar'
import Paramcom from './components/Paramcom'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Navbar /> <Home /></div>,
  },
  {
    path: '/about',
    element: <div><Navbar /> <About /></div>,
  },
  {
    path: '/dashboard',
    element: <div><Navbar /> <Dashbord /></div>,
    children: [
      {
        path: 'courses',
        element: <div></div>,
      },
      {
        path: 'mock-tests',
        element: <div></div>,
      },
      {
        path: 'reports',
        element: <div></div>,
      }
    ]
  },
  {
    path: '/student/:id',
    element: <div><Navbar /> <Paramcom /></div>,
  },
  {
    path: "*",
    element: <div><NotFound /></div>,
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
