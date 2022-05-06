const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const PORT=process.env.PORT || 8000;


app.use(cors());
app.use(express.json());

const users = [
    {
        name: "sonu",
        password: "123"
    },
    {
        name: "May",
        password: "123"
    },
    {
        name: "Abc",
        password: "456"
    },
    {
        name: "XYZ",
        password: "789"
    }
]



app.post("/request", async (req, res)=>{
    
   let flag=0;
    const name = req.body.name;
    const password = req.body.password;
    for(let i = 0;i < users.length; i++){
        if(name == users[i].name)
        {
            if(password == users[i].password){
                  flag=1;
                  break;
            }
        }
    }
    if(flag == 0){
        res.send("Invalid username");
    } 

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
    
    res.send(result.data);
});

app.listen(PORT, ()=>{
    console.log("Listening to port ", PORT);
});
