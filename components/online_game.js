export function load_online_game()
{
class gameLocal extends HTMLElement{
    constructor(){
        super();
        

        fetch('../game/index.html')
        .then(response => response.text())
        .then(data => {
            this.innerHTML += `<style>
            @import './game/css/style.css';
            @import './game/css/game_style.css';
        </style>
            `;
            this.innerHTML += data;

        })
    }
}
customElements.define('game-online', gameLocal);
}