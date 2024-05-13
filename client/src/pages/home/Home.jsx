
import Faq from "../../components/Faq";
import WhatWeOffer from "../../components/WhatWeOffer";
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
            <div className="text-center mx-auto lg:w-1/2 md:h-1/2 w-full space-y-2">
            <h1 className="lg:text-4xl md:text-2xl text-lg  font-bold ">Frequently Asked Questions</h1>
            <p>Find quick answers to common queries with our comprehensive Frequently Asked Questions section. Simplify your search for information today!</p>
            </div>
            <Faq/>
            <WhatWeOffer/>
        </div>
    );
};

export default Home;