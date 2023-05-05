import express from "express";

const app = express();
app.get("/test", (req, res) => {
    res.json("test is ok");
})

app.listen(4000)