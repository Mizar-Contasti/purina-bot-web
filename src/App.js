import React, { useEffect } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/bot.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Insertar el CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    document.head.appendChild(link);

    // Insertar el script
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    document.body.appendChild(script);

    // Insertar el HTML del chatbot
    const dfMessenger = document.createElement("df-messenger");
    dfMessenger.setAttribute(
      "chat-icon",
      "https://codexceleste.com/chatbotsOld/core/images/zaroc1.png"
    );

    dfMessenger.setAttribute(
      "chat-title-icon",
      "https://codexceleste.com/chatbotsOld/core/images/zaroc1.png"
    );
    dfMessenger.setAttribute("project-id", "nerdery-te-calendar-chatbot");

    dfMessenger.setAttribute(
      "agent-id",
      "5786a843-36d2-4a7c-bdb6-cce06eaab0ed"
    );
    dfMessenger.setAttribute("storage-option", "none");
    dfMessenger.setAttribute("language-code", "en");
    dfMessenger.setAttribute("max-query-length", "-1");
    dfMessenger.setAttribute("intent", "WELCOME");
    // dfMessenger.setAttribute("chat-title", "N");

    const dfMessengerChat = document.createElement("df-messenger-chat");

    dfMessengerChat.setAttribute("chat-title", "Emmett");
    dfMessengerChat.setAttribute("chat-subtitle", "Nerdery Chatbot");

    dfMessengerChat.setAttribute(
      "chat-title-icon",
      "https://www.nerdery.com/wp-content/uploads/2024/08/N-icon.png"
    );

    dfMessengerChat.setAttribute(
      "bot-actor-image",
      "https://www.nerdery.com/wp-content/uploads/2024/02/Nerdery-Featured-Image.png"
    );

    dfMessengerChat.setAttribute(
      "user-actor-image",
      "https://www.nerdery.com/wp-content/uploads/2024/02/Nerdery-Featured-Image.png"
    );

    // dfMessengerChat.setAttribute("bot-writing-image", "Thinking");

    // https://www.nerdery.com/wp-content/uploads/2024/02/Nerdery-Featured-Image.png

    const chatBubble = document.createElement("df-messenger-chat-bubble"); // sets icon on the bubble
    // chatBubble.setAttribute("chat-title", "N");

    dfMessenger.appendChild(chatBubble);
    dfMessenger.appendChild(dfMessengerChat);

    document.body.appendChild(dfMessenger);

    // Insertar el estilo en línea
    const style = document.createElement("style");
    style.innerHTML = `
      df-messenger {
        z-index: 999;
        position: fixed;
        bottom: 16px;
        right: 16px;
        --df-messenger-font-color: #252728;
        --df-messenger-font-family: Google Sans;

        --df-messenger-default-font-family: Google Sans;

        --df-messenger-primary-color: #252728;

        --df-messenger-titlebar-background: #FFC836;
        --df-messenger-titlebar-font-color:  #252728;
        --df-messenger-titlebar-icon-font-color:  #252728;
      
        
        --df-messenger-chat-bubble-icon-color: #252728;
        --df-messenger-chat-bubble-background: #FFC836;
        --df-messenger-chat-bubble-border-radius: 32px;
        --df-messenger-chat-bubble-border: 5px solid #FFF6E9;

        --df-messenger-chat-background: #F1F1F1;

        --df-messenger-message-bot-background: #FFC836;
        --df-messenger-message-user-background: #ffebb5;

        --df-messenger-chat-scroll-button-background: #FFC836;
        --df-messenger-chat-scroll-button-font-color: #252728;

        --df-messenger-chat-border:0px solid #252728;

        --df-messenger-messagelist-border: 0px solid #252728;

      }
    `;

    // --df-messenger-chat-border-radius: 10px;
    // --df-messenger-message-border: 5px;
    // --df-messenger-message-bot-border: 5px;

    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      document.body.removeChild(dfMessenger);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
