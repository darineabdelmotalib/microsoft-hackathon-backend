import "dotenv/config";
import express from "express";
import cors from "cors";
import ai from "./routes/ai.js";


const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.get("/", (_req, res) => {
    res.send("Reached backend")
});

app.use("/ai", ai);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

