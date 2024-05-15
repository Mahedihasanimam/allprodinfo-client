import { Link } from "react-router-dom";


const Slider = ({image,title,text}) => {
    return (
        <div className='relative'>
            <img className="w-full max-h-[600px] min-h-[600px]" src={image} alt="img" />
            <div className="h-full bg-black absolute top-0 w-full opacity-50">

            </div>
            <div className='absolute text-center space-y-4 top-1/4 w-full   text-white'>
                <h1 className='lg:text-4xl md:text-2xl text-lg font-bold'>{title}</h1>
                <p className="lg:w-1/2 mx-auto ">{text}</p>
               <Link to={'/query'}>
               <button className="btn mt-4 bg-[#3B82FC] text-white font-bold border-none rounded-sm px-8">Lern More</button>
               </Link>
               
            </div>
        </div>
    );
};

export default Slider;