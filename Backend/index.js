import express from  'express';
import { MONGODBURL, PORT } from './config.js';
import mongoose  from 'mongoose';
import Routes from './Routes/BlogRoutes.js';
import cors from 'cors';

const  app = express();

//middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) =>{
   // console.log(req)
    return res.status(234).send("mernstack blog app");
});

app.use("/Blogs", Routes);

mongoose
.connect(MONGODBURL)
.then(() => {
    console.log( "connected to MongoDB" );

    app.listen(PORT , ()=>{
        console.log(`server is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
});

