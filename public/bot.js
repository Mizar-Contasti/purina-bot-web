window.addEventListener("df-messenger-loaded", () => {
  // Messenger is now ready.
  //   console.log("Messenger is now ready");
  //   const dfMessenger = document.querySelector("df-messenger");

  window.addEventListener("df-chip-clicked", (e) => {
    let chipText = e.detail.text;
    const dfMessengerBubble = document.querySelector(
      "df-messenger-chat-bubble"
    );
    if (chipText === "Just Browsing") {
      console.log(e);
      console.log("Just browsing");
      dfMessengerBubble.closeChat();
      // window.location.href = "https://www.nerdery.com";
    }
  });
});
