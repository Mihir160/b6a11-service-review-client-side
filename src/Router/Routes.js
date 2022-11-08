import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Services from "../Components/Services/Services";

const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Header></Header>
                },
                {
                    path:'/services',
                    element:<Services></Services>
                }
            ]
        }
])
export default router;