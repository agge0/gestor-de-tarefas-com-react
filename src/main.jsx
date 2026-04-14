import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskInfo from './pages/TaskInfo.jsx'

const router =  createBrowserRouter(
  [
    {
      path: "/",
      element:  <App/>
    },
    {
      path: "/task",
      element:  <TaskInfo/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
