import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Query = () => {
  const [query, setquery] = useState([]);
  const [btnvalue, setbtnValue] = useState(2);
  console.log(btnvalue);
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
      <div className="flex gap-4 my-6">
        <button onClick={handleonecolumn} className="btn bg-[#3B82F6] text-white font-bold">
          1 column layout
        </button>
        <button onClick={handletowcolumn} className="btn bg-[#3B82F6] text-white font-bold">
          2 column layout
        </button>
        <button onClick={handlethreecolumn} className="btn bg-[#3B82F6] text-white font-bold">
          3 column layout
        </button>
      </div>

      <div
        className={`
         ${
          btnvalue == 1 && "grid grid-cols-1  gap-4"
        }
         ${
          btnvalue == 2 && "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4"
        }
         ${
          btnvalue == 3 && "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4"
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
