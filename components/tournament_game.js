export function load_tournament_game()
{
class gameLocal extends HTMLElement{
    constructor(){
        super();
    this.innerHTML = `
    <style>
        @import './game/css/style.css';
        @import './game/css/game_style.css';
    </style>
    <div class="conatainer">
        <div class="gametable">
            <div class="top">
                <div class="player_1">
                    <img src="../game/img/player_4.svg" alt="player 1">
                    <span>player_1</span>
                </div>
                <div class="score">
                    <span class="left_scor" id="left_scor">0</span>
                    <span style="color: #FFB71A;">:</span>
                    <span class="right_scor" id="right_scor" >0</span>

                </div>

                <div class="player_2">
                    <span>player_2</span>
                    <img src="../game/img/player_5.svg" alt="player 1">
                </div>
            </div>
            <canvas class="table" id="table"></canvas>

            <div class="buttom">
                <div class="player_1_option">
                    <div class="wall">
                        <img src="../game/img/wall_icon.svg" alt="">
                    </div>
                    <div class="speed">
                        <img src="../game/img/speed_icon.svg" alt="">
                    </div>
                    <div class="long_rockit">
                        <img src="../game/img/long_rockit.svg" alt="">
                    </div>
                </div>
                <div class="logo">
                    <img src="../game/img/logo.svg" alt="">
                </div>
                <div class="player_2_option">
                    <div class="wall">
                        <img src="../game/img/wall_icon.svg" alt="">
                    </div>
                    <div class="speed">
                        <img src="../game/img/speed_icon.svg" alt="">
                    </div>
                    <div class="long_rockit">
                        <img src="../game/img/long_rockit.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `;
    }
    connectedCallback() {
        setTimeout(() => {
            fetch('http://127.0.0.1:8080/api/lol/', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let name1 = document.querySelector('body > game-local > div > div > div.top > div.player_1 > span');
            let name2 = document.querySelector('body > game-local > div > div > div.top > div.player_2 > span');
            if (data.length === 8) {
                let i = 0;
                while (i < data.length) {
                    if (data[i].level1 == 0) {
                        name1.innerHTML = data[i].name;
                        i++;
                    }
                    if (data[i].level1 == 0) {
                        name2.innerHTML = data[i].name;
                        break;
                    }
                    i++;
                }




                while (i < data.length) {
                    if (data[i].level1 == 5) {
                        name1.innerHTML = data[i].name;
                        i++;
                    }
                    if (data[i].level1 == 5) {
                        name2.innerHTML = data[i].name;
                        break;
                    }
                    i++;
                }







            } else {
                console.error('Not enough player data received.');
            }
        })
        .catch(error => console.error('Error:', error));
        }, 300);

        setTimeout(() => {
            tournament_game_logic('player1', 'player2'); 
        }, 300); 
    }

    disconnectedCallback() {
        // let name1 = document.querySelector('body > game-local > div > div > div.top > div.player_1 > span').innerHTML;
        // let name2 = document.querySelector('body > game-local > div > div > div.top > div.player_2 > span').innerHTML;
        // console.log("====================================");
        // console.log(name1, name2);
        // console.log("====================================");
        // fetch('http://127.0.0.1:8080/api/lol/', {
        //                 method: 'PUT',
        //                 headers: { 'Content-Type': 'application/json' },
        //                 body: JSON.stringify({ name: "p1", level1: -1 })
        //             })
        //             .then(response => response.json())
        //             .then(() => {
        //                 return fetch('http://127.0.0.1:8080/api/lol/', {
        //                     method: 'PUT',
        //                     headers: { 'Content-Type': 'application/json' },
        //                     body: JSON.stringify({ name: "p2", level1: 5 })
        //                 });
        //             })
        //             .then(response => response.json())
        //             .then(() => {
        //                 // luanch_tournament('dddd', 'dddd');
        //                 console.log('disconnected');
        //             })
        //             .catch(error => {
        //                 console.error('Error:', error);
        //             });
        //     setTimeout(() => {
        //          console.log('disconnected');
        //     }, 300);
    }
}
customElements.define('game-local', gameLocal);
}