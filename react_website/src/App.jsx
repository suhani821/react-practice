import React from "react";
import { useParams } from "react-router-dom";
function App(){
    const {user_id}=useParams();
return(<>
<h1 className="text-center text-2xl font-bold py-40">user id: {user_id} </h1>
</>);
}
export default App;