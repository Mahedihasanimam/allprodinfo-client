import axios from "axios";
import { useState } from "react";

import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateQuery = () => {
  const navigate=useNavigate()
  const lodedupdate=useLoaderData()
  const [updatedquery,setupdatedquery]=useState(lodedupdate)
  const {
    ProductName,
    ProductBrand,
    productPhoto,
    queryTItle,
    details,
    _id,

  } = updatedquery;
 
  const handleUpdate = async(e) => {
    e.preventDefault();
    const form=e.target 
        const ProductName=form.ProductName.value
        const ProductBrand=form.ProductBrand.value
        const productPhoto=form.photo.value
        const queryTItle=form.QueryTItle.value
        const details=form.details.value

       const updateQuery={ProductName,ProductBrand,productPhoto,queryTItle,details}


        try{
          const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/update/${_id}`,updateQuery)
          console.log(data)
          if(data.acknowledged){
            setupdatedquery(data)

           toast.success('Your Query is updated')
           navigate('/myquery')
          }
       }
       catch(err){
           toast.error('someting went wrong')
           console.log(err)
       }
  
  };
  return (
    <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md border-2  dark:bg-gray-800 my-8">
      <h2 className="text-2xl text-[#3B82F6] font-semibold  capitalize dark:text-white">
        Update Queries
      </h2>

      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className=" dark:text-gray-200" for="productname">
              Product Name
            </label>
            <input
              id="productname"
              type="text"
              defaultValue={ProductName}
              name="ProductName"
              required
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className=" dark:text-gray-200" for="ProductBrand">
              Product Brand
            </label>
            <input
              id="ProductBrand"
              type="text"
              defaultValue={ProductBrand}
              name="ProductBrand"
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
             defaultValue={productPhoto}
              name="photo"
              required
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className=" dark:text-gray-200" for="QueryTItle">
              Query TItle
            </label>
            <input
              id="QueryTItle"
              type="text"
            defaultValue={queryTItle}
              name="QueryTItle"
              required
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <br />
        <div>
          <textarea
            className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            name="details"
            id=""
            cols="30"
            rows="10"
           defaultValue={details}
            required
          ></textarea>
        </div>

        <button className="px-8 mt-4 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#3B82F6] focus:outline-none focus:bg-gray-600">
          Update Query
        </button>
      </form>
    </section>
  );
};

export default UpdateQuery;
