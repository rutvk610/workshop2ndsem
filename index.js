var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.static("root"));

let data = fs.readFileSync("./post.json") ;
let json = JSON.parse(data)
console.log(json);




app.use(express.json());
//get method api
app.get("/post",(req,res)=>{
   // json.push({"title":"yash","desc":"Patel"})
   res.send(json);
   //res.send(req,params)
   //res.send(req.query);
})

//post method api
app.post("/post",(req,res)=>{
	json.push(req.body);
	fs.writeFileSync("./post.json",JSON.stringify(json,null,2));
	
	res.send(json);

//json.push({"title":"Rutvik","desc":"Patel"});
  fs.writeFileSync("./post.json",JSON.stringify(json,null,2));
})



app.listen(3000,()=>{console.log("listening on port 3000")});
























