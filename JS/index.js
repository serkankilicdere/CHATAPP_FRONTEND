document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const onlineButton = document.querySelector('.online-users-button button');
    const offlineButton = document.querySelector('.offline-users-button button');
    const onlineUsersList = document.querySelector('.online-users-list');
    const offlineUsersList = document.querySelector('.offline-users-list');
    const messageInput = document.querySelector('.input-message-area input');
    const sendButton = document.querySelector('.input-message-area button');
    const messageArea = document.querySelector('.sended-message-area');

    // Initially hide offline users
    offlineUsersList.style.display = 'none';

    // Online button click handler
    onlineButton.addEventListener('click', function() {
        onlineUsersList.style.display = 'block';
        offlineUsersList.style.display = 'none';
        onlineButton.classList.add('btn-primary');
        onlineButton.classList.remove('btn-secondary');
        offlineButton.classList.add('btn-secondary');
        offlineButton.classList.remove('btn-primary');
    });

    // Offline button click handler
    offlineButton.addEventListener('click', function() {
        onlineUsersList.style.display = 'none';
        offlineUsersList.style.display = 'block';
        offlineButton.classList.add('btn-primary');
        offlineButton.classList.remove('btn-secondary');
        onlineButton.classList.add('btn-secondary');
        onlineButton.classList.remove('btn-primary');
    });

    // Send message handler
    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageHTML = `
                <div class="sended-message my-message">
                    <div class="message-sender">You</div>
                    <div class="message-text">${messageText}</div>
                </div>
            `;
            messageArea.insertAdjacentHTML('beforeend', messageHTML);
            
            // Simulate received message (for demo purposes)
            setTimeout(() => {
                const receivedHTML = `
                    <div class="sended-message other-message">
                        <div class="message-sender">User1</div>
                        <div class="message-text">This is a response</div>
                    </div>
                `;
                messageArea.insertAdjacentHTML('beforeend', receivedHTML);
            }, 1000);
            
            messageInput.value = '';
        }
    });

    // Add enter key support for sending messages
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
