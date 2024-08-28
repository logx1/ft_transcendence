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

    document.getElementById("status-button").innerHTML = txtarea;

    if (!txtarea){
        document.getElementById("status-button").innerHTML = "Enter your status here...";
    }
}

document.addEventListener('click', function(event) {
    var element = document.querySelector('body > div.popup-container > div');
    var status_btn = document.querySelector('#status-button');
    let isClickInside = element.contains(event.target);
    let isClickInside_brn = status_btn.contains(event.target)

    if (!isClickInside && !isClickInside_brn) {
        closeBox();
    }
});

document.querySelector('.status').addEventListener('click', popBox);
document.querySelector('.update-cancel > .cancel').addEventListener('click', closeBox);
document.querySelector('.update-cancel > .enter').addEventListener('click', updateStatus);
