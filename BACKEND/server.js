import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("This is a checking .. . ")
})

app.listen(5000, ()=> {
    console.log("server is connected successfully!");
})