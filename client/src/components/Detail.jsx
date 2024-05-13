import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import RecomentCard from "./RecomentCard";
const Detail = () => {
  const { user } = useContext(AuthContext);
  const detailquery = useLoaderData();
  const [recomend, setrecomend] = useState([]);
  console.log(recomend)

  const {
    ProductName,
    ProductBrand,
    productPhoto,
    queryTItle,
    details,
    email,
    name,
    image,
    currentDate,
    currentTime,
    _id,
    recomendationCount,
  } = detailquery;

  const handleAddRecomen = async (e) => {
    e.preventDefault();
    const form = e.target;
    const queryid = _id;
    const queryTitle = queryTItle;
    const recomentTitle = form.QueryTItle.value;
    const ProductName = form.ProductName.value;
    const recomendProduct = form.photo.value;
    const userEmail = email;
    const userName = name;
    const RecommenderEmail = user?.email;
    const RecommenderName = user?.displayName;
    const recomenderPhoto=user?.photoURL;
    const details = form.details.value;
    const CurrentTimeStamp = new Date().toLocaleDateString();
    const addRecomenData = {
      queryid,
      queryTitle,
      recomentTitle,
      ProductName,
      userEmail,
      userName,
      RecommenderEmail,
      RecommenderName,
      details,
      CurrentTimeStamp,
      recomenderPhoto,
      recomendProduct,
      _id
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/recomend`,
        addRecomenData
      );
      
      if (data.acknowledged) {
        toast.success("your recomnd added");
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
   


  };

  useEffect(()=>{
   const rcomendData=async()=>{
    const {data}=await axios(`${import.meta.env.VITE_API_URL}/recomend/${_id}`)
    setrecomend(data)
  
   }
   rcomendData()
  },[_id])
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className=" mt-12 mx-auto overflow-hidden border-2 rounded-lg  dark:bg-gray-800">
        {(image && (
          <img
            className="object-cover w-full"
            src={productPhoto}
            alt="product"
          />
        )) || <CgProfile />}

        <div className="p-6">
          <div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex gap-2 justify-center items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={image}
                    alt="user"
                  />
                  <div className="">
                    <p className="w-full">{name}</p>
                    <span className="mx-1 text-xs  dark:text-gray-300">
                      {currentDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <strong className="text-xs">{ProductBrand}-</strong>
              <span className="text-md font-medium text-blue-600 uppercase dark:text-blue-400">
                {ProductName}
              </span>
              <Link
                href="#"
                className="block mt-2 text-xl font-semibold  transition-colors duration-300 transform dark:text-white hover: hover:underline"
                tabindex="0"
                role="link"
              >
                {queryTItle}
              </Link>
              <strong>recomendationCount : {recomend.length}</strong>
             
              <p className="mt-2 text-sm  dark:text-gray-400">{details}</p>
            </div>
          </div>
        </div>
          
          <h1 className="text-2xl font-bold text-blue-500 px-2">All Recommendations</h1>
         
   

          {
            recomend.map(recoitem=><RecomentCard key={recoitem._id} recoitem={recoitem}></RecomentCard>)
          }

      </div>
      <section className=" p-6 mx-auto  rounded-md shadow-md border-2  dark:bg-gray-800 mb-8">
        <h2 className="text-2xl text-[#3B82F6] font-semibold  capitalize dark:text-white">
          {" "}
          Add A Recommendation
        </h2>

        <form onSubmit={handleAddRecomen}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className=" dark:text-gray-200" for="productname">
                Recommended produc tName
              </label>
              <input
                id="productname"
                type="text"
                placeholder="Recommended product Name"
                name="ProductName"
                required
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className=" dark:text-gray-200" for="photo">
                Product Image-URL
              </label>
              <input
                id="photo"
                type="text"
                placeholder="Product Image-URL"
                name="photo"
                required
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <br />
          <div>
            <label className=" dark:text-gray-200" for="QueryTItle">
              RecommendationTitle
            </label>
            <input
              id="QueryTItle"
              type="text"
              placeholder="Recommendation Title"
              name="QueryTItle"
              required
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <textarea
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              name="details"
              id=""
              cols="30"
              rows="10"
              placeholder="recomendation Details"
              required
            ></textarea>
          </div>

          <button className="px-8 mt-4 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#3B82F6] focus:outline-none focus:bg-gray-600">
         
            AddRecommendation
          </button>
        </form>
      </section>
    </div>
  );
};

export default Detail;
