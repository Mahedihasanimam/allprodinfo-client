import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
const MyRecomendation = () => {
  const { user } = useContext(AuthContext);
  const [myrecomentData, setMyrecomentData] = useState([]);

console.log(myrecomentData)

  useEffect(() => {
    const myrecoment = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/recomendation`,{withCredentials:true}
      );
      setMyrecomentData(data);
    };
    myrecoment();
  }, []);

  const handleMyRecoDelete=async(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to recover this query!",
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
            text: "Your query has been deleted.",
            icon: "success"
          });
          try{
            const {data}= axios.delete(`${import.meta.env.VITE_API_URL}/recomendation/${id}`,)

            const remainingdata=myrecomentData.filter(q=>q._id !== id)
            setMyrecomentData(remainingdata)
           }
           catch(err){
            console.log(err)
           }
        }
      });
   
  
  }
  return (
    <div>
      <div className="overflow-x-auto min-h-screen my-8 px-4">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-100 text-black" >
            <tr>
            <th>recomend</th>
              <th>Recommender Name</th>
              <th>Recommender Email</th>
               <th>recomend title</th>
              <th>recomend Details</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                myrecomentData.filter(f=>f.RecommenderEmail=== user.email).map(reco=><tr className="even:bg-blue-100 even:text-black" key={reco._id}>
                    {/* row 1 */}
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask rounded-md w-12 h-12">
                              <img
                                src={reco.recomendProduct}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{reco.ProductName}</div>
                            <div className="text-sm opacity-50">{reco.CurrentTimeStamp}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                         {reco.userName}
                     
                      </td>
                      <td>
                          {reco.RecommenderEmail}
                      </td>
                      <td>
                          {reco.recomentTitle}
                      </td>
                      <td>
                         {reco.details.slice(0,100)}
                      </td>
                    
                      <th>
                        <button onClick={()=>handleMyRecoDelete(reco._id)} className="btn btn-ghost ">
                            <RiDeleteBinLine size={25}/>
                        </button>
                      </th>
                    </tr>)
            }


            
          </tbody>
        </table>
        {
          myrecomentData.length<1 && <div className="flex my-8 mx-auto  flex-row px-4 lg:w-[1000PX]  pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-900 dark:bg-gray-50 border-violet-400 dark:border-violet-600">
          <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <div className="flex-1  p-2 ">
            <h1 className="lg:text-4xl text-xl font-bold text-white">Ooops! No  Queries Found </h1>
          </div>
       
        </div>
        }
      </div>
    </div>
  );
};

export default MyRecomendation;
