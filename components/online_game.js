



export function load_online_game()
{
class gameLocal extends HTMLElement{
    constructor(){
        super();
        let vv = '';
        
        

        fetch('../game/index.html')
        .then(response => response.text())
        .then(data => {
            this.innerHTML += `<style>
            @import './game/css/style.css';
            @import './game/css/game_style.css';
        </style>
            `;
            this.innerHTML += data;
            
            setTimeout(() => {
                start_game();
                fetch('http://127.0.0.1:8000/api/user/', { method: 'GET', credentials: 'include', })
                    .then(response => response.json()) // Convert the response data to a JSON object
                    .then(data => {
                        console.log(data.name);
                       
                        this.querySelector('body > game-online > div > div > div.top > div.player_1 > span').innerHTML = data.name;
 
                    }); // Log the data
            }, 1000);
        })
    }
}
customElements.define('game-online', gameLocal);
}