import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorElement from "../pages/ErrorElement";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import ResisterPage from "../pages/ResisterPage";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import BrandCollection from "../components/BrandCollection";


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
            element:<AddProduct></AddProduct>
        },
        {
            path:'/myCart',
            element:<MyCart></MyCart>
        },
        {
            path:'/brandCollection/:brandName',
            element:<BrandCollection></BrandCollection>,
            loader:({params})=>fetch(`http://localhost:5000/brandCollection/${params.brandName}`)
        }
      ]
    }
])


export default router;