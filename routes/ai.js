import express from "express";
const router = express.Router();
import OpenAI from "openai";

import * as aiController from "../controllers/aiController.js";


const openai = new OpenAI({apiKey: process.env.apiKey});

router.get("/", (req, res) => {
    const text="Tell me something about New Zealand in 50 characters";
    main();
});

router.route("/api/router").get(aiController.index);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Tell me something about New Zealand in 50 characters" }],
    model: "gpt-4o",
  });

  console.log(completion.choices[0].message.content);
}
main();

export default router;