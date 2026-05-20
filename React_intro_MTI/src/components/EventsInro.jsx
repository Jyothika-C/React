import { useState } from "react";

export default function UseStateDict(params) {
 let [obj1 , setObject] = useState({num1 : 10 , num2 : 20}) 

 function increaseNum(num){
        setObject({...obj1 , [num] : obj1[num] + 1})
 }
 
 return (
        <>
        <div>
                <h1>Num 1 : {obj1.num1} </h1>
                <button onClick={()=> increaseNum("num1")} >Increase</button> 
        </div>

                <div>
                <h1>Num 2 : {obj1.num2} </h1>
                 <button onClick={()=> increaseNum("num2")} >Increase</button> 
        </div>
 
 </>
 )
};

