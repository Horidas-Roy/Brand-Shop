import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorElement from "../pages/ErrorElement";
import Layout from "../pages/Layout";


const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
           path:'/',
           element:<HomePage></HomePage>,
        }
      ]
    }
])


export default router;