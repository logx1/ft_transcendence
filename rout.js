import { load_register } from './components/register.js';
import { load_login } from './components/login.js';
import { load_home } from './components/home.js';
import { select_game } from './components/select_game.js';
import { load_local_game } from './components/local_game.js';
import { load_online_game } from './components/online_game.js';




async function getProfile() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/user/', {
            method: 'GET',
            credentials: 'include',
        });
        return response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}



async function fetchProfile() {
    let lol = await getProfile();
    console.log(lol);
    if (lol.detail == "Unauthenticated user") {
       console.log("logged in");
        history.pushState(null, "title 1", "#login");
        document.body.innerHTML = `<login-elements></login-elements>`;
        load_login();
    }else{
        // console.log("not logged in");
        // history.pushState(null, "title 1", "#register");
        // document.body.innerHTML = `<register-elements></register-elements>`;
        // load_register();

        console.log("logged in");
        history.pushState(null, "title 1", "#home");
        document.body.innerHTML = `<home-elements></home-elements>`;
        load_home();
    }
  }
  
  fetchProfile();
   


//     // history.pushState(null, "title 1", "#login");

//     // document.body.innerHTML = `<login-elements></login-elements>`;
//     // load_login();
    

    



window.select_games = function() {
    console.log("select games");
    history.pushState(null, "title 1", "#select_game");
    document.body.innerHTML = `<select-game></select-game>`;
    select_game();
}

//  create a function hoe trace window.location.hash and whine he changet print in the console the new one

function hashChange() {
    console.log(window.location.hash);
    if(window.location.hash == "#register"){
        history.pushState(null, "title 1", "#register");
        document.body.innerHTML = `<register-elements></register-elements>`;
        load_register();
    }
    if(window.location.hash == "#login"){
        history.pushState(null, "title 1", "#login");
        document.body.innerHTML = `<login-elements></login-elements>`;
        load_login();
    }
    if(window.location.hash == "#home"){
        history.pushState(null, "title 1", "#home");
        document.body.innerHTML = `<home-elements></home-elements>`;
        load_home();
    }

    if(window.location.hash == "#select_game"){
        history.pushState(null, "title 1", "#select_game");
        document.body.innerHTML = `<select-game></select-game>`;
        select_game();
    }

    if(window.location.hash == "#local_game"){
        history.pushState(null, "title 1", "#local_game");
        document.body.innerHTML = `<game-local></game-local>`;
        load_local_game();

    }

    if(window.location.hash == "#online_game"){
        history.pushState(null, "title 1", "#online_game");
        document.body.innerHTML = `<game-online></game-online>`;
        load_online_game();
    }

}
window.play_local = function() {
    history.pushState(null, "title 1", "#local_game");
    document.body.innerHTML = `<game-local></game-local>`;
    load_local_game();
}

window.play_online = function() {
    history.pushState(null, "title 1", "#online_game");
    document.body.innerHTML = `<game-online></game-online>`;
    load_online_game();
}


window.addEventListener('hashchange', hashChange);







