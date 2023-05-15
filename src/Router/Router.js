import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import Main from "../LayOut/Main/Main";
import OrderResit from "../components/OrderResit/OrderResit";
import OrderResitPage from "../Pages/OrderResitPage";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
     
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/clientOrder',
        element: <OrderResitPage/>
      }

    ]
  }
])

export default routers;