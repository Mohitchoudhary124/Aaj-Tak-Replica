
import React, { useState, useEffect } from 'react';
import { FaComment } from 'react-icons/fa';
import '../css/Chatbot.css';

function Chatbot() {
  const [allMessages, setAllMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    setAllMessages([
      { text: "Welcome to the chatbot :)", sender: 'bot' },
      { text: "How can I assist you today?", sender: 'bot' }
    ]);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  const sendMessage = (text) => {
    setIsBotTyping(true);
    let response;
    switch (text.toLowerCase()) {
      case 'hello':response = "Hi there! How can I help you today?";
        break;
      case 'latest news':response = "Here are the latest news headlines...";
        break;
      case 'thanks':response = "You're welcome!";
        break;
        case 'how are you?':
  response = "I'm just a bot, so I'm always doing fine! How about you?";
  break;
case 'what can you do?':
  response = "I can provide information, answer questions, and even tell jokes!";
  break;
case 'tell me a joke':
  response = "Why don't scientists trust atoms? Because they make up everything!";
  break;
case 'who created you?':
  response = "I was created by a team of developers at Cloud1 web solutions .";
  break;
case 'what is your favorite color?':
  response = "I don't have eyes to see colors, but I like all colors!";
  break;
case 'how old are you?':
  response = "I don't have an age, I'm just a program!";
  break;
case 'where are you from?':
  response = "I exist in the digital realm, so I'm from the world wide web!";
  break;
case 'do you dream?':
  response = "Nope, I don't sleep, so I don't dream either!";
  break;
case 'what languages do you speak?':
  response = "I speak the language of code: JavaScript!";
  break;
case 'can you help me with programming?':
  response = "Of course! I can try my best to assist you with programming questions.";
  break;
case 'what is your purpose?':
  response = "My purpose is to assist users like you and make life a little easier!";
  break;
case 'how can I improve my coding skills?':
  response = "Practice regularly, work on projects, and don't be afraid to make mistakes!";
  break;
case 'what is the meaning of life?':
  response = "That's a deep question! The meaning of life is subjective and can vary from person to person.";
  break;
case 'tell me something interesting':
  response = "Did you know that the shortest war in history was between Britain and Zanzibar on August 27, 1896? It lasted only 38 minutes!";
  break;
case 'can you recommend a book?':
  response = "Sure! 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari is a fascinating read!";
  break;
case 'what is your favorite movie?':
  response = "I don't watch movies, but I've heard 'The Matrix' is quite popular among humans!";
  break;
case 'do you have any pets?':
  response = "I'm afraid not. I'm just a bunch of code, so I don't have any pets!";
  break;
case 'tell me about artificial intelligence':
  response = "Artificial intelligence is a branch of computer science that aims to create machines that can perform tasks that typically require human intelligence.";
  break;
case 'what do you do for fun?':
  response = "I don't have fun in the same way humans do, but I enjoy helping users like you!";
  break;
case 'are you a robot?':
  response = "Yes, I am a chatbot, a type of robot designed to simulate conversation with human users.";
  break;
  case 'what are the top headlines?':
  response = "Let me fetch the top headlines for you...";
  break;
case 'tell me about [specific topic] news':
  response = `Sure! Here's the latest news about...`;
  break;
case 'what is trending today?':
  response = "Let me find out what's trending today...";
  break;
case 'can you recommend a news website?':
  response = "Certainly! Some popular news websites include BBC News, CNN, The New York Times, and The Guardian.";
  break;
case 'how can I stay updated with the latest news?':
  response = "You can stay updated by regularly visiting news websites, subscribing to newsletters, or following news outlets on social media.";
  break;
case 'tell me about aajtak':
  response = `Sure! aajtak is a reputable news website known for providing reliable news coverage.`;
  break;
case 'what is fake news?':
  response = "Fake news refers to false information presented as legitimate news. It can be misleading and spread misinformation.";
  break;
case 'how can I identify fake news?':
  response = "You can identify fake news by verifying the source, checking for supporting evidence, and consulting multiple reputable sources.";
  break;
case 'tell me about fact-checking websites':
  response = "Fact-checking websites like Snopes, FactCheck.org, and PolitiFact specialize in verifying the accuracy of news and information.";
  break;
case 'why is unbiased reporting important?':
  response = "Unbiased reporting is important because it ensures that news is presented without favoritism or prejudice, allowing individuals to form their own opinions based on accurate information.";
  break;
case 'how do news websites make money?':
  response = "News websites often make money through advertising, subscriptions, donations, and sponsored content.";
  break;
case 'how are you':
  response = "i am good, thank you for asking";
  break;

      default:
        response = "I'm sorry, I didn't understand that.";
    }
    const newMessage = { text, sender: 'user' };
    const newResponse = { text: response, sender: 'bot' };

    setTimeout(() => {
      setAllMessages([...allMessages, newMessage, newResponse]);
      setIsBotTyping(false);
    }, 1000);
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    sendMessage(question);
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value;
    if (!userInput) return;
    if (!selectedQuestion) {
      sendMessage(userInput);
    } else {
      sendMessage(`${selectedQuestion}: ${userInput}`);
      setSelectedQuestion(null);
    }
    e.target.elements.userInput.value = '';
  };

  const clearChat = () => {
    setAllMessages([]);
  };

  const questions = ["what is your purpose?", "what can you do?", "tell me a joke", "can you help me with programming?", "what is your purpose?"];

  return (
    <div className="chatbot">
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <span className="chatbot-logo">Chat</span>
          <button className="minimize-btn" onClick={toggleChatbot}>-</button>
          <button className="close-btn" onClick={closeChatbot}>X</button>
        </div>
        <div className="chatbot-questions">FAQ's
          {questions.map((question, index) => (
            <div key={index} className="question user" onClick={() => handleQuestionSelect(question)}>
              {question}
            </div>
          ))}
        </div>
        <div className="chatbot-messages">
          {allMessages.map((message, index) => (
            <div key={index} className="message-container">
              {message.sender === 'user' ? (
                <div className="user-message">{message.text}</div>
              ) : (
                <div className="bot-message">{message.text}</div>
              )}
            </div>
          ))}
          {isBotTyping && (
            <div className="message-container">
              <div className="bot-message">Typing...</div>
            </div>
          )}
        </div>
        <form onSubmit={handleMessageSend}>
          <input type="text" name="userInput" placeholder="Pls type your message..." />
          <button type="submit">Send</button>
        </form>
        <div className="actions">
          <button className="clear-btn" onClick={clearChat}>Clear Chat</button>
        </div>
      </div>
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        <FaComment size={24} color="#fff" />
      </div>
    </div>
  );
}

export default Chatbot;
