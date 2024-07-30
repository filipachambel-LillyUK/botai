import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const port = 3005;
const openai = new OpenAI({ apiKey: apiKey});

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

try {
   
app.post("/chatbot", async (req, async) => {
    const {question} = req.body;
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: "system", //chatbot has a system role
                content: "You are a helful assistant."
            },
            {
                role: "user", 
                content: question
            },
        ],
        model: "gpt-3.5-turbo",
       // max_tokens: 300, //message is limited to 300 tokens to ensure is not too long
    });
    response.send(response.choices[0].message.content); //takes the text res and displays it on the server side

})
} catch (error) {
    console.error("Error connecting to the server", error);
}