import express from "express";

import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 5001;
const directory_name = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(directory_name + "/client/public/index.html")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})