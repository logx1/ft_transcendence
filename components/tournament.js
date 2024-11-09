export function load_tournament()
{
class tournament extends HTMLElement {
    constructor(){
        super();
    this.innerHTML = `
    <style>
    @import '../styles/tournament/create.css';
    </style>
    <div class="container">
    <div class="create">
        <div class="head">
            <h1>Create Tournament</h1>
        </div>
        <div class="body">
            <div class="playerimg">
                <img src="../styles/tournament/img/1.png" alt="">
            </div>
            <div class="playername">
                <input id="usename" type="text" placeholder="username" value="username">
            </div>
        </div>
        <div class="buttom">
            <span id="error"></span>
            <button id= "create" onclick="create()" value="1">NEXT ></button>
        </div>
    </div>
</div>
    `;
    }
    connectedCallback() {
        fetch('http://127.0.0.1:8080/api/lol/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
}

customElements.define('tournament-elements', tournament);
}

