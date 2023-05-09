import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import Main from "../LayOut/Main/Main";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
     
      {
        path: '/',
        element: <LandingPage/>
      }

    ]
  }
])

export default routers;