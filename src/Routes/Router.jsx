import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorElement from "../pages/ErrorElement";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import ResisterPage from "../pages/ResisterPage";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import BrandCollection from "../components/BrandCollection";
import Details from "../components/Details";
import Update from "../components/Update";
import PrivateRoute from "./PrivateRoute";


const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
           path:'/',
           element:<HomePage></HomePage>,
           loader:()=>fetch('/brands.json')
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
            path:'/resister',
            element:<ResisterPage></ResisterPage>
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/myCart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            // loader:({params})=>fetch(`https://brand-shop-server-qaafunooj-horidas-roys-projects.vercel.app/cardCollection/${params.email}`)
        },
        {
            path:'/brandCollection/:brandName',
            element:<BrandCollection></BrandCollection>,
            loader:({params})=>fetch(`https://brand-shop-server-dopm0ug64-horidas-roys-projects.vercel.app/brandCollection/${params.brandName}`)
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=>fetch(`https://brand-shop-server-dopm0ug64-horidas-roys-projects.vercel.app/details/${params.id}`)
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader:({params})=>fetch(`https://brand-shop-server-dopm0ug64-horidas-roys-projects.vercel.app/update/${params.id}`)
        }
      ]
    }
])


export default router;