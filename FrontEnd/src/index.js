import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './login';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import Learning from './learning';
import Signup from './signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    children: [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    },  
    {
      path: '/learning',
      element: <Learning />
    },
    {
      path: '/signup',
      element: <Signup/>
    }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
