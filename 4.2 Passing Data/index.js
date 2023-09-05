import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var length=-1;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var h1="There are "+length+" letters in your name.";
  if(length==-1){
    h1="Enter your name below";
  }
  res.render("../index.ejs",{ title:h1});
});
app.post("/submit", (req, res) => {
  length=req.body.firstName.length;
  length+=req.body.lastName.length;
  var h1="There are "+length+" letters in your name.";
  if(length==-1){
    h1="Enter your name below";
  }
  res.render("../index.ejs",{ title:h1});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
