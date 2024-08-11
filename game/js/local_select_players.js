export function local_players() {
    class localPlayer extends HTMLElement
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
                @import './img';
                </style>
                <div class="select_player">
                <img src="/img/vs_icon.svg" class="vs" alt="">
                <div class="player player_1">
                    <img src="/img/triangle_w.svg" class="threangl">
                    
                    <h3>player_1</h3>
                </div>
                
                <div class="player player_2">
                    <img src="/img/triangle_y.svg" class="threangl">
                    <h3>player_2</h3>
                </div>     
            </div>
        `;
    }
    }
    customElements.define('my-counter', localPlayer);
}

