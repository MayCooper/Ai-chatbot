const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

// Set defaults for OpenAI
let key = process.env.OPENAI_API_KEY;
key = key.substring(1, key.length-1);
const configuration = new Configuration({
    apiKey: key,
  });
const openai = new OpenAIApi(configuration);


// Execute call to openAI
async function runCompletion () {
  const completion = await openai.createCompletion({
    model: "text-curie-001",
    prompt: "How are you today?",
    max_tokens:2000
  });
  console.log(completion.data.choices[0].text);

}

runCompletion();