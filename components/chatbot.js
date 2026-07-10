/* Chatbot component — injected into every page via this script */
(function () {
  const placeholder = document.getElementById('chatbot-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
<div id="chatbot-container">

  <div id="chatbot-window" role="dialog" aria-label="Chat with AMNIKON Support">
    <div class="chatbot-header">
      <div class="chatbot-header-icon">💬</div>
      <div class="chatbot-header-info">
        <h5>AMNIKON Support</h5>
        <span><span class="chatbot-status-dot"></span>Online</span>
      </div>
    </div>

    <nav class="chatbot-nav">
      <a href="../support/support.html">
        <span>💬</span>
        <span>Support</span>
      </a>
      <a href="mailto:sales@amnikon.com">
        <span>✉️</span>
        <span>Email</span>
      </a>
    </nav>

    <div class="chatbot-messages" id="chatbot-messages">
      <div class="chat-msg bot">👋 Hi! How can we help you today?</div>
      <div class="chat-msg bot">Ask me anything about our services, or use the quick links above.</div>
    </div>

    <div class="chatbot-input">
      <input type="text" id="chatbot-input" placeholder="Type your message…" autocomplete="off" />
      <button id="chatbot-send" aria-label="Send message">➤</button>
    </div>
  </div>

  <button id="chatbot-toggle" aria-label="Open chat">
    <svg class="chatbot-icon-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1565c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span class="close-icon">✕</span>
  </button>

</div>
`;
})();
