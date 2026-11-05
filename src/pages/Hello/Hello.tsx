import { useState } from "react";
 const Hello =()=>{
  const [x,setX] = useState("создали компанент");
 

  return(
    <div>
    {x}
    </div>
  )
}
  export default Hello;