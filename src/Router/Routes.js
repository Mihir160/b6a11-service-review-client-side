import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import ServiceAll from "../Components/Services/ServiceAll";


const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                
                },
                {
                    path:'/servicesAll',
                    element:<ServiceAll></ServiceAll>
                }
              
            ]
        }
])
export default router;