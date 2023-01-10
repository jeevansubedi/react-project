import { useState } from "react";

function Conditional(){

    const [age,setAge]=useState(11);

// if (age>18){
// return(
//     <>
//     <h1>
//         Vote handey</h1></>
// )
// }
// else{

//     return( 
//         <>
//         <h1>Taile vote hanna paudinas</h1>
//         </>
//     );
// }
return(
    <>

 <h1>{age > 18? "you can vote" : "you cannot vote"}</h1>
</>
);
}
export default Conditional;