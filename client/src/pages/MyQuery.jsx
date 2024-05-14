import { useContext, useEffect, useState } from "react";
import QueryBanner from "./QueryBanner";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

import MyQCard from "../components/MyQCard";

const MyQuery = () => {
  const { user } = useContext(AuthContext);
  const [query, setquery] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/myqueryes/${user?.email}`,{withCredentials:true});
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
      </div>
    </div>
  );
};

export default MyQuery;
