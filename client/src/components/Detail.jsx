import axios from "axios";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const detailquery = useLoaderData();
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
  } = detailquery;
  return (
    <div className=" w-11/12 my-12 mx-auto overflow-hidden border-2 rounded-lg shadow-md dark:bg-gray-800">
      {(image && (
        <img className="object-cover w-full" src={productPhoto} alt="product" />
      )) || <CgProfile />}

      <div className="p-6">
        <div className="">
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
            <a
              href="#"
              className="block mt-2 text-xl font-semibold  transition-colors duration-300 transform dark:text-white hover: hover:underline"
              tabindex="0"
              role="link"
            >
              {queryTItle}
            </a>
            <p className="mt-2 text-sm  dark:text-gray-400">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
