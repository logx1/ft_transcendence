let username = "Iscreaamm:0"

window.onload = function() {
    let menu_icon_box = document.querySelector(".small-sidebar-container");
    let box = document.querySelector(".sidebar-container");

    menu_icon_box.onclick = function() {
        box.classList.toggle("active");
    };

    document.addEventListener('click', function(event) {
        let isClickInside = box.contains(event.target) || menu_icon_box.contains(event.target);

        if (!isClickInside) {
            box.classList.remove("active");
        }
    });

    window.addEventListener('resize', function() {
        box.classList.remove("active");
    });
}

////////////////

var isOriginal = true;

function mode_select() {
    var modeOp = document.querySelector('#select-mode');

    if (isOriginal) {
        modeOp.style.backgroundImage = "url('icons/moon.svg')";
        applyLightMode();
        localStorage.setItem('mode', 'Lite');
        isOriginal = false;
    }
    else {
        modeOp.style.backgroundImage = "url('icons/light.svg')";
        applyDarkMode();
        localStorage.setItem('mode', 'Dark');
        isOriginal = true;
    }
}
// transition: background-color 0.5s ease-in-out;

function changeScrollbarTrackColor(color) {
    var style = document.createElement('style');
    style.innerHTML = `::-webkit-scrollbar-track { background: ${color}; }`;
    document.head.appendChild(style);
}

function applyLightMode() {
    document.querySelector('body').style.backgroundColor = "rgb(228, 222, 211)";
    document.querySelector('.head-container').style.backgroundColor = "rgb(242, 237, 227)";
    document.querySelector('fname').style.color = "rgba(31, 30, 28, 1)";
    document.querySelector('.body-container').style.backgroundColor = "rgb(242, 237, 227)";
    document.querySelector('.sidebar-container').style.backgroundColor = "rgb(242, 237, 227)";
    changeScrollbarTrackColor('rgb(242, 237, 227)');
}

function applyDarkMode() {
    document.querySelector('body').style.backgroundColor = "rgba(38, 37, 34, 1)";
    document.querySelector('.head-container').style.backgroundColor = "rgba(31, 30, 28, 1)";
    document.querySelector('fname').style.color = "#e4e4e4";
    document.querySelector('.body-container').style.backgroundColor = "rgba(31, 30, 28, 1)";
    document.querySelector('.sidebar-container').style.backgroundColor = "rgba(31, 30, 28, 1)";
    changeScrollbarTrackColor('#1f1e1c');
}

function applyMode() {
    var mode = localStorage.getItem('mode');
    var modeOp = document.querySelector('#select-mode');

    if (mode === 'Lite'){
        modeOp.style.backgroundImage = "url('icons/moon.svg')";
        applyLightMode();
        isOriginal = false;
    }

    else if (mode === 'Dark'){
        modeOp.style,backgroundImage = "url('icons/light.svg')";
        applyDarkMode();
        isOriginal = true;
    }
}

window.addEventListener('load', function(){
    applyMode();
})

////////////////

function lang_select(){
    var langOptions = document.querySelector('.lang-option');
    if (langOptions.style.display === "none" || langOptions.style.display === "") {
        langOptions.style.display = "block";
        langOptions.classList.add('fade-in');
        setTimeout(function() {
            langOptions.classList.remove('fade-in');
        }, 300);
    } else {
        langOptions.classList.add('fade-out');
        setTimeout(function() {
            langOptions.style.display = "none";
            langOptions.classList.remove('fade-out');
        }, 300);
    }
}

window.onload = function() {
    var savedlang = localStorage.getItem('selecLang');
    applyTransl(savedlang);
}

function changeLang() {
    var selectLangImage = getComputedStyle(document.querySelector('.lang-container > .select-lang')).backgroundImage;
    var langOptionImage = getComputedStyle(document.querySelector('.lang-container > .lang-option')).backgroundImage;

    if (selectLangImage.includes("french")){
        localStorage.setItem('selecLang', 'en')
    }
    else{
        localStorage.setItem('selecLang', 'fr')
    }

    document.querySelector('.lang-container > .select-lang').style.backgroundImage = langOptionImage;
    document.querySelector('.lang-container > .lang-option').style.backgroundImage = selectLangImage;

    var savedlang = localStorage.getItem('selecLang');
    applyTransl(savedlang);
}

function applyTransl(savedlang) {
    if (savedlang === 'fr'){
        document.getElementById('select-lang').style.backgroundImage = "url('icons/french.svg')";
        document.getElementById('lang-option').style.backgroundImage = "url('icons/english.svg')";

        document.getElementById('online-text').innerHTML = "en ligne"
        document.getElementById('offline-text').innerHTML = "hors ligne"
    
        document.getElementById('user-chat-text').innerHTML = "Conversations"
        document.getElementById('user-settings-text').innerHTML = "Paramètres"
        document.getElementById('user-profile-text').innerHTML = "Profil"
        document.getElementById('logout-text').innerHTML = "Déconnecter"

        document.getElementById('Games').innerHTML = "Jeux"
        document.getElementById('Results').innerHTML = "Résultat"
        document.getElementById('Accuracy').innerHTML = "Précision"
        document.getElementById('Date').innerHTML = "Date"
        document.getElementById('no-matches-container').innerHTML = "Pas encore de matchs."
        document.getElementById('enter').innerHTML = "Entrez votre statut :"
        document.getElementById('Cancel').innerHTML = "Annuler"
        document.getElementById('Submit').innerHTML = "Enregistrer"
        document.getElementById('logoutpop-tex').innerHTML = "Êtes-vous sûr(e) de vouloir vous déconnecter ?"
        document.getElementById('cancel-log').innerHTML = "Non"
        document.getElementById('enter-log').innerHTML = "Oui"
    }
    else{
        document.getElementById('select-lang').style.backgroundImage = "url('icons/english.svg')";
        document.getElementById('lang-option').style.backgroundImage = "url('icons/french.svg')";

        document.getElementById('online-text').innerHTML = "online"
        document.getElementById('offline-text').innerHTML = "offline"
    
        document.getElementById('user-chat-text').innerHTML = "Chat"
        document.getElementById('user-settings-text').innerHTML = "Settings"
        document.getElementById('user-profile-text').innerHTML = "Profile"
        document.getElementById('logout-text').innerHTML = "Log out"

        document.getElementById('Games').innerHTML = "Games"
        document.getElementById('Results').innerHTML = "Results"
        document.getElementById('Accuracy').innerHTML = "Accuracy"
        document.getElementById('Date').innerHTML = "Date"
        document.getElementById('enter').innerHTML = "Enter your status:"
        document.getElementById('Cancel').innerHTML = "Cancel"
        document.getElementById('Submit').innerHTML = "Submit"
        document.getElementById('logoutpop-tex').innerHTML = "are you sure you want to logout?"
        document.getElementById('cancel-log').innerHTML = "No"
        document.getElementById('enter-log').innerHTML = "Yes"
    }
}

//////////////

let textarea = document.getElementById('textarea');
let counter_characters = document.querySelector('.counter_characters');

textarea.oninput = function(){
counter_characters.innerText = textarea.value.length;
}

function logout_con(){
    document.querySelector('.logoutpop-container > .logoutpop-box').classList.add('logoutpop-box-animate-up');
    document.querySelector('.logoutpop-container').style.display = 'flex';
}

function popBox() {
    document.querySelector('.popup-container > .popup-box').classList.add('popup-box-animate-up');
    document.querySelector('.popup-container').style.display = 'flex';
}

function closeLogOutBox() {
    document.querySelector('.logoutpop-container').style.display = 'none';
}

function closeBox() {
    document.querySelector('.popup-container').style.display = 'none';
}

window.addEventListener('load', function() {
    document.getElementById('textarea').value = localStorage.getItem('status');
});

function updateStatus() {
    document.querySelector('.popup-container').style.display = 'none';

    let txtarea = document.getElementById('textarea').value;

    localStorage.setItem('status', txtarea);

    const data = { status: txtarea }
    fetch(`http://127.0.0.1:8000/user-info/${username}/`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Status updated successfully:', data);
    })
    .catch((error) => {
        console.error('Error updating status:', error);
    });
}

document.addEventListener('click', function(event) {
    var element = document.querySelector('body > div.popup-container > div');
    var status_btn = document.querySelector('#status');
    let isClickInside = element.contains(event.target);
    let isClickInside_brn = status_btn.contains(event.target);

    var element2 = document.querySelector('body > div.logoutpop-container > div');
    let isClickInside2 = element2.contains(event.target);

    if (!isClickInside && !isClickInside_brn) {
        closeBox();
    }

    else if (!isClickInside2) {
        closeLogOutBox();
    }
});

document.querySelector('.status').addEventListener('click', popBox);
document.querySelector('.update-cancel > .cancel').addEventListener('click', closeBox);
document.querySelector('.update-cancel-logout > .cancel-log').addEventListener('click', closeLogOutBox);
document.querySelector('.update-cancel > .enter').addEventListener('click', updateStatus);

/////////////////

function updateData(data){
    const fullname_ = document.getElementById('first-last');
    const username_ = document.getElementById('username');
    const date_ = document.getElementById('date');
    const status_ = document.getElementById('status');
    const score_ = document.getElementById('score');
    const img_ = document.getElementById('pfp');

    fullname_.innerHTML = '';
    username_.innerHTML = '';
    date_.innerHTML = '';
    status_.innerHTML = '';
    score_.innerHTML = '';
    img_.innerHTML = '';

    const fname = document.createElement('fname');
    const uname = document.createElement('uname');
    const time = document.createElement('time');
    const stts = document.createElement('stts');
    const scr = document.createElement('scr');

    let date = new Date(data.date_cr);
    let formattedDate = date.toLocaleDateString();
    
    fname.textContent = data.full_name;
    uname.textContent = data.username;
    time.textContent = formattedDate;
    stts.textContent = data.status;
    scr.textContent = data.total_score;
    img_.src = "http://127.0.0.1:8000" + data.profile_picture;

    fullname_.appendChild(fname);
    username_.appendChild(uname);
    date_.appendChild(time);
    status_.appendChild(stts);
    score_.appendChild(scr);
}

fetch(`http://127.0.0.1:8000/user-setting/${username}/`, {
    method: 'GET',
    })

    .then(response => {
        if (!response.ok) {
            throw new Error('Server is offline');
        }
        return response.json();
    })

    .then(data => {
        document.getElementById('offline').style.display = 'none';
        document.getElementById('online').style.display = 'flex';
        updateData(data);
    })
    .catch(error => {
        if (error.message === 'Server is offline') {
            document.getElementById('online').style.display = 'none';
            document.getElementById('offline').style.display = 'flex';
            console.error('Server is offline');
        }
        else {
            console.error('Error fetching data', error);
        }
});

//////FOR PING CONTAINER////////

function CompareRes(first, sec, user, winner, container){
    if (first == sec){
        container.querySelector('.res-icon > .res-image-plus').style.display = 'none';
        container.querySelector('.res-image-minus').style.display = 'none';
        container.querySelector('.res-image-equal').style.display = 'flex';

        container.querySelector('.f-user > .arrow_1').style.backgroundImage = "url('/icons/arrow2.svg')";
        container.querySelector('.sec-user > .arrow_2').style.backgroundImage = "url('/icons/arrow2.svg')";
    }
    else if (winner === user){
        container.querySelector('.res-icon > .res-image-plus').style.display = 'flex';
        container.querySelector('.res-image-minus').style.display = 'none';
        container.querySelector('.res-image-equal').style.display = 'none';

        container.querySelector('.f-user > .arrow_1').style.backgroundImage = "url('/icons/arrow.svg')";
        container.querySelector('.sec-user > .arrow_2').style.backgroundImage = "url('/icons/arrow2.svg')";
    }
    else{
        container.querySelector('.res-icon > .res-image-plus').style.display = 'none';
        container.querySelector('.res-image-minus').style.display = 'flex';
        container.querySelector('.res-image-equal').style.display = 'none';

        container.querySelector('.f-user > .arrow_1').style.backgroundImage = "url('/icons/arrow2.svg')";
        container.querySelector('.sec-user > .arrow_2').style.backgroundImage = "url('/icons/arrow.svg')";
    }
}

function CheckGameMode(type, container) {
    if (type == "online"){
        container.querySelector('.games-image-online').style.display = 'flex';
        container.querySelector('.games-icon > .games-text-online').style.display = 'flex';

        container.querySelector('.games-image-local').style.display = 'none';
        container.querySelector('.games-icon > .games-text-local').style.display = 'none';

        container.querySelector('.games-image-bot').style.display = 'none';
        container.querySelector('.games-icon > .games-text-bot').style.display = 'none';
    }

    else if (type == "local"){
        container.querySelector('.games-image-online').style.display = 'none';
        container.querySelector('.games-icon > .games-text-online').style.display = 'none';
    
        container.querySelector('.games-image-local').style.display = 'flex';
        container.querySelector('.games-icon > .games-text-local').style.display = 'flex';

        container.querySelector('.games-image-bot').style.display = 'none';
        container.querySelector('.games-icon > .games-text-bot').style.display = 'none';
    }

    else if (type == "bot"){
        container.querySelector('.games-image-online').style.display = 'none';
        container.querySelector('.games-icon > .games-text-online').style.display = 'none';

        container.querySelector('.games-image-local').style.display = 'none';
        container.querySelector('.games-icon > .games-text-local').style.display = 'none';

        container.querySelector('.games-image-bot').style.display = 'flex';
        container.querySelector('.games-icon > .games-text-bot').style.display = 'flex';
    }
}

function getAccuracy(scr1, scr2, container){
    let total_score = scr1 + scr2;

    let scr1Acc = ((scr1 / total_score) * 100).toFixed(0);
    let scr2Acc = ((scr2 / total_score) * 100).toFixed(0);

    container.querySelector('.Accuracy-container > .f-user-accuracy').innerHTML = scr1Acc + "%";
    container.querySelector('.Accuracy-container > .sec-user-accuracy').innerHTML = scr2Acc + "%";
}

function updateHistoryData(data, container) {

    container.querySelector('#first-user-name').innerHTML = data.player1;
    container.querySelector('#second-user-name').innerHTML = data.player2;
    container.querySelector('#f-user-score').innerHTML = data.score1;
    container.querySelector('#sec-user-score').innerHTML = data.score2;
    container.querySelector('#game-date').innerHTML = data.date;
    
    CheckGameMode(data.match_type, container);
    getAccuracy(data.score1, data.score2, container);
    CompareRes(data.score1, data.score2, "fbelahse", data.winner, container);
}


function updateScore(newScore) {
    let current = document.querySelector('#score').innerHTML;
    
    current = parseInt(current, 10) || 0;
    const totalSc = current + newScore;
    document.querySelector('#score').innerHTML = totalSc;
}

function addData(data) {
    const objCount = data.length;
    const contentContainer = document.getElementById('ping-content-container');

    for (let i = 0; i < 10; i++){
        if (i >= objCount) {
            break;
        }

        let newContainer = document.querySelector('.ping-stats-container').cloneNode(true);
        newContainer.style.display = 'flex';

        updateHistoryData(data[i], newContainer);

        contentContainer.appendChild(newContainer);
    }

    for (let i = 0; i <= objCount; i++){
        updateScore(data[i].score1);
    }
    document.querySelector('.ping-stats-container').style.display = 'none';
}

fetch('http://127.0.0.1:8000/matches/user/fbelahse/', {
    method: 'GET',
})
.then(response => response.json())
.then(data => {
    document.getElementById('no-matches-container').style.display = 'none';
    document.getElementById('ping-content-container').style.display = 'flex';
    addData(data);
})
.catch(error => {
    console.error('Error fetching data', error);
})

////////////FOR XO CONTAINER///////////

// function CompareResXO(first, sec, user, winner, container){
//     if (first == sec){
//         container.querySelector('.xo-res-icon > .xo-res-image-plus').style.display = 'none';
//         container.querySelector('.xo-res-image-minus').style.display = 'none';
//         container.querySelector('.xo-res-image-equal').style.display = 'flex';

//         container.querySelector('.xo-f-user > .xo-arrow_1').style.backgroundImage = "url('/icons/arrow2.svg')";
//         container.querySelector('.xo-sec-user > .xo-arrow_2').style.backgroundImage = "url('/icons/arrow2.svg')";
//     }
//     else if (winner === user){
//         container.querySelector('.xo-res-icon > .xo-res-image-plus').style.display = 'flex';
//         container.querySelector('.xo-res-image-minus').style.display = 'none';
//         container.querySelector('.xo-res-image-equal').style.display = 'none';

//         container.querySelector('.xo-f-user > .xo-arrow_1').style.backgroundImage = "url('/icons/arrow.svg')";
//         container.querySelector('.xo-sec-user > .xo-arrow_2').style.backgroundImage = "url('/icons/arrow2.svg')";
//     }
//     else{
//         container.querySelector('.xo-res-icon > .xo-res-image-plus').style.display = 'none';
//         container.querySelector('.xo-res-image-minus').style.display = 'flex';
//         container.querySelector('.xo-res-image-equal').style.display = 'none';

//         container.querySelector('.xo-f-user > .xo-arrow_1').style.backgroundImage = "url('/icons/arrow2.svg')";
//         container.querySelector('.xo-sec-user > .xo-arrow_2').style.backgroundImage = "url('/icons/arrow.svg')";
//     }
// }

// function CheckGameModeXO(type, container) {
//     if (type == "online"){
//         container.querySelector('.xo-games-image-online').style.display = 'flex';
//         container.querySelector('.xo-games-icon > .xo-games-text-online').style.display = 'flex';

//         container.querySelector('.xo-games-image-local').style.display = 'none';
//         container.querySelector('.xo-games-icon > .xo-games-text-local').style.display = 'none';

//         container.querySelector('.xo-games-image-bot').style.display = 'none';
//         container.querySelector('.xo-games-icon > .xo-games-text-bot').style.display = 'none';
//     }

//     else if (type == "local"){
//         container.querySelector('.xo-games-image-online').style.display = 'none';
//         container.querySelector('.xo-games-icon > .xo-games-text-online').style.display = 'none';
    
//         container.querySelector('.xo-games-image-local').style.display = 'flex';
//         container.querySelector('.xo-games-icon > .xo-games-text-local').style.display = 'flex';

//         container.querySelector('.xo-games-image-bot').style.display = 'none';
//         container.querySelector('.xo-games-icon > .xo-games-text-bot').style.display = 'none';
//     }

//     else if (type == "bot"){
//         container.querySelector('.xo-games-image-online').style.display = 'none';
//         container.querySelector('.xo-games-icon > .xo-games-text-online').style.display = 'none';

//         container.querySelector('.xo-games-image-local').style.display = 'none';
//         container.querySelector('.xo-games-icon > .xo-games-text-local').style.display = 'none';

//         container.querySelector('.xo-games-image-bot').style.display = 'flex';
//         container.querySelector('.xo-games-icon > .xo-games-text-bot').style.display = 'flex';
//     }
// }

// function getAccuracyXO(scr1, scr2, container){
//     let total_score = scr1 + scr2;

//     let scr1Acc = ((scr1 / total_score) * 100).toFixed(0);
//     let scr2Acc = ((scr2 / total_score) * 100).toFixed(0);

//     container.querySelector('.xo-Accuracy-container > .xo-f-user-accuracy').innerHTML = scr1Acc + "%";
//     container.querySelector('.xo-Accuracy-container > .xo-sec-user-accuracy').innerHTML = scr2Acc + "%";
// }

// function updateScore(newScore) {
//     let current = document.querySelector('#score').innerHTML;
    
//     current = parseInt(current, 10) || 0;
//     const totalSc = current + newScore;
//     document.querySelector('#score').innerHTML = totalSc;
// }

// function updateHistoryDataXo(data, container) {

//     container.querySelector('#xo-first-user-name').innerHTML = data.player1;
//     container.querySelector('#xo-second-user-name').innerHTML = data.player2;
//     container.querySelector('#xo-f-user-score').innerHTML = data.score1;
//     container.querySelector('#xo-sec-user-score').innerHTML = data.score2;
//     container.querySelector('#xo-game-date').innerHTML = data.date;

//     CheckGameModeXO(data.match_type, container);
//     getAccuracyXO(data.score1, data.score2, container);
//     CompareResXO(data.score1, data.score2, "fbelahse", data.winner, container);
// }

// function addDataXo(data){
//     const objCount = data.length;
//     const contentContainer = document.getElementById('xo-content-container');

//     for (let i = 0; i < 10; i++){
//         if (i >= objCount) {
//             break;
//         }
        
//         let newContainer = document.querySelector('.xo-stats-container').cloneNode(true);
//         newContainer.style.display = 'flex';
        
//         updateHistoryDataXo(data[i], newContainer);
//         contentContainer.appendChild(newContainer);
//     }

//     for (let j = 0; j <= objCount; j++){
//         updateScore(data[j].score1);
//     }

//     document.querySelector('.xo-stats-container').style.display = 'none';
// }

// fetch('http://127.0.0.1:8000/matches/user/fbelahse/', {
//     method: 'GET',
// })
// .then(response => response.json())
// .then(data => {
//     document.getElementById('xo-no-matches-container').style.display = 'none';
//     document.getElementById('ping-content-container').style.display = 'none'; // Hide ping-content-container
//     document.getElementById('no-matches-container').style.display = 'flex';
//     document.getElementById('xo-content-container').style.display = 'flex';
//     addDataXo(data);
// })
// .catch(error => {
// console.error('Error fetching data', error);
// })

///////////////////////

function ShowPingContainer() {
    document.querySelector('.ping-content-container').style.display = 'flex';
    document.querySelector('.xo-content-container').style.display = 'none';

    document.querySelector('.pingBtn').classList.add('active-button');
    document.querySelector('.pingBtn').classList.remove('unactive-button');
    document.querySelector('.xoBtn').classList.remove('active-button');
}

function ShowXOContainer() {
    document.querySelector('.xo-content-container').style.display = 'flex';
    document.querySelector('.ping-content-container').style.display = 'none';

    document.querySelector('.xoBtn ').classList.add('active-button');
    document.querySelector('.pingBtn').classList.add('unactive-button');
    document.querySelector('.pingBtn').classList.remove('active-button');
}
