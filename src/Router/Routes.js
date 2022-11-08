import { createBrowserRouter } from "react-router-dom";
import AddReview from "../Components/AddReview/AddReview";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import MyReview from "../Components/MyReview/MyReview";
import Register from "../Components/Register/Register";
import ServiceAll from "../Components/Services/ServiceAll";
import PrivateRoute from "./PrivateRoute";


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
                },
                {
                    path:'/addReview',
                    element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
                },
                {
                    path:'/myreview',
                    element:<MyReview></MyReview>
                }
              
            ]
        }
])
export default router;