import React, { useEffect, useState } from 'react'
import Button from "../components/Button"

 const Form1 = ({property,formData,setFormData}) => {
  const[email,setEmail]=useState(property.emailId);
  const[password,setPassword]=useState(property.password);
const handleOnchange=(key,e)=>{
  let flag=false;
console.log(e.target.value);
if(key==="emailId"){
  setEmail(e.target.value);
}else{
  setPassword(e.target.value);
// let input=e.target.value;
// let capitalLetterCont=0;
// let smallLetterCount=0;
// let numberCount=0;
// let specialCharCount=0;
// let specialchars=["@","#","%","&"];
//   for(let i=0;i<input.length;i++){
//     if(input[i].charCodeAt(0)>=65 && input[i].charCodeAt(0)<=90){
//       capitalLetterCont++;    
//     }
//     if(input[i].charCodeAt(0)>=97 && input[i].charCodeAt(0)<=122){
//     smallLetterCount++;    
//     }
//     if(typeof(parseInt(input[i]))==="number"){
//       numberCount++;    
//       }
//       if(specialchars.includes(input[i])){
//         specialCharCount++;    
//         }
//   }
//   if(capitalLetterCont===2 && smallLetterCount===2 && numberCount===2 && specialCharCount===2){
//     flag=true;
//     setPassword(e.target.value);
//   }else{
//     flag=false;
//     setPassword("");
//   }
  
}

let data=JSON.parse(JSON.stringify(formData));
data.forEach((element,index) => {
  if(index===property.id-1){
      element[key]=e.target.value;  
      
  } 
});
console.log(data," data")
setFormData(data);
}
  return (
    <div className='form'>
      <div>
      <label>{"emailId: "}</label>
      <input type="email" onChange={(e)=>{handleOnchange("emailId",e)}} value={email} required></input>
      </div>
      <div>
      <label>{"password: "}</label>
      <input type="password" required value={password} onChange={(e)=>{handleOnchange("password",e)}}></input>
      </div>
     <Button page ={1} data={formData}/>
    </div>
  )

}
export default Form1
