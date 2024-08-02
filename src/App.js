import React, { useEffect } from "react";
import Home from "./Home";
import AffiliateLogin from "./AffiliateLogin";
import AffiliateLoginRedirectHome from "./AffiliateLoginRedirectHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Dog from "./Dog";

// fonts
import "./fonts/Nexa/NexaRegular.otf";

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
    dfMessenger.setAttribute("project-id", "nerdery-tech-petfinder-poc");
    dfMessenger.setAttribute(
      "agent-id",
      "0e94fe28-a594-4488-8a59-fe39f6a93ff8"
    );
    dfMessenger.setAttribute("language-code", "en");
    dfMessenger.setAttribute("max-query-length", "-1");

    const chatBubble = document.createElement("df-messenger-chat-bubble");
    chatBubble.setAttribute("chat-title", "Dogs Room");
    dfMessenger.appendChild(chatBubble);

    document.body.appendChild(dfMessenger);

    // Insertar el estilo en línea
    const style = document.createElement("style");
    style.innerHTML = `
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #f3f6fc;
        --df-messenger-message-user-background: #d3e3fd;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
      }
    `;
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
        <Route path="/affiliate-login" element={<AffiliateLogin />}></Route>
        <Route
          path="/affiliate-login2"
          element={<AffiliateLoginRedirectHome />}
        ></Route>
        <Route path="/dog/:id/de/:city/:rescue" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
