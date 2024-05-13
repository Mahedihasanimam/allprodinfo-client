import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { RiDeleteBinLine } from "react-icons/ri";
const MyRecomendation = () => {
  const { user } = useContext(AuthContext);
  const [myrecomentData, setMyrecomentData] = useState([]);
  console.log(myrecomentData);
  useEffect(() => {
    const myrecoment = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/recomendation/${user.email}`
      );
      setMyrecomentData(data);
    };
    myrecoment();
  }, []);
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
                myrecomentData.map(reco=><tr className="even:bg-blue-100 even:text-black" key={reco._id}>
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
                          {reco.userEmail}
                      </td>
                      <td>
                          {reco.recomentTitle}
                      </td>
                      <td>
                         {reco.details.slice(0,100)}
                      </td>
                    
                      <th>
                        <button className="btn btn-ghost ">
                            <RiDeleteBinLine size={25}/>
                        </button>
                      </th>
                    </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecomendation;
