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
                    path:'/myreview',
                    element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
                },
                {
                    path:'/addservices',
                    element:<AddServices></AddServices>
                },
                {
                    path:'/updatereview/:id',
                    element:<UpdateReview></UpdateReview>,
                    loader:({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
                }
              
            ]
        }
])
export default router;