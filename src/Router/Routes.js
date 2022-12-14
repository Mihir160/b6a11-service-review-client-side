import { createBrowserRouter } from "react-router-dom";
import AddReview from "../Components/AddReview/AddReview";
import AddServices from "../Components/AddServices/AddServices";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import MyReview from "../Components/MyReview/MyReview";
import Register from "../Components/Register/Register";
import Service from "../Components/Service/Service";
import ServiceAll from "../Components/Services/ServiceAll";
import UpdateReview from "../Components/UpadteReview/UpdateReview";
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
                    path:'/service',
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
                    loader: ({params}) => fetch(`https://b6a11-service-review-server-side-five.vercel.app/servicesAll/${params.id}`)
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
             
                {
                    path:'/myreview',
                    element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
                },
                {
                    path:'/addservices',
                    element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
                },
                {
                    path:'/updatereview/:id',
                    element:<UpdateReview></UpdateReview>,
                    loader:({params}) => fetch(`https://b6a11-service-review-server-side-five.vercel.app/reviews/${params.id}`)
                }
              
            ]
        }
])
export default router;