import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";


const Query = () => {
    const [query,setquery]=useState([])
    useEffect(()=>{
        const queryData=async(e)=>{
         try{
             const {data}=await axios(`${import.meta.env.VITE_API_URL}/queryes`)
             setquery(data)
         }
         catch(err){
             console.log(err)
         }
         }
         queryData()
     },[])
    return (
        <div className="max-w-[1440px] mx-auto">
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-12">
            {
                query.map(queryitem=><Card key={queryitem._id} queryitem={queryitem}></Card>)
            }
            </div>
        </div>
    );
};

export default Query;