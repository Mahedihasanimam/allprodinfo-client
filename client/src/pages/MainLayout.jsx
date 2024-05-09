import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div >
            {/* navbar  */}
            <Navbar/>
            {/* outlate */}
            <div className="min-h-[calc(100vh-317px)]">
            <Outlet/>
            </div>
            <Footer/>
            {/* footer  */}
        </div>
    );
};

export default MainLayout;