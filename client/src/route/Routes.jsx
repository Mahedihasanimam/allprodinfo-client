import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Registation from "../components/Registation";
import AddQuery from "../pages/AddQuery";
import Query from "../pages/Query";
import RecomendationForMe from "../pages/RecomendationForMe";
import MyRecomendation from "../pages/MyRecomendation";
import MyQuery from "../pages/MyQuery";
import PrivateRoute from "./PrivateRoute";
import Detail from "../components/Detail";
import UpdateQuery from "../components/UpdateQuery";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error/>,
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
        ,{
          path:'/query',
          element:<Query/>
        }
        ,{
          path:'/recoforme',
          element:<PrivateRoute><RecomendationForMe/></PrivateRoute>
        }
        ,{
          path:'/myrecoment',
          element:<PrivateRoute><MyRecomendation/></PrivateRoute>,
         
        }
        ,{
          path:'/myquery',
          element:<PrivateRoute><MyQuery/></PrivateRoute>
        }
        ,{
          path:'/myquery/:id',
          element:<PrivateRoute><Detail/></PrivateRoute>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/queryes/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/queryes/${params.id}`)
        }
      ]
    },
  ]);

  export default router;