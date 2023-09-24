
//NOTE: As HTTPS is a standard Node. js module, there's been no need for a package
//https://brave.com/glossary/server/
//https://medium.com/from-the-scratch/http-server-what-do-you-need-to-know-to-build-a-simple-http-server-from-scratch-d1ef8945e4fa
//https://medium.com/@gabriellamedas/the-http-server-explained-c41380307917
//using http module given by node we will be setting up out basic server;
const http=require('http');
const PORT=3000;
/**
 http module contains a function called as createServer
 this createserver function takes a callback as the input
the createserver function returns us server object.
Now inside a callback we get two arguments the first is request and second is response.
request-> this argument contains all the detail about the incoming request.
response->this argument contains functions using which we can prepare the responses.
After creating a server we have to start the server using server.listen(PORT);
response.end is always printed in your screen if it match a condition. and response.url shows your exact request after / in browser url.
 */


 const server=http.createServer(function exec(request,response){
    // console.log(request.method);
    if(request.url=='/home'){
        response.end("Welcome to home");
    }
    else if (request.url=='/faq'){
        response.end("List of FAQ's");
    }
    else{
        response.end("Hello world");
    }
  


 });
 server.listen(PORT,function process(){
    //once the server is started then this callback will be executed;
    console.log("server started on port",PORT);
 });