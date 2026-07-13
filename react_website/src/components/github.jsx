import React from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data =useLoaderData();
    return(
        
        <>
      <h1 className="text-center text-5xl font-bold my-5">
  Github Info
</h1>
        <div>
            <div className="text-center my-3" >
                <label htmlFor=""className="text-center" >Github Name:  { data.login}</label>
            </div>
            <div className="text-center gap-3">
                <label htmlFor="" className="text-center"> followers:  {data.followers}</label>
            </div>
<div className=" flex justify-center"><img src={data.avatar_url} alt="img" width={300} /></div>
        </div>
        </>
    );
}
export default Github
export const Githubdata = async function () {
     const datastrings= await fetch("https://api.github.com/users/suhani821");
console.log(datastrings);
   return datastrings.json();
}
  