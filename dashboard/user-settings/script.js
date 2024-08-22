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

    var loadFile = function (event) {
        var image = document.getElementById("output");
        image.src = "../icons/profile_photo.svg";
    }
};

function togglePasswordVisibility(inputClass) {
    const inputField = document.querySelector(`.${inputClass}`);
    const button = inputField.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.src = "../icons/crossed-eye.svg";
        icon.alt = "Hide Password";
    } else {
        inputField.type = "password";
        icon.src = "../icons/eye.svg";
        icon.alt = "Show Password";
    }
}

function showContainer(containerClass) {
    document.querySelector('.edit-profile-container').style.display = 'none';
    document.querySelector('.change-password-container').style.display = 'none';

    // Show the selected container
    document.querySelector(`.${containerClass}`).style.display = 'block';
}
