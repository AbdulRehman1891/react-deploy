const express = require("express"); 

const cors = require("cors"); 

const customerMOdel = require("./Customer"); 

const app = express()

const mongoose = require("mongoose"); 

// mongoose.connect("mongodb+srv://mirzasheraz:mirza123@cluster0.tryltpz.mongodb.net/assignment-01?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://AR:waqas@cluster0.x5zfxfd.mongodb.net/assignment-01?retryWrites=true&w=majority");
app.use(cors())
app.use(express.json()); 

app.listen(3003, () => {

    console.log("server runs perfectly"); 
})

app.post("/AddCustomer", async(req, res)=>{


    try{
        const customer = req.body;
        const addNew = new customerMOdel(customer);
        await addNew.save(); 
        res.json(customer);  
    }catch(err){
        console.log(err); 
    }
})

app.get("/GetCustomer",(req, res)=>
{

    customerMOdel.find({},(err,result)=>{

        if(err){
            res.json(err); 
        }
        else{
            res.json(result); 
        }
    })
})

app.put("/UpdateCustomer/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const result = await customerMOdel.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
    
})

app.delete("/DeleteCustomer/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await customerMOdel.findByIdAndDelete(_id);
        if(result)
        {
            res.json({
                status: "SUCCESS",
                message: "Record Deleted..."
            })
        }
        else{
            res.json({
                status: "Failed",
                message: "Record Not Deleted..."
            })
        }
    }
    catch(e){
        res.send(e)
    }
})

