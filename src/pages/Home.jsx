import React, { useEffect } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const {data} =  useCollection("recepies");
  return ( <div className="px-10">
   <img className="border-3 border-amber-300 rounded-3xl h-80 w-full object-cover" src="../../public/meels.webp"  />
    {data && data.map((r)=>{
      return (
        <div className="flex flex-col gap-3 mb-4 border-3 rounded-3xl mt-4 p-4 border-amber-300">
           <h2 className="col-start-1 col-end-7 text-7xl mb-3 inline" key={r.id}>{r.title}</h2>
          <div className="flex flex-col"> 
            <div className="flex gap-70 mb-7"><p className=" text-3xl">Cookingtime: <i className="flex ml-3  text-green-600 text-2xl">{r.cookingTime}</i></p>
           
           <ul className=" ">
            <p className="text-3xl -ml-8"> Ingredients :</p>
           {r.ingredients.map((n,i)=>{
             return <li className="list-disc text-2xl" key={i}>{n}</li>
           })}
           </ul>
           </div>
           <p className="text-3xl ">Description:</p>
           <p className=" text-2xl " key={r.id}>{r.description}</p>
           </div>
        </div>
      )
    })}  
  </div>);
}

export default Home;
