// a file where we will be running our app
import express from  'express';
// importing the connect and disconnetc funtion of the db to connect the db and my server 
import {connectDB, disconnectDB} from "./config/db.js";




//
import cookieParser from "cookie-parser";

import "dotenv/config";


import userroutes from "./routes/userroutes.js";

import residence from "./routes/residence.js";

import rooms from "./routes/rooms.js";

import report from "./routes/report.js";



// connecting and diconnecting fucntion
connectDB();

 //i'm gonna use this when i shut down my server
//disconnectDB();


// creating the app
const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/rooms",rooms);
app.use("/api/residences",residence);

app.use("/api/users", userroutes);
app.use("/api/report",report )





 




// port that will listen to our server
const PORT = 5001;

const server = app.listen(PORT , ()=>
{
    //console.log('Server running on  PORT ${PORT}');

    console.log(`Server running on PORT ${PORT}`);
    //http://localhost:5001 - where we will run our port 
});



