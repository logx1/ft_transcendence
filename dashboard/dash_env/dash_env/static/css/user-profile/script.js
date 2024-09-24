let username = "yaa"

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

    var limit = 4;
    var containers = document.querySelectorAll('.stats-container');

    for (var i = 0; i < containers.length; i++) {
        if (i >= limit) {
            containers[i].style.display = 'none';
        }
    }
}

let textarea = document.getElementById('textarea');
let counter_characters = document.querySelector('.counter_characters');

textarea.oninput = function(){
counter_characters.innerText = textarea.value.length;
}

function popBox() {
    document.querySelector('.popup-container > .popup-box').classList.add('popup-box-animate-up');
    document.querySelector('.popup-container').style.display = 'flex';
}

function closeBox() {
    document.querySelector('.popup-container').style.display = 'none';
}

window.addEventListener('load', function() {
    document.getElementById('textarea').value = localStorage.getItem('status');
});

function updateStatus() {
    document.querySelector('.popup-container').style.display = 'none';

    let textarea = document.getElementById('textarea');
    let txtarea = textarea.value;

    localStorage.setItem('status', txtarea);
    
    const data = { status: txtarea }
    fetch(`http://127.0.0.1:8000/user-setting/${username}/`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
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

    if (!isClickInside && !isClickInside_brn) {
        closeBox();
    }
});

document.querySelector('.status').addEventListener('click', popBox);
document.querySelector('.update-cancel > .cancel').addEventListener('click', closeBox);
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
    img_.src = data.profile_picture;

    console.log(stts.textContent)

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

function CompareRes(first, sec, user, winner){
    if (first == sec){
        document.getElementById('plus').style.display = 'none';
        document.getElementById('minus').style.display = 'none';
        document.getElementById('equal').style.display = 'flex';
    }else if (winner === user)
    {
        document.getElementById('plus').style.display = 'flex';
        document.getElementById('minus').style.display = 'none';
        document.getElementById('equal').style.display = 'none';
    } else
    {
        document.getElementById('plus').style.display = 'none';
        document.getElementById('minus').style.display = 'flex';
        document.getElementById('equal').style.display = 'none';
    }
}

function CheckGameMode(type) {
    if (type == "online"){
        document.getElementById('online-ic').style.display = 'flex';
        document.getElementById('online-txt').style.display = 'flex';
    }

    else if (type == "local"){
        document.getElementById('local-ic').style.display = 'flex';
        document.getElementById('local-txt').style.display = 'flex';
    }

    else if (type == "bot"){
        document.getElementById('bot-ic').style.display = 'flex';
        document.getElementById('bot-txt').style.display = 'flex';
    }
}

function getAccuracy(scr1, scr2){
    let total_score = scr1 + scr2;

    let scr1Acc = ((scr1 / total_score) * 100).toFixed(0);
    let scr2Acc = ((scr2 / total_score) * 100).toFixed(0);

    document.getElementById('firstAcc').innerHTML = scr1Acc + "%";
    document.getElementById('secAcc').innerHTML = scr2Acc + "%";
}

function updateHistoryData(data) {
    
    document.querySelector('#first-user-name').innerHTML = data.player1;
    document.querySelector('#second-user-name').innerHTML = data.player2;
    document.querySelector('#f-user-score').innerHTML = data.score1;
    document.querySelector('#sec-user-score').innerHTML = data.score2;
    document.querySelector('#game-date').innerHTML = data.date;
    
    CheckGameMode(data.match_type);
    getAccuracy(data.score1, data.score2);
    CompareRes(data.score1, data.score2, "fbelahse", data.winner);
}

fetch('http://127.0.0.1:8000/matches/user/fbelahse/', {
    method: 'GET',
})
.then(response => response.json())
.then(data => {
    const objectCount = data.length;
    console.log('Number of objects:', objectCount);

    document.getElementById('no-matches-container').style.display = 'none';
    document.getElementById('content-container').style.display = 'flex';
    updateHistoryData(data[0]);
})
.catch(error => {
    console.error('Error fetching data', error);
})