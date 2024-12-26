import React from 'react'
import App from './src/app'
import ReactDOM from 'react-dom/client'
import Home from './components/home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



let route = createBrowserRouter([
        {
           path:'/',
           element:<App/>,
           children:[
            {
                path:'/',
                element:<Home/>
            }
           ]}
    ])

let root = ReactDOM.createRoot(document.querySelector('.container'))

root.render(<RouterProvider router={route}/>)

