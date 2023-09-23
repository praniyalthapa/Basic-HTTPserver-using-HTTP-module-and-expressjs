const express=require('express');
//create an express app object by calling the express function
const app = express();
const PORT=2000;

app.get('/', (request, response) => {
    response.send('Hello World!');
  });
  app.post('/home',function(req,res){
    res.send("welcome to home");
  });
  app.patch('/home',function (req,res){
    res.json({
      message:'This is inside patch',
      sucsess:true
    })
  })


app.listen(PORT,function process(){
    console.log("server started");
})