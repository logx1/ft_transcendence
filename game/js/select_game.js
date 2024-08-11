

export function select_game() {
    class MYcounter extends HTMLElement
    {
        constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        }
        connectedCallback() {
            this.render();
            
        }
        render() {
        this.shadow.innerHTML = `
                <style>
                @import './css/style.css';
                </style>
                <div class="menu">
                <div class="selectgame">
                    <div class="card b_local">
                        <p>Ping pong online has become a popular way for players to enjoy the classic game from the comfort of their own homes. With the rise of online gaming platforms and virtual reality technology, it's now possible to play ping pong against opponents from all around the world. Players can choose from a variety of game modes, including singles, doubles, and tournaments, and even customize their experience with different tables, paddles, and balls.</p>
                        <button onclick="select_local()">LOCAL</button>
                    </div>
                    <div class="card b_online">
                        <p>Ping pong online has become a popular way for players to enjoy the classic game from the comfort of their own homes. With the rise of online gaming platforms and virtual reality technology, it's now possible to play ping pong against opponents from all around the world. Players can choose from a variety of game modes, including singles, doubles, and tournaments, and even customize their experience with different tables, paddles, and balls.</p>
                        <button onclick="select_game()">ONLINE</button>
                    </div>
                    <div class="card b_bot">
                        <p>Ping pong online has become a popular way for players to enjoy the classic game from the comfort of their own homes. With the rise of online gaming platforms and virtual reality technology, it's now possible to play ping pong against opponents from all around the world. Players can choose from a variety of game modes, including singles, doubles, and tournaments, and even customize their experience with different tables, paddles, and balls.</p>
                        <button onclick="">BOT</button>
                    </div>
                </div>
            </div>
        `;
    }
    }
    customElements.define('my-counter', MYcounter);
}


