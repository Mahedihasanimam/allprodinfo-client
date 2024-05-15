import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Query = () => {
  const [query, setquery] = useState([]);
  const [btnvalue, setbtnValue] = useState(2);
  console.log(btnvalue);
  // const [search,stsearch]=useState('')
  // const handesearch=(e)=>{
  //   e.preventDefault()
  //   const text=e.target.Search.value
  //   console.log(text)
  // }
  useEffect(() => {
    const queryData = async (e) => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/queryes`);
        setquery(data);
      } catch (err) {
        console.log(err);
      }
    };
    queryData();
  }, []);
  const handleonecolumn = () => {
    setbtnValue(1);
  };
  const handletowcolumn = () => {
    setbtnValue(2);
  };
  const handlethreecolumn = () => {
    setbtnValue(3);
  };
  return (
    <div className="max-w-[1440px] mx-auto my-12">
      <div className="flex  flex-wrap justify-between my-6">
        <div className="flex  flex-wrap gap-4">
          <button
            onClick={handleonecolumn}
            className="btn bg-[#3B82F6] text-white font-bold"
          >
            1 column layout
          </button>
          <button
            onClick={handletowcolumn}
            className="btn bg-[#3B82F6] text-white font-bold"
          >
            2 column layout
          </button>
          <button
            onClick={handlethreecolumn}
            className="btn bg-[#3B82F6] text-white font-bold"
          >
            3 column layout
          </button>
        </div>
        <div className="pr-4">
          <form>
          <fieldset className="w-full space-y-1  dark:text-gray-800">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4  dark:text-gray-800"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none  dark:bg-gray-100 dark:text-gray-800 border-2 focus:dark:bg-gray-50 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </fieldset>
          </form>
        </div>
      </div>

      <div
        className={`
         ${btnvalue == 1 && "grid grid-cols-1  gap-4"}
         ${
           btnvalue == 2 &&
           "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4"
         }
         ${
           btnvalue == 3 &&
           "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4"
         }
        
        `}
      >
        {query.map((queryitem) => (
          <Card key={queryitem._id} queryitem={queryitem}></Card>
        ))}
      </div>
    </div>
  );
};

export default Query;
