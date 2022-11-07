import  { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './index.css';


const EditCustomer=()=>{

    const [Customername, setCustomername] = useState(""); 
    const [email, setemail] = useState(""); 
    const [gender, setgender] = useState(""); 
    const [DOB, setDOB] = useState(""); 
    const [phonenumber, setphonenumber] = useState(""); 
    const [password, setpassword] = useState(0); 
    const[id,setid]=useState("");
    const[Data,setData]=useState([]);
    const[RowData,setRowData]=useState([]);
    const[ViewShow,setViewShow]=useState(false)


    const[Delete,setDelete]=useState(false)
    const handleViewShow=()=>
    {
        setViewShow(true)
    }
    const handleViewClose=()=>
    {
        setViewShow(false)
    }
    const[ViewEdit,setViewEdit]=useState(false)
    const handleViewEdit=()=>
    {
        setViewEdit(true)
    }
    const handleViewEditClose=()=>
    {
        setViewEdit(false)
    }
    const handleEdit=()=>
    {
      const url=`http://localhost:3003/UpdateCustomer/${id}`
      const Credentials = { Customername, email, gender, DOB, phonenumber,password }
      axios.put(url, Credentials)
          .then(response => {
              const result = response.data;
              const { status, message } = result;
              if (status !== 'SUCCESS') {
                  alert(message, status)
              }
              else {
                  alert(message)
                  window.location.reload()
              }
          })
          .catch(err => {
              console.log(err)
          })
    }
    

        useEffect(()=>{
            axios.get("http://localhost:3003/GetCustomer")
            .then((response)=>{
                setData(response.data); 
            }); 

        },[]); 

        const handleDelete=()=>
        {
          const url=`http://localhost:3003/DeleteCustomer/${id}`
          axios.delete(url).
          then(response=>{
            const result=response.data;
            const{status,message}=result;
            if(status!="SUCCESS")
            {
              alert(message,status)
            }
            else{
              alert(message)
              window.location.reload();
            }


          })
          .catch(err=>{
            console.log(err);
          })
        }
      
    return(
        <div>
           <div className="viewtable">
           <table class="table table-scriptred table-hover table-bordered">
  <thead>
    <tr>
      
      <th scope="col">Customername</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">DOB</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {Data.map((item)=>
    {
        return (
        <tr >
           
            <td>{item.Customername}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.DOB}</td>
            <td>{item.phonenumber}</td>
            <td>{item.password}</td>
            <td style={{minWidth:190}}>
            <Button size="sm" variant="primary" onClick={()=>{handleViewShow(setRowData(item))}}>View</Button>
            <Button size="sm" variant="warning"  onClick={()=>{handleViewEdit(setRowData(item),setid(item._id))}}>Edit</Button>
            <Button size="sm" variant="danger"   onClick={()=>{handleViewShow(setRowData(item),setid(item._id),setDelete(true))}}>Delete</Button>
            </td>
            
        </tr>
        )
    })}
        </tbody>
        </table>
        </div>

                    <div class="modal" tabindex="-1" >
     <Modal show={ViewShow}
     onHide={handleViewClose}
     backdrop="static"
     keyboard={false}>
      <div className="modal-header" >
        <h5 className="modal-title">Customer Data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleViewClose}> </button>
      </div>
      <div className="modal-body">
                    <div className="form-group">
                    <input type="text" className="form-control" value={RowData.Customername} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.email} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.gender} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.DOB} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.phonenumber} readOnly/>
                    </div>
                    <div className="form-group mt-3">
                    <input type="text" className="form-control" value={RowData.password} readOnly/>
                    </div>
                    {
                      Delete &&(
                        <Button type="submit" className="btn btn-danger mt-4" onClick={handleDelete}>Delete Customer</Button>
                      )
                    }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleViewClose}>Close</button>
      </div>
      </Modal>
</div>

<div class="modal" tabindex="-1" >
     <Modal show={ViewEdit}
     onHide={handleViewEditClose}
     backdrop="static"
     keyboard={false}>
      <div className="modal-header" >
        <h5 className="modal-title">Edit Customer</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleViewEditClose}> </button>
      </div>
      <div className="modal-body">
                    <div className="form-group">
                    <label>customer_name</label>
                    <input type="text" className="form-control" placeholder="Customer Name" onChange={(event)=>{setCustomername(event.target.value)}}    defaultValue={RowData.Customername}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>email</label>
                    <input type="text" className="form-control" placeholder="email"  onChange={(event)=>{setemail(event.target.value)}}  defaultValue={RowData.email}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>gender</label>
                    <input type="text" className="form-control"  placeholder="gender" onChange={(event)=>{setgender(event.target.value)}}    defaultValue={RowData.gender}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>DOB</label>
                    <input type="text" className="form-control" placeholder="DOB" onChange={(event)=>{setDOB(event.target.value)}}  defaultValue={RowData.DOB}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>phonenumber</label>
                    <input type="text" className="form-control"  placeholder="PhoneNumber" onChange={(event)=>{setphonenumber(event.target.value)}}   defaultValue={RowData.phonenumber}/>
                    </div>
                    <div className="form-group mt-3">
                    <label>password</label>
                    <input type="text" className="form-control"  placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}  defaultValue={RowData.password}/>
                    </div>
                    <Button type="submit" className="btn btn-warning mt-4" onClick={handleEdit}>Update Customer</Button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleViewEditClose}>Close</button>
      </div>
      </Modal>
      </div>
            </div>
           
       

        
    );
}

export default EditCustomer;