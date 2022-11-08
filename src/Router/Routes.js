import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import Register from "../Components/Register/Register";
import ServiceAll from "../Components/Services/ServiceAll";


const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                
                },
                {
                    path:'/servicesAll',
                    element:<ServiceAll></ServiceAll>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/servicesAll/:id',
                    element:<Details></Details>,
                    loader: ({params}) => fetch(`http://localhost:5000/servicesAll/${params.id}`)
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                }
              
            ]
        }
])
export default router;