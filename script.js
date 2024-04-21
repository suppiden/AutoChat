document.addEventListener("DOMContentLoaded", function() {
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  // Función para agregar un mensaje al chat
  function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user-message" : "bot-message";
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll hasta abajo
  }

  // Función para enviar un mensaje del usuario
  function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== "") {
      addMessage(message, "user");
      simulateBotResponse(message);
      messageInput.value = "";
    }
  }

  // Función para simular una respuesta del bot
  function simulateBotResponse(userMessage) {
    // Aquí puedes simular la respuesta del bot como desees.
    // Por ejemplo, podrías tener un arreglo de respuestas y elegir una al azar.
    const botResponses = [
      "¡Hola! ¿En qué puedo ayudarte?",
      "¿Necesitas ayuda con algo específico?",
      "Estoy aquí para responder tus preguntas."
    ];
    const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];
    setTimeout(function() {
      addMessage(botMessage, "bot");
    }, 1000); // Simula un pequeño retraso antes de que el bot responda
  }

  // Evento click para el botón de enviar
  sendButton.addEventListener("click", sendMessage);

  // También puedes permitir enviar mensajes presionando Enter
  messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Simulación inicial para mostrar cómo funciona el chat
  simulateBotResponse();
});
