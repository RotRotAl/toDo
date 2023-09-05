import express from "express";
import bodyParser from "body-parser";

const date = new Date();
const app = express();
const port = 3000;
var tasks=[];
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


app.get("/", (req, res) => {
   
  res.render("../index.ejs",{today:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),tasks:tasks});
});
app.post("/submit", (req, res) => {
    var val=req.body.newItem;
    if(val!==""&&val!==null&&tasks.indexOf(val)==-1)
    tasks.push(val);
    res.render("../index.ejs",{today:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),tasks:tasks});
  });
  app.post("/clear", (req, res) => {
    tasks.length=0; 
 
   res.render("../index.ejs",{today:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),tasks:tasks});
 });

