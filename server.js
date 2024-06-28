import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

});