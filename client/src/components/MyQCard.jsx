import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2'
import axios from "axios";
import { useState } from "react";
const MyQCard = ({myqueryitem,query,setquery}) => {
  const [myqCardData,setmyqCardData]=useState(myqueryitem)

    const {ProductName,ProductBrand,productPhoto,queryTItle,details,email,name,image,currentDate,currentTime,_id,recomendationCount}=myqCardData;
  const handleDelete=async(id)=>{
  
   Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      try{
        const {data}= axios.delete(`${import.meta.env.VITE_API_URL}/queryes/${id}`)
      
        const remainingdata=query.filter(q=>q._id !== id)
        setquery(remainingdata)
       }
       catch(err){
        console.log(err)
       }
    }
  });

  }
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
                 {/* {details.slice(0,50)} */}
                 
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
                    <button onClick={()=>handleDelete(_id)} className="btn text-white bg-[#3B82F6]">
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