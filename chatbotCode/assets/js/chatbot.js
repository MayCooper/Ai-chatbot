document.addEventListener("DOMContentLoaded", () => {
    // Initialize chatbot name, chat log, and buttons
    
    let chatbotName = "May's ChatBot";
    let chatLog = document.getElementById("chat-log");
    let sendBtn = document.getElementById("send-btn");
    let userInput = document.querySelector(".user-input");
    let apiKey = "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";
    let apiUrl = "https://api.openai.com/v1/chat/completions";
    let clearBtn = document.getElementById("clear-btn");
    const readCurrentMessage = document.getElementById("message-reader-btn");
    const readAllMessages = document.getElementById("conversation-reader-btn");

    // Set the chatbot's name on page load
    setChatBotName();

    // Add event listeners for various actions
    clearBtn.addEventListener("click", clearChat);
    sendBtn.addEventListener("click", handleSendClick);
    userInput.addEventListener("keypress", handleKeyPress);
    readCurrentMessage.addEventListener("click", handleReadCurrentMessage);
    readAllMessages.addEventListener("click", handleReadAllMessages);
    document.getElementById('voice-btn').addEventListener('click', startVoiceInput);

    function setChatBotName() {
        // Randomly generate a chatbot name
        chatbotName = generateChatbotName();

        // Display the chatbot's name
        document.querySelector(".chatbot-name").textContent = chatbotName;

        // Set the page title to the chatbot's name
        document.title = chatbotName;

        // Show a welcome message
        showWelcomeMessage(chatbotName);
    }

    function generateChatbotName() {
        // Possible adjectives and nouns for the chatbot's name
        const adjectives = ["Amazing","Brilliant","Creative","Dynamic","Energetic"];
        const nouns = ["Bot","Assistant","Companion","Guide","Helper"];

        // Randomly select an adjective and a noun
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

        // Combine the adjective and noun to form a name
        return `${randomAdjective} ${randomNoun}`; 
    }

    function showWelcomeMessage(chatName) {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = `Welcome to ${chatName}! How can I assist you today?`
    }

    function clearChat() {
        // Clear the chat history and display a welcome message
        clearChatHistory();
        displayMessage("received", `Welcome to ${chatbotName}! How can I assist you today?`);
    }

    function clearChatHistory() {
        // Remove all messages from the chat log
        while (chatLog.firstChild) {
            chatLog.firstChild.remove();
        }
    }

    async function handleSendClick() {
        // Get the user's message and trim any leading/trailing whitespace
        let userMessage = userInput.value.trim();

        // Don't do anything if the message is empty
        if (!userMessage) return;

        // Check if the user is online
        if (!checkInternetConnection()) {
            displayMessage("error", "Sorry, you are offline. Please check your internet connection");
            return;
        }

        // Handle special commands or regular messages
        if (userMessage.startsWith("/")) {
            processSpecialCommand(userMessage.toLowerCase());
        } else {
            processChatMessage(userMessage);
        }

        // Clear the input field
        userInput.value = "";
    }

    function processSpecialCommand(command) {
        // Handle special commands
        switch (command) {
            case "/help":
                displayMessage("sent", "You can ask me questions or seek assistance. How may I help you?");
                break;
            case "/about":
                displayMessage("sent", "I am a chatbot designed to assist you. Feel free to ask me anything!");
                break;
            default:
                displayMessage("sent", "I'm sorry, I don't understand that command. Type /help for assistance.");
                break;
        }
    }

    async function processChatMessage(message) {
        // Check for an API key
        if (!apiKey) {
            displayMessage("error", "No API Key is provided. Unable to send message");
            return;
        }

        // Try to send the chat message
        try {
            displayMessage("sent", message);
            let response = await sendChatMessage(message);
            if (response) {
                displayMessage("received", response);
            }
        } catch (error) {
            console.error(error);
            displayMessage("error", "Error: Failed to fetch response from the API");
        }
    }

    async function sendChatMessage(message) {
        // Prepare the request data
        let data = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "system", "content": "Welcome to Curious Advisor! How can I assist you today?" },
                { role: "user", content: message }
            ]
        };

        showLoadingIndicator();

        try {
            // Send the request
            let response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(data)
            });

            // Check for a successful response
            if (!response.ok) {
                throw new Error("An error occurred while sending the chat message.");
            }

            // Get the chatbot's response
            let responseData = await response.json();
            if (responseData && responseData.choices && responseData.choices.length > 0) {
                let botResponse = responseData.choices[0].message.content;
                hideLoadingIndicator();
                return botResponse;
            } else {
                handleAPIError(responseData);
            }
        } catch (error) {
            console.error(error);
            displayMessage("error", "Sorry an error occurred. Please try again!");
        }
    }

    function handleKeyPress(event) {
        // Send the message when the user presses Enter
        if (event.key === "Enter") {
            event.preventDefault();
            sendBtn.click();
        }
    }

    function displayMessage(type, message) {
        // Create a new message element
        let messageContainer = document.createElement("div");
        messageContainer.classList.add("message", type);
        let messageText = document.createElement("p");
        messageText.textContent = message;

        // Add the message text to the message element
        messageContainer.appendChild(messageText);

        // Add the new message to the chat log and scroll to the bottom
        chatLog.appendChild(messageContainer);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function checkInternetConnection() {
        // Check if the user is online
        return navigator.onLine;
    }

    function showLoadingIndicator() {
        // Show the loading indicator
        document.getElementById("loading-indicator").style.display = "flex";
    }

    function hideLoadingIndicator() {
        // Hide the loading indicator
        document.getElementById("loading-indicator").style.display = "none";
    }

    function handleReadCurrentMessage() {
            // Read the last message aloud
            const currentMessage = document.querySelector(".message:last-child");
            if (currentMessage) {
                const message = currentMessage.textContent;
                readMessage(message);
            }
        }
    
        function handleReadAllMessages() {
            // Read all messages aloud
            const chatMessages = document.getElementsByClassName("message");
            const messages = Array.from(chatMessages).map(message => message.textContent);
            messages.forEach(message => readMessage(message));
        }
    
        function readMessage(message) {
            // Check for speech synthesis support
            if (window.speechSynthesis && typeof SpeechSynthesisUtterance === "function") {
                const utterance = new SpeechSynthesisUtterance(message);
                window.speechSynthesis.speak(utterance);
            } else {
                displayMessage("error", "Invalid Message or unsupported browser");
            }
        }

        function startVoiceInput() {
            // Initialize voice recognition
            const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
            recognition.lang = 'en-US';

            // Handle voice recognition results
            recognition.onresult = function (event) {
                const transcript = event.results[event.results.length - 1][0].transcript;
                if (transcript.trim() !== "") {
                    processVoiceInput(transcript);
                }
            };

            // Handle voice recognition errors
            recognition.onerror = function (event) {
                console.error(event);
                fallbackToTextInput();
            };

            // Start voice recognition
            recognition.start();
        }

        function processVoiceInput(transcript) {
            // Process voice input
            userInput.value = transcript;
            handleUserInput();
        }

        function fallbackToTextInput() {
            // Fallback to text input
            userInput.focus();
        }

        function handleUserInput() {
            // Handle user input
            const message = userInput.value;
            if (message.length > 0) {
                sendBtn.click();
                userInput.value = "";
            }
        }
    });


