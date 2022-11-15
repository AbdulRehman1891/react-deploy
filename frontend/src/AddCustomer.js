import React from "react";
import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"
import axios from "axios";

const AddCustomer=()=>
{
    
    const [Customername, setCustomername] = useState(""); 
    const [email, setemail] = useState(""); 
    const [gender, setgender] = useState(""); 
    const [DOB, setDOB] = useState(""); 
    const [phonenumber, setphonenumber] = useState(""); 
    const [password, setpassword] = useState(0); 
     

    const addcustomer = ()=>{

      axios.post("http://localhost:3003/AddCustomer", {
        Customername,
        email,
        gender,
        DOB, 
        phonenumber,
        password, 
        
      }).then(
        alert("add successfully!")
        )
    }

    return(
       <>
        <div data-testid="Add" className="main-div">
        <div className="center">
        <br/>
          <br/>
          <h2>Sign Up</h2>
          <input  type="text" placeholder="Customer Name" onChange={(event)=>{setCustomername(event.target.value)}} ></input>
          <br/>
          <input  type="text" placeholder="Email"  onChange={(event)=>{setemail(event.target.value)}}></input>
          <br/>
          <input className="twoFields"  type="text" placeholder="Gender" onChange={(event)=>{setgender(event.target.value)}} ></input>
          <br></br>   
          <input className="username"  type="text" placeholder="DOB" onChange={(event)=>{setDOB(event.target.value)}} ></input>
          <br/>
         
          <input className="twoFields"  type="text" placeholder="PhoneNumber" onChange={(event)=>{setphonenumber(event.target.value)}} ></input>
          <br/>
          <input className="twoFields"  type="password" placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}} ></input>
          <br/>
          <button type="button" onClick={addcustomer}> Add </button>
          </div>

          

        </div>
       </>
           );
};

export default AddCustomer;