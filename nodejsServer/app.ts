import express,{Request,Response} from 'express';
var loginrouter = require('./routes/login')

const app = express();
const port = 3000;


app.get("/",function (req:Request,res:Response){
  res.send("Hello!");

})

app.get("/about",(req:Request,res:Response)=>{
  res.send("about!");

})


app.use ('/login',loginrouter)

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});