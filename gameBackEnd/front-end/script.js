
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const contactList = document.querySelector('.contact-list');



let currentContact = null;
let authenticated_user;

let contacts = [];
let room_name;
let chatSocket;
let socketReady = false;



const createMessageElement = (message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', message.sender === authenticated_user.name ? 'sent' : 'received');
    messageElement.innerHTML = `
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.content}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    `;
    return messageElement;
};



function create_web_socket(contact){
  let smallerId = Math.min(authenticated_user.id, contact.id);
  let largerId = Math.max(authenticated_user.id, contact.id);
  room_name = `${smallerId}_${largerId}`;

  chatSocket = new WebSocket(
      'ws://'
      + '127.0.0.1:8000/ws/chat/'
      + room_name
      + '/'
  );
  chatSocket.onopen = function(event) {
  console.log('WebSocket connection established');
  socketReady = true;
};

  chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    const message = data.message;
    const messageElement = createMessageElement(message);
    if (chatMessages)
    {
      chatMessages.appendChild(messageElement);
    }
    else
    {
        console.error("Chat message container not found.");
    }
  };
  chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
      setTimeout(() => create_web_socket(currentContact), 1000);
  };
}



const displayChatHistory = (messages) => {
  chatMessages.innerHTML = '';
  messages.forEach((message) => {
      const messageElement = createMessageElement({
          sender: message.sender,
          content: message.content,
          timestamp: new Date(message.timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      });
      chatMessages.appendChild(messageElement);
  });
};



const selectContact = (contact) => {
  if (!contact) return;

  create_web_socket(contact);
  chatInputForm.reset();

  if (currentContact) {
      const prevContactElement = document.querySelector(`.contact[data-id="${currentContact.id}"]`);
      if (prevContactElement) prevContactElement.classList.remove('active');
  }

  currentContact = contact;
  const currentContactElement = document.querySelector(`.contact[data-id="${contact.id}"]`);
  if (currentContactElement) currentContactElement.classList.add('active');

  chatInput.placeholder = `Type here to ${contact.name}...`;
  fetch(`http://127.0.0.1:8000/api/chat_history/${room_name}/`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          displayChatHistory(data.messages);
      })
      .catch(error => {
          console.error('There was a problem fetching the chat history:', error);
      });
};



const sendMessage = (e) => {
  e.preventDefault();

  if (socketReady && chatSocket.readyState === WebSocket.OPEN) {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      const message = {
          sender: authenticated_user.name,
          content: chatInput.value,
          timestamp,
      };
      chatSocket.send(JSON.stringify({ 'message': message }));
      chatInputForm.reset();
  } else {
      console.error("WebSocket is not open. Unable to send message.");
  }
};




const createContactElement = (contact) => {
    const contactElement = document.createElement('div');
    contactElement.classList.add('contact');
    contactElement.innerHTML = `<i class="fas fa-user"></i> ${contact.name}`;
    contactElement.addEventListener('click', () => selectContact(contact));
    return contactElement;
};



function fetchwhoAmI() {
  fetch('http://127.0.0.1:8000/api/user/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    authenticated_user = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}



function fetchAllUsers() {
  fetch('http://127.0.0.1:8000/api/users_list/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const allUsers = data;
      contacts = allUsers;
      contacts.forEach(contact => {
        const contactElement = createContactElement(contact);
        contactElement.setAttribute('data-id', contact.id);
        contactList.appendChild(contactElement);
      });

      if (contacts.length > 0) {
        selectContact(contacts[0]);
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}



window.onload = async () => {
   await fetchwhoAmI();
   await fetchAllUsers();
};








chatInputForm.addEventListener('submit', sendMessage);









// document.getElementById('chat-message-submit').addEventListener('click', async () =>{
//     const response = await fetch('http://127.0.0.1:8000/chat/facebook/', {
//         method: 'POST',
//         mode: 'cors',
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok)
//     {
//         const data = await response.json();
//         console.log(data);
//     }
// })











