const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./Router");
const PORT = 3000;

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    try {
        res.status(200).send({ msg: "mongodb connected" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error });
    }
});


app.use("/",router);

const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
  app.listen(prompt,()=>{
    console.log("The server is running on the port 3000");
  });
}).catch((err)=>{
  return res.status(500).send("Something went wrong",err);
  console.log("Something went wrong",err);
});