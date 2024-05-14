import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const RecomendationForMe = () => {
  const { user } = useContext(AuthContext);
  const [myrecomentData, setMyrecomentData] = useState([]);
  console.log(myrecomentData);
  useEffect(() => {
    const myrecoment = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/recomendation/${user.email}`,{withCredentials:true}
      );
      setMyrecomentData(data);
    };
    myrecoment();
  }, []);
  const handleMyRecoDelete = async (id) => {
    console.log("deleted", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this query!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your query has been deleted.",
          icon: "success",
        });
        try {
          const { data } = axios.delete(
            `${import.meta.env.VITE_API_URL}/recomendation/${id}`
          );
          const remainingdata = myrecomentData.filter((q) => q._id !== id);
          setMyrecomentData(remainingdata);
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
  return (
    <div>
        <h1 className="font-bold my-8 px-4">Recomendation For me</h1>
      <div className="overflow-x-auto min-h-screen my-8 px-4">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-100 text-black">
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
            {myrecomentData.map((reco) => (
              <tr className="even:bg-blue-100 even:text-black" key={reco._id}>
                {/* row 1 */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-md w-12 h-12">
                        <img src={reco.recomendProduct} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{reco.ProductName}</div>
                      <div className="text-sm opacity-50">
                        {reco.CurrentTimeStamp}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{reco.RecommenderName}</td>
                <td>{reco.RecommenderEmail}</td>
                <td>{reco.recomentTitle}</td>
                <td>{reco.details.slice(0, 100)}</td>

                <th>
                  <button
                    onClick={() => handleMyRecoDelete(reco._id)}
                    className="btn btn-ghost "
                  >
                    <RiDeleteBinLine size={25} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecomendationForMe;
