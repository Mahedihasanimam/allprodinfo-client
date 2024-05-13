import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios"

const RecentlyQueries = () => {
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
        <div className="my-12 px-2">
            <div className="text-center mb-6">
            <h1 className="text-4xl font-bold t">Recent Queries</h1>
           <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, itaque!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4" >
                {
                    query.slice(-6).map(queryitem=><Card key={queryitem._id} queryitem={queryitem}></Card>)
                }
            </div>
        </div>
    );
};

export default RecentlyQueries;