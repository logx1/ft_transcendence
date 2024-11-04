export function load_chat()
{
class chat extends HTMLElement {
    constructor(){
        super();
    this.innerHTML = `
    <style>
        @import './styles/chat/chat.css';
    </style>
    <div class="app-container">
    <div class="contact-list"></div>
    <div class="chat-container">
        <div class="chat-messages"></div>
        <form class="chat-input-form">
            
            <input type="text" class="chat-input" rsouequired placeholder="Type here, sara..">
            <button type="submit" class="button send-button">Send</button>
        </form>
    </div>
</div>
    `;
    }
    connectedCallback() {
        console.log("connected to chat page");
    }
}
customElements.define('chat-elements', chat);
}