import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Registation from "../components/Registation";
import AddQuery from "../pages/AddQuery";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/login',
          element:<Login/>
        }
        ,{
          path:'/registation',
          element:<Registation/>
        }
        ,{
          path:'/addquery',
          element:<AddQuery/>
        }
      ]
    },
  ]);

  export default router;