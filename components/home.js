export function load_home()
{
class home extends HTMLElement {
    constructor(){
        super();
    this.innerHTML = `
    <style>
        @import './home/home.css';
    </style>
    <div class="home">
    <button  onclick="select_games();">PLAY NOW</button>
    </div>
    `;
    }
    // connectedCallback() {
    connectedCallback() {
        console.log("connected");
    }
}
customElements.define('home-elements', home);
}