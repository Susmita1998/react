import React, { useState } from 'react'
import "./Form.css";
import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";
import Form3 from "../../components/Form3";

 const FormContainer = () => {
  let fData=[{
    emailId:"",
    password:"",
    current:true,
    id:1,
  },
{firstName:"",
lastName:"",
address:"",
current:false,
id:2,
},
{
  countryCode:'',
  phoneNumber:"",
  acceptTermsAndCondition:"",
  id:3,
  current:false,
}]
  const [formData,setFormData]=useState(fData);
  const handleTabClick=(tabIndex)=>{
    let tempData=JSON.parse(JSON.stringify(formData));
    console.log("calling")
    tempData.forEach((obj,index)=>{
  if(index===tabIndex-1){
    obj.current=true;
  }else{
    obj.current=false;
  }
  setFormData(tempData);
})
  }
  return (
    <div>
      <div className="tab-container">
        <button className='tab1' onClick={()=>{handleTabClick(1)}}>Tab 1</button>
        <button className='tab2'onClick={()=>{handleTabClick(2)}}>Tab 2</button>
        <button className='tab3'onClick={()=>{handleTabClick(3)}}>Tab 3</button>
      </div>
      <div className='form-container'>
        {formData.map((obj,i)=>{
          if(obj.current){
            if(i===0){
              return <Form1 property={obj} setFormData={setFormData} formData={formData} key={"tab1"}/>
            } else if(i===1){
              return <Form2 property={obj} setFormData={setFormData} formData={formData} key={"tab2"}/>
            }else{
              return <Form3 property={obj} setFormData={setFormData} formData={formData} key={"tab3"}/>
            }
           
          }
        })}
      </div>
    </div>
  )
}
export default FormContainer;
