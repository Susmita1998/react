import React, { useEffect, useState } from 'react'
import Button from "../components/Button"

 const Form3 = ({property,formData,setFormData}) => {

const[countryCode,setCountryCode]=useState(property.countryCode);
const[phoneNumber,setPhoneNumber]=useState(property.phoneNumber);
const[acceptTermsAndCondition,seAacceptTermsAndCondition]=useState(property.acceptTermsAndCondition);

  const handleCountryCodeChange=(e)=>{
    setCountryCode(e.target.value);
    console.log(e," event");
    let data=JSON.parse(JSON.stringify(formData));
     data.forEach((element,index) => {
        if(index===property.id-1){
            element.countryCode=e.target.value;

        }
     });
     console.log(data," data")
     setFormData(data);
  }

const handleOnchange=(key,e)=>{
console.log(e.target.value);
if(key==="number"){
    setPhoneNumber(e.target.value);
}
else {
    seAacceptTermsAndCondition(e.target.value);
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
    <div className='container'>
    <div className='form'>
      <div>
      <label>{"countryCode: "}</label>
      <select value={countryCode} onChange={handleCountryCodeChange} required>
      <option value="">select</option>
<option value="+91">India (+91)</option>
<option value="+1">America (+1)</option>
      </select>
      </div>
      <div>
      <label>{"phoneNumber: "}</label>
      <input type="number" maxLength={10} required onChange={(e)=>{handleOnchange("number",e)}} value={phoneNumber} ></input>
      </div>
      <div>
      <label>{"acceptTermsAndCondition: "}</label>
      <input type="checkbox" maxLength={10} required onChange={(e)=>{handleOnchange("acceptTermsAndCondition",e)}} value={acceptTermsAndCondition}></input>
      
      </div>
    </div>
    <Button page ={3} data={formData}/>
    </div>
  )
}
export default Form3
