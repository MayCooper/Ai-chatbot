# Chatbot Readme

This is a JavaScript code that implements a  chatbot using the `document.addEventListener("DOMContentLoaded",function(e){})` event. The chatbot allows users to interact with it by sending messages and receiving responses. It utilizes the OpenAI GPT-3.5-turbo model to generate responses to user queries.

## Usage

To use the chatbot, follow these steps:

1. Ensure that you have an API key from OpenAI. If you don't have one, please visit the OpenAI website and sign up to obtain an API key.

2. Replace the placeholder text `"Please your API key HERE TO CONTINUE"` in the `apiKey` variable with your actual API key. This will enable the chatbot to make API calls to OpenAI.

3. Open the HTML file that contains this JavaScript code in a web browser.

4. The chatbot will display a welcome message along with a randomly generated chatbot name. You can start interacting with the chatbot by entering messages in the user input field and clicking the "Send" button. The chatbot will respond to your messages based on the trained GPT-3.5-turbo model.

5. You can use the following special commands to interact with the chatbot:

   - `/help`: Displays a help message to provide assistance.
   - `/about`: Provides information about the chatbot.

6. The chatbot maintains a chat log where it displays both user messages and bot responses. You can click the "Clear" button to clear the chat history and start a new conversation.

7. The chatbot supports speech synthesis, allowing it to read messages aloud. You can click the "Read Current Message" button to have the chatbot read the last received message. The "Read All Messages" button will make the chatbot read out all the messages in the chat log.

8. If you have a microphone enabled, you can click the "Voice Input" button to start voice input. Speak your message, and the chatbot will process your speech and generate a response.

9. The chatbot also handles some error conditions, such as an invalid API key or a failed API response. Error messages will be displayed in the chat log.

## Dependencies

This code does not have any external dependencies and should work in any modern web browser that supports JavaScript.

## Notes

- Make sure to keep your API key confidential and do not share it publicly.

- The chatbot uses the OpenAI GPT-3.5-turbo model for generating responses. You may need to adjust the model or API parameters based on your OpenAI subscription and API usage.

- The code includes error handling for failed API requests or responses. If an error occurs, an error message will be displayed in the chat log.

- The chatbot includes support for speech synthesis using the Web Speech API. Please note that not all browsers may support this feature.

- The code includes event listeners for the "Enter" key press and "keydown" event on the user input field, allowing users to send messages by pressing the "Enter" key.

- The code checks for an active internet connection before sending a message to the chatbot. If the user is offline, an error message will be displayed.

- The maximum input length for user messages is commented out in the code. If you want to enforce a maximum length, you can uncomment the relevant lines and adjust the `maxInputLength` variable accordingly.

- The code includes a function to clear the chat history and display a welcome message when the "Clear" button is clicked.


## License



This code is provided under the [MIT License](https://opensource.org/licenses/MIT). You are free to modify and distribute it as per the terms of the license.