export function load_newhome()
{
class newhome extends HTMLElement {
    constructor(){
        super();
    this.innerHTML = `
    <style>
        @import '../styles/home/home.css';
        @import '../styles/sidebar/sidebar.css';
    </style>
    <div class="sidebar-container">
    <div class="small-sidebar-container">
        <button class="small-sidebar-icon" onclick="sss()"></button>
    </div>
    <div class="logo-container"></div>
    <div class="menu-container">
        <div class="user-chat-container">
            <button class="user-chat-icon"></button>
            <button class="user-chat-text" id="user-chat-text">Chat</button>
        </div>
        <div class="user-settings-container">
            <button class="user-settings-icon"></button>
            <button class="user-settings-text" id="user-settings-text">Settings</button>
        </div>
        <div class="user-profile-container">
            <button class="user-profile-icon"></button>
            <button class="user-profile-text" id="user-profile-text">Profile</button>
        </div>
    </div>
    <div class="logout-wrapper" onclick="logout_con()">
        <div class="logout-container"> 
            <button class="logout-icon"></button>
            <button class="logout-text" id="logout-text">Log out</button>
        </div> 
    </div>
</div>
    <div class="head-container">
        <div class="lang-mode-container">
            <div class="lang-container">
                <div class="select-lang" onclick="lang_select()" id="select-lang"></div>
                <div class="lang-option" style="display: none;" onclick="changeLang()" id="lang-option">
                    <div class="lng-img"></div>
                    <ul>
                        <li><a href="?lang=fr"></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <h1 class="welcome-txt" id="welcome-txt">Welcome!👋</h1>
        <button class="start-playing" id="start-playing">
            <img src="../styles/sidebar/icons/ping-pongg.svg " class="ping-image" onclick="select_games();">
            start playing</button>
    </div>
    `;
    }
    // connectedCallback() {
    connectedCallback() {


        load_sidebar();
    }
}
customElements.define('newhome-elements', newhome);
}