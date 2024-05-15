import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Card = ({queryitem}) => {

    const {ProductName,ProductBrand,productPhoto,queryTItle,details,email,name,image,currentDate,currentTime,_id,recomendationCount}=queryitem;
  return (
    <Link to={`/myquery/${_id}`}>
    <div className=" overflow-hidden border-2 rounded-lg shadow-md dark:bg-gray-800"data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000">
     {image &&
        <img
        className="object-cover w-full h-72"
        src={productPhoto}
        alt="product"
      /> || <CgProfile/>

     }

      <div className="p-6">
        <div className="flex gap-4 ">
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={image}
                  alt="user"
                />
              </div>
            </div>
          </div>
          <div>
            <strong className="text-xs">{ProductBrand}-</strong>
            <span className="text-md font-medium text-blue-600 uppercase dark:text-blue-400">
             {ProductName}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold  transition-colors duration-300 transform dark:text-white hover: hover:underline"
              tabindex="0"
              role="link"
            >
             {queryTItle}
            </a>
     
            <p className="mt-2 text-sm  dark:text-gray-400">
              {details.slice(0,50)}
              
            </p>
            <span>{name}</span><br />
            <span className="mx-1 text-xs  dark:text-gray-300">
                {currentDate}
              </span><br /><br />
          <button className="btn bg-[#3B82F6] rounded-sm text-white hover:bg-[#3b83f6b9] border-none">recommend</button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
