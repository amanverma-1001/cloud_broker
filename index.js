const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const port=process.env.port || 8000;


app.use(cors());
app.use(express.json());

const users = [
    {
        name: "sonu",
        password: "123"
    },
    {
        name: "Aman",
        password: "aman"
    },
    {
        name: "Rishab",
        password: "rishab"
    },
    {
        name: "Atish",
        password: "atish"
    }
]


app.get("/",(req, res) => {
    res.send("hii Aman");
});


app.post("/authenticate", async (req, res)=>{
    
   let flag=0;
   console.log(req.body);
    const name = req.body.name;
    const password = req.body.password;
    for(let i = 0;i < users.length; i++){
        if(name == users[i].name)
        {
            if(password == users[i].password){
                  flag=1;
                  return res.status(200).send("Valid User");
            }
        }
    }
    
        return res.status(201).send("Invalid username");
    




  /*   var postData = {
        expr:req.body.ex
      };
      
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
      };
    
    const result = await axios.post(`http://api.mathjs.org/v4`,postData,axiosConfig);
    console.log(result.data);
   */  
   
});

app.post("/calculate",async(req, res)=>{
    console.log(req.body);
    var postData = {
        expr:req.body.ex
      };
      
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
      };
    
    const result = await axios.post(`http://api.mathjs.org/v4`,postData,axiosConfig);
    console.log(result.data);
     return res.send(result.data.result);
});




app.listen(port, ()=>{
    console.log("Listening to port ");
});
