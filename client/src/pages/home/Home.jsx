
import Banner from "./Banner";
import Carocel from "./Carocel";
import RecentlyQueries from "./RecentlyQueries";

const Home = () => {
    return (
        <div className="container mx-auto">
           <div className="mb-8 mt-1">
           <Carocel/>
           </div>
            <Banner/>
            <RecentlyQueries/>
        </div>
    );
};

export default Home;