import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;




app.get("/", (req, res) => {
    var msg = "a weekday, its time to work hard!";
    const d = new Date();

    if(d.getDay()>=5)
    {
        var msg = "the weekend, its time to have fun!";
    }
  res.render(__dirname+"/index.ejs",{msg: msg});
});



app.listen(port, () => {
 
});
