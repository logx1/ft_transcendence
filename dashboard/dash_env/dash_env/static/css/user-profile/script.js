let username = localStorage.getItem('username')

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

    console.log(img_.src)

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

function CompareRes(first, sec){
    console.log("first(id:6) ",first);
    console.log("second(id:5)", sec);

    if (first > sec){
        document.getElementById('plus').style.display = 'flex';
        document.getElementById('minus').style.display = 'none';
        document.getElementById('equal').style.display = 'none';
    }
    else if (first < sec){
        console.log("here!")
        document.getElementById('plus').style.display = 'none';
        document.getElementById('minus').style.display = 'flex';
        document.getElementById('equal').style.display = 'none';
    }
    else if (first == sec){
        document.getElementById('plus').style.display = 'none';
        document.getElementById('minus').style.display = 'none';
        document.getElementById('equal').style.display = 'flex';
    }
}

// function updateHistoryData(data) {
//     Promise.all([
//         fetch(`http://127.0.0.1:8000/matches-history/${username}/`, {
//             method: 'GET'
//         })
//         .then(response => response.json())
//         .then(data => {
//             first_username = data.username;
//             first_result = data.user_result;
//         }),

//         fetch('http://127.0.0.1:8000/f-user/Arthur/', {
//             method: 'GET'
//         })
//         .then(response => response.json())
//         .then(data => {
//             second_username = data.username;
//             second_result = data.user_result;
//         })
//     ])
//     .then(() => {

//         const fPlayerUser = document.getElementById('first-user-name');
//         const sPlayerUser = document.getElementById('second-user-name');
//         const fPlayerRes = document.getElementById('f-user-score')
//         const sPlayerRes = document.getElementById('sec-user-score');

//         fPlayerUser.innerHTML = '';
//         sPlayerUser.innerHTML = '';
//         fPlayerRes.innerHTML = '';
//         sPlayerRes.innerHTML = '';

//         const fplayer_us = document.createElement('fplayer_us');
//         const splayer_us = document.createElement('splayer_us');
//         const fplayer_res = document.createElement('fplayer_res');
//         const splayer_res = document.createElement('splayer_res');

//         fplayer_us.textContent = first_username;
//         splayer_us.textContent = second_username;
//         fplayer_res.textContent = first_result;
//         splayer_res.textContent = second_result;

//         fPlayerUser.appendChild(fplayer_us);
//         sPlayerUser.appendChild(splayer_us);
//         fPlayerRes.appendChild(fplayer_res);
//         sPlayerRes.appendChild(splayer_res);
//         CompareRes(fplayer_res.textContent, splayer_res.textContent);
//     })
//     .catch(error => console.error('Error:', error));
// }

// fetch(`http://127.0.0.1:8000/matches-history/1/`, {
//     method: 'GET',
// })

// .then(response => response.json())
// .then(data => {
//     document.getElementById('no-matches-container').style.display = 'none';
//     document.getElementById('content-container').style.display = 'flex';
//     updateHistoryData(data);
// })