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

function updateStatus() {
    document.querySelector('.popup-container').style.display = 'none';

    let textarea = document.getElementById('textarea');
    let txtarea = textarea.value;

    document.getElementById("status").innerHTML = txtarea;

    if (!txtarea){
        document.getElementById("status").innerHTML = "Enter your status here...";
    }
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

    fullname_.innerHTML = '';
    username_.innerHTML = '';
    status_.innerHTML = '';
    date_.innerHTML = '';

    const fname = document.createElement('fname');
    const uname = document.createElement('uname');
    const stats = document.createElement('stats');
    const time = document.createElement('time');

    let date = new Date(data.date_cr);
    let formattedDate = date.toLocaleDateString();

    fname.textContent = data.full_name;
    uname.textContent = data.username;
    stats.textContent = data.status;
    time.textContent = formattedDate;

    fullname_.appendChild(fname);
    username_.appendChild(uname);
    status_.appendChild(stats);
    date_.appendChild(time);
}

fetch('http://127.0.0.1:8000/user-info/')
    .then(response => response.json())
    .then(data => {
        updateData(data);
    })
    .catch(error => {
        console.error('Error fetching data', error);
})