const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const contactList = document.querySelector('.contact-list');

let currentContact = null;
let authenticated_user;
// const conversations = {};
let contacts = [];
let room_name;
let chatSocket;

// const createMessageElement = (message) => {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message', message.sender === 'sara' ? 'sent' : 'received');
//     messageElement.innerHTML = `
//         <div class="message-sender">${message.sender}</div>
//         <div class="message-text">${message.text}</div>
//         <div class="message-timestamp">${message.timestamp}</div>
//     `;
//     return messageElement;
// };

const renderMessages = (contactId) => {
    chatMessages.innerHTML = '';
    if (conversations[contactId]) {
        conversations[contactId].forEach(message => {
            chatMessages.appendChild(createMessageElement(message));
        });
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

function create_web_socket(contact){
    let smallerId = Math.min(authenticated_user.id, contact.id);
    let largerId = Math.max(authenticated_user.id, contact.id);
    room_name = `${smallerId}_${largerId}`;

    console.log(`WebSocket room name: ${room_name}`);
    chatSocket = new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + room_name
        + '/'
    );
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        // document.querySelector('#chat-log').value += (data.message + '\n');
    };
    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };
}

const selectContact = (contact) => {
    create_web_socket();
    chatInputForm.reset();
    if (currentContact) {
        document.querySelector(`.contact[data-id="${currentContact.id}"]`).classList.remove('active');
    }
    currentContact = contact;
    document.querySelector(`.contact[data-id="${contact.id}"]`).classList.add('active');
    chatInput.placeholder = `Type here to ${contact.name}...`;
    renderMessages(contact.id);
};

// const sendMessage = (e) => {
//     e.preventDefault();
//     if (!currentContact) return;

//     const timestamp = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
//     const message = {
//         sender: 'sara',
//         text: chatInput.value,
//         timestamp,
//     };

//     if (!conversations[currentContact.id]) {
//         conversations[currentContact.id] = [];
//     }
//     conversations[currentContact.id].push(message);

//     renderMessages(currentContact.id);
//     chatInputForm.reset();
// };

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
    // console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

function fetchAllUsers() {
  fetch('http://127.0.0.1:8000/chat/users_list/')
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
  fetchAllUsers();
  fetchwhoAmI();
};

// chatInputForm.addEventListener('submit', sendMessage);





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










<!-- chat/templates/chat/room.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Chat Room</title>
</head>
<body>
    <textarea id="chat-log" cols="100" rows="20"></textarea><br>
    <input id="chat-message-input" type="text" size="100"><br>
    <input id="chat-message-submit" type="button" value="Send">
    {{ room_name|json_script:"room-name" }}
    <script>
        const roomName = JSON.parse(document.getElementById('room-name').textContent);

        const chatSocket = new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/chat/'
            + roomName
            + '/'
        );

        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            document.querySelector('#chat-log').value += (data.message + '\n');
        };

        chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };

        document.querySelector('#chat-message-input').focus();
        document.querySelector('#chat-message-input').onkeyup = function(e) {
            if (e.key === 'Enter') {  // enter, return
                document.querySelector('#chat-message-submit').click();
            }
        };

        document.querySelector('#chat-message-submit').onclick = function(e) {
            const messageInputDom = document.querySelector('#chat-message-input');
            const message = messageInputDom.value;
            chatSocket.send(JSON.stringify({
                'message': message
            }));
            messageInputDom.value = '';
        };
    </script>
</body>
</html>
