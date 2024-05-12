import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
const MyQCard = ({myqueryitem}) => {

    const {ProductName,ProductBrand,productPhoto,queryTItle,details,email,name,image,currentDate,currentTime,_id,recomendationCount}=myqueryitem;
    return (
        <div className=" relative overflow-hidden border-2 rounded-lg shadow-md dark:bg-gray-800">
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
               <strong className="text-xs ">{ProductBrand}-</strong>
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
               <strong>recomendationCount : {recomendationCount}</strong>
               <p className="mt-2 text-sm  dark:text-gray-400">
                 {details.slice(0,50)}
                 
               </p>
               <span>{name}</span><br />
               <span className="mx-1 text-xs  dark:text-gray-300">
                   {currentDate}
                 </span>
                 <div className="absolute bottom-4 right-4 space-y-2">
                    <Link data-tooltip-id="my-tooltip" data-tooltip-content="details" to={`/myquery/${_id}`} className="btn text-white border-none bg-[#3B82F6]">
                        <TbListDetails size={25}/>
                        
                    </Link><br />
                    <Tooltip  id="my-tooltip" />
                    <Link to={`/update/${_id}`} className="btn text-white bg-[#3B82F6]">
                        <HiPencil size={25}/>
                        </Link><br />
                    <button className="btn text-white bg-[#3B82F6]">
                        <MdDelete size={25}/>
                    </button>
                 </div>
             </div>
           </div>
         </div>
        
       </div>
    );
};

export default MyQCard;