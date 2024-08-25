window.onload = function() {
    let menu_icon_box = document.querySelector(".small-sidebar-container");
    let box = document.querySelector(".sidebar-container");

    menu_icon_box.onclick = function() {
        box.classList.toggle("active");

        
    };

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        let isClickInside = box.contains(event.target) || menu_icon_box.contains(event.target);

        if (!isClickInside) {
            box.classList.remove("active");
        }
    });

    // Close the sidebar when the window is resized
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

function popBox() {
    var status = prompt("Please enter your status", "");
    if (status != null) {
        document.getElementsByClassName("status")[0].innerHTML = status;
    }
    // alert('test');
}