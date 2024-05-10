import Banner from "./Banner";
import Carocel from "./Carocel";

const Home = () => {
    return (
        <div className="container mx-auto">
           <div className="mb-8 mt-1">
           <Carocel/>
           </div>
            <Banner/>
            <h1 className="text-6xl font-bold font-poppins uppercase">this is home</h1>
        </div>
    );
};

export default Home;