import { useContext, useEffect, useState } from "react";
import QueryBanner from "./QueryBanner";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

import MyQCard from "../components/MyQCard";
import { Link } from "react-router-dom";

const MyQuery = () => {
  const { user } = useContext(AuthContext);
  const [query, setquery] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/myqueryes/${user?.email}`,
          { withCredentials: true }
        );
        setquery(data);
      } catch (err) {
        console.log(err);
      }
    };
    queryData();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto my-12">
      <QueryBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-4">
        {query
          .filter((q) => q.email === user.email)
          .map((myqueryitem) => (
            <MyQCard
              key={myqueryitem._id}
              query={query}
              setquery={setquery}
              myqueryitem={myqueryitem}
            ></MyQCard>
          ))}

        {
          query.length===0 && <div className="flex mx-auto  flex-row px-4 lg:w-[1000PX]  pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-900 dark:bg-gray-50 border-violet-400 dark:border-violet-600">
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
          <Link to={'/addquery'} className="btn bg-[#3B82F6] text-white hover:bg-[#3B82F6] border-none">
          Add A Queries
          </Link>
        </div>
        }
      </div>
    </div>
  );
};

export default MyQuery;
