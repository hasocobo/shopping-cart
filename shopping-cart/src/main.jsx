import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/Pages/ErrorPage.jsx';
import Store from './components/Pages/Store.jsx';
import Homepage from './components/Homepage.jsx';
import ItemView from './components/Pages/ItemView.jsx';
import { getItems } from './components/Item/getItem.js';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const Root = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getItems() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData(data);
    })();
  }, [])

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
          element: <Store data={data} />,
        },
        {
          path: "store/:itemId",
          element: <ItemView item={data} />
        }
      ]
    },
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)
