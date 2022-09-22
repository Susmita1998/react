import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./Button.css"


 const Button = ({page, data}) => {
    console.log(data,"data--")
    const [disableButtonBack,setDisableButtonBack]=useState("");
    const [disableButtonNext,setDisableButtonNext]=useState("");

    let navigate = useNavigate();
    useEffect(()=>{
        if(page=1){
            setDisableButtonBack("disable");
        }
       
        // if(page=3){
        //     setDisableButtonNext("disable");
        // }
        else{
            setDisableButtonBack("");
            // setDisableButtonNext("");
        }
    })
    
    
    const handleBack=()=>{
        console.log("");
    }
    const handleSave=()=>{
        
    }
    const handleSaveNext=()=>{
        let body={}
        data.forEach(element => {
            delete element.current;
            delete element.id;
            for(let key in element){
                body[key]=element[key];
            }
            
        });
        console.log(body,"body")
        axios.post(`https://codebuddy.review/submit`,body).then((response)=>{
            console.log("post done! ", response);
            navigate('/post')
        }).catch((error)=>{
console.log(error," got error!");
        })
        
    }
  return (
    <div className='button-container'>
    <button className={disableButtonBack} onClick={handleBack}>Back</button>
    <button onClick={handleSave}>Save</button>
    <button  onClick={handleSaveNext}>Save and Next</button>
  </div>
  )
}
export default Button;
