import express from "express";

const app = express();
const port = 5001;

app.get("/api", (req, res) => {
    res.json({ "users" : ["user_one", "user_two"]})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})