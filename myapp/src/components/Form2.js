import React, { useEffect, useState } from 'react'
import Button from "../components/Button"

 const Form2 = ({property,formData,setFormData}) => {
    const[firstName,setFirstName]=useState(property.firstName);
    const[lastName,setLastName]=useState(property.lastName);
    const[address,setAddress]=useState(property.address);
  const handleOnchange=(key,e)=>{
  console.log(e.target.value);
  if(key==="firstName"){
    setFirstName(e.target.value);
  }else if(key==="lastName"){
    setLastName(e.target.value);
  }
  else {
    setAddress(e.target.value);
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
      <label>{"firstName: "}</label>
      <input type="text" minLength={2} maxLength={50} required  value={firstName} onChange={(e)=>{handleOnchange("firstName",e)}}></input>
      </div>
      <div>
      <label>{"lastName: "}</label>
      <input type="text" onChange={(e)=>{handleOnchange("lastName",e)}} value={lastName}></input>
      </div>
      <div>
      <label>{"address: "}</label>
      <input type="text" minLength={10} onChange={(e)=>{handleOnchange("address",e)}} value={address}></input>
      </div>
      <Button page ={2} data={formData}/>
    </div>
  )
}
export default Form2
