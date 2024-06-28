import express from "express";
const router = express.Router();
import OpenAI from "openai";
import * as aiController from "../controllers/aiController.js";

import "dotenv/config";

const openai = new OpenAI({apiKey: process.env.apiKey});

router.get("/", (req, res) => {
    const text = "Tell me something about egypt in 100 characters";
    main(text, res);
});

router.route("/api/router").get(aiController.index);

async function main(text, res) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: text }],
            model: "gpt-4",
        });

        const response = completion.choices[0].message.content;

        console.log(response);
        res.send(response); 

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred while processing your request.");
    }
}

export default router;
