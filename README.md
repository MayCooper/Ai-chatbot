# Ai Chatbot with OpenAi APIs
Building a personal Ai chatbot with dynamic labels and speech functionalities that use the ChatGPT APIs. Built using Javascript, NodeJS, NPM Packages, HTML, CSS. Includes error handling and fallbacks. Additionally, it includes thorough error handling and fallbacks to ensure smooth operations even in unexpected scenarios.

# Background
This project is a construction of a personal AI chatbot that is built around the capabilities of the ChatGPT APIs. 

One unique feature of this chatbot is the use of dynamic labels and speech functionalities. These capabilities enable the chatbot to adapt to various conversational contexts and styles, thereby providing a more interactive and engaging user experience. The implementation of these functionalities also aligns with the ongoing trend of voice-interactive systems in the tech industry, pushing the boundaries of traditional text-based chatbots.

# Tech Stack
For the backend of the chatbot, I've chosen JavaScript along with NodeJS due to their wide usage and robust nature. These technologies offer a high degree of flexibility, making it easier to accommodate any changes or additions that might be required during the development process. Furthermore, NodeJS's non-blocking, event-driven architecture allows the chatbot to handle multiple interactions concurrently, enhancing its performance.

In addition to these, several Node Package Manager (NPM) packages are used to supplement the project, providing access to a myriad of tools and functionalities that simplify the development process and enhance the capabilities of the chatbot.

For the frontend, HTML and CSS have been used. These technologies are instrumental in creating a user interface that is visually appealing, user-friendly, and easy to navigate. This ensures that the chatbot can be used with ease, regardless of the user's technical proficiency.

Lastly, the project puts a strong emphasis on error handling and fallback strategies. This approach ensures that the chatbot can handle a wide range of potential issues, maintaining consistent responses and a smooth user experience even under unexpected circumstances. This attention to detail illustrates the project's commitment to reliability and user satisfaction.

# Some Errors
Some of the errors that came up through the work process, especially in deployment are the max tokens ChatGPT would take, as well as the type of model. 
#### Tokens Error
![image](https://github.com/MayCooper/Ai-chatbot/assets/82129870/f4c02785-6030-4fc2-a315-de8a4f421e5a)
#### Model type 
Free ChatGPT APIs only accept certain models. I kept getting an error that I had reached capacity when no query was actually executed. Part of the issue was the type of model (da-vinci) that I changed to Curie, and the other issue was the fact that I had to put in my credit card details in order for the free tier to be used.
![image](https://github.com/MayCooper/Ai-chatbot/assets/82129870/ab2aea3b-4e0f-4fa6-8a4b-bddf3ea18249)
#### Env variable OpenAi key error
![image](https://github.com/MayCooper/Ai-chatbot/assets/82129870/7b006223-c79a-44c7-94e9-ebb163dbf4b0)
In creating th



