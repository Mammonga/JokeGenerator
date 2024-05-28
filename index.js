import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;
const API_URL="https://v2.jokeapi.dev/joke"

app.use(express.static(__dirname + '/public'));

app.get("/",async (req,res)=>{
    const response=await axios.get(API_URL+"/Any");
    const data=response.data;
    console.log(data);

    res.render("index.ejs",{content: data});
})

app.listen(port, ()=>{
    console.log("Server is running on Port: "+port);
})