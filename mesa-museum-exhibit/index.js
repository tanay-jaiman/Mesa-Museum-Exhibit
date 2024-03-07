import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get("/", (req, res) => {
    res.send("<h1>MESA MUSEUM EXHIBITION</h1>");
})