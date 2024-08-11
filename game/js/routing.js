import { select_game } from './select_game.js';
import { local_players } from './local_select_players.js';



history.pushState(null, "title 1", "#select_gamee");

(() => {
    if(window.location.hash == "#select_gamee") {
        let container = document.querySelector(".conatainer");
        if(container) {
            container.innerHTML = '<my-counter></my-counter>';
        }
        select_game();
    }
    if(window.location.hash == "#select_local") {
        console.log("select_local");
        let container = document.querySelector(".conatainer");
        if(container) {
            container.innerHTML = '<my-counter></my-counter>';
        }
        local_players();
    }
})();


// history.pushState(null, "title 1", "#select_local");

window.addEventListener('hashchange', function() {
    if(window.location.hash == "#select_gamee") {
        let container = document.querySelector(".conatainer");
        if(container) {
            container.innerHTML = '<my-counter></my-counter>';
        }
        select_game();
    }
    if(window.location.hash == "#select_local") {
        console.log("select_local");
        let container = document.querySelector(".conatainer");
        if(container) {
            container.innerHTML = '<my-counter></my-counter>';
        }
        local_players();
    }
});