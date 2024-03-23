import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/Pages/ErrorPage.jsx';
import Store from './components/Pages/Store.jsx';
import Homepage from './components/Homepage.jsx';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage text={"Your headphone store"} />

      },
      {
        path: "store",
        element: <Store />
      },
    ] 
  },


]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
