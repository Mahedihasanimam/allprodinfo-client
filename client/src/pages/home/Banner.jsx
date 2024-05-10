import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-200 h-60 mx-8 p-4 text-white ">
             <div className="mt-4 space-y-2">

            <h1 className="text-4xl font-bold ">Explore All Queries Now!</h1>
            <Link to={'query'} className="btn rounded-sm px-6 font-bold text-xl">All Queries</Link>
             </div>
        </div>
    );
};

export default Banner;