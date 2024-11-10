import { load_register } from './components/register.js';
import { load_login } from './components/login.js';
// import { load_home } from './components/home.js';
import { select_game } from './components/select_game.js';
import { load_local_game } from './components/local_game.js';
import { load_online_game } from './components/online_game.js';
import { load_settings } from './components/settings.js';
import { load_profile } from './components/Profile.js';
import { load_welcome } from './components/welcome.js';
import { load_chat } from './components/chat.js';
import { load_newhome } from './components/new_home.js';
import { load_tournament} from './components/tournament.js';
import { load_tournament_game} from './components/tournament_game.js';




async function getProfile() {
    try {
        const response = await fetch('http://127.0.0.1:8001/api/user/', {
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
    // console.log(lol);
    if (lol.detail == "Unauthenticated") {
        console.log(lol.detail);
        console.log("logged in");
        // history.pushState(null, "title 1", "#login");
        // document.body.innerHTML = `<login-elements></login-elements>`;
        // load_login();
        history.pushState(null, "title 1", "#welcome");
        document.body.innerHTML = `<welcome-elements></welcome-elements>`;
        load_welcome();
        console.log("not logged in");
        
    }else{
        // console.log("not logged in");
        // history.pushState(null, "title 1", "#register");
        // document.body.innerHTML = `<register-elements></register-elements>`;
        // load_register();

        // console.log("logged in");
        // history.pushState(null, "title 1", "#home");
        // document.body.innerHTML = `<home-elements></home-elements>`;
        // load_home();
        history.pushState(null, "title 1", "#select_game");
        document.body.innerHTML = `<select_game-elements></settingss-elements>`;
        load_settings();




        // history.pushState(null, "title 1", "#profile");
        // document.body.innerHTML = `<profile-elements></profile-elements>`;
        // load_profile();


        // history.pushState(null, "title 1", "#chat");
        // document.body.innerHTML = `<chat-elements></chat-elements>`;
        // load_chat();
        history.pushState(null, "title 1", "#newhome");
        document.body.innerHTML = `<newhome-elements></newhome-elements>`;
        load_newhome();


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
    if(window.location.hash == "#newhome"){
        history.pushState(null, "title 1", "#newhome");
        document.body.innerHTML = `<newhome-elements></newhome-elements>`;
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
    if(window.location.hash == "#sittings"){
        history.pushState(null, "title 1", "#sittings");
        document.body.innerHTML = `<settingss-elements></settingss-elements>`;
        load_settings();
    }
    if(window.location.hash == "#chat"){
        history.pushState(null, "title 1", "#chat");
        document.body.innerHTML = `<chat-elements></chat-elements>`;
        load_chat();
    }
    if(window.location.hash == "#profile"){
        history.pushState(null, "title 1", "#profile");
        document.body.innerHTML = `<profile-elements></profile-elements>`;
        load_profile();
    }
    if(window.location.hash == "#tournament"){
        history.pushState(null, "title 1", "#tournament");
        document.body.innerHTML = `<tournament-elements></tournament-elements>`;
        load_tournament();
    }

}

window.go_to_select_game = function()
{
    history.pushState(null, "title 1", "#select_game");
    document.body.innerHTML = `<select-game></select-game>`;
    select_game();
}

window.go_to_tournament = function()
{
    history.pushState(null, "title 1", "#tournament");
    document.body.innerHTML = `<tournament-elements></tournament-elements>`;
    load_tournament();
}

window.go_to_register = function() {
    history.pushState(null, "title 1", "#register");
    document.body.innerHTML = `<register-elements></register-elements>`;
    load_register();
}
window.go_to_login = function() {
    history.pushState(null, "title 1", "#login");
    document.body.innerHTML = `<login-elements></login-elements>`;
    load_login();
}
window.go_to_settings = function() {
    history.pushState(null, "title 1", "#sittings");
    document.body.innerHTML = `<settingss-elements></settingss-elements>`;
    load_settings();
}
window.go_to_profile = function() {
    history.pushState(null, "title 1", "#profile");
    document.body.innerHTML = `<profile-elements></profile-elements>`;
    load_profile();
}
window.go_to_chat = function() {
    history.pushState(null, "title 1", "#chat");
    document.body.innerHTML = `<chat-elements></chat-elements>`;
    load_chat();
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
window.intra = function() {
    window.location.href = "http://127.0.0.1:8001";
}
window.go_to_newhome = function() {
    history.pushState(null, "title 1", "#newhome");
    document.body.innerHTML = `<newhome-elements></newhome-elements>`;
    load_newhome();
}

window.go_welcome = function() {
    history.pushState(null, "title 1", "#welcome");
    document.body.innerHTML = `<welcome-elements></welcome-elements>`;
    load_welcome();
}
window.login = function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let button = document.querySelector('.loginx');
    button.innerHTML = 'wait...';
    button.disabled = true;

    fetch('http://127.0.0.1:8001/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        button.innerHTML = 'login';
        button.disabled = false;
        if (response.status == 200) {

            console.log("logged in========>");
            go_to_newhome();
        }else{
            console.log("not logged in========>");
            document.body.querySelector('.error').innerHTML = `<span style="color: red;">Invalid email or password</span>`;
            throw new Error('not logged in');

        }
        return response.json()
    })
    .then(data => {
        document.cookie = `access=${data.access}; path=/`;
        document.cookie = `refresh=${data.refresh}; path=/`;
        document.cookie = `username=${data.username}; path=/`;
        // console.log(document.cookie.split(';')[2].split('=')[1]);
    })
    // .then(() => {
    //     history.pushState(null, "title 1", "#home");
    //     document.body.innerHTML = `<home-elements></home-elements>`;
    //     load_home();
    // })
    .catch(error => console.error('Error:', error));
}


window.addEventListener('hashchange', hashChange);

window.create = function() {
    let id = document.getElementById('create');
    let username = document.getElementById('usename').value;
    if (id && username != "" && username != "username") {
        console.log(id.value);
        // Increment the id value by 1 in DOM
        id.value = parseInt(id.value) + 1;

        fetch('http://127.0.0.1:8080/api/lol/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: username })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let id = document.getElementById('create').value;
            if (id == 3) {
                document.body.innerHTML = `<game-local></game-local>`;
                load_tournament_game();
                setTimeout(() => {
                    tournament_game_logic('player_1111', 'player_2222'); 
                }, 300); 
            }
        })
            
        .catch(error => console.error('Error:', error));    
    } else {
        console.error('Element with ID "create" not found.');
        document.getElementById('error').innerHTML = "Please enter a valid username.";
    }
}

window.luanch_tournament = function() {
    console.log("luanch tournament");
    pushState(null, "title 1", "#tournament");
    
    load_local_game();
}









