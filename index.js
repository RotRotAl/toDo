import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import * as data from './data.js';

const date = new Date();
const app = express();
const port = 3000;
var tasks=[];
const  taskSchema= new mongoose.Schema({
  name:String
});
const Task=mongoose.model("Task",taskSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 
mongoose.connect(data.path(), {useNewUrlParser: true});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


app.get("/", async (req, res) => {
  try{
     
        var temptasks= await Task.find();
        tasks=[];
        temptasks.forEach((task)=>{tasks.push(task.name)});
    
  }
  catch(err){
    tasks=[];
    console.log(err);
  }

  res.render("../index.ejs",{today:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),tasks:tasks});
});
app.post("/submiJjt", (req, res) => {
    var val=req.body.newItem;
    const task=new Task({
      name:val,
  });
  task.save()
    res.redirect("/");
  });
  app.post("/clear", (req, res) => {
    tasks.length=0; 
    Task.deleteMany({_id:{$ne:null}})
    .then(function (tasks) {
      tasks.length=0; 
    })
    .catch(function (err) {
        console.log(err);
  });
  res.redirect("/");
 });

