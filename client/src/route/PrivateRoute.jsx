import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    console.log(location)
    const {user,loder}=useContext(AuthContext)
    if(loder)return <h1 className="text-center flex items-center justify-center gap-2 text-xl">Loading <span className="loading loading-dots loading-lg"></span></h1>
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;