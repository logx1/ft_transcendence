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
};

function togglePasswordVisibility(inputClass) {
    const inputField = document.querySelector(`.${inputClass}`);
    const button = inputField.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.src = "../icons/crossed-eye.svg";
        icon.alt = "Hide Password";
    }
    else {
        inputField.type = "password";
        icon.src = "../icons/eye.svg";
        icon.alt = "Show Password";
    }
}

function showEditProfile() {
    document.querySelector('.change-name-container').style.display = 'flex';
    document.querySelector('.change-password-container').style.display = 'none';

    document.querySelector('.edit-profile').classList.add('active-button');
    document.querySelector('.change-password').classList.remove('active-button');
}

function showChangePassword() {
    document.querySelector('.change-password-container').style.display = 'flex';
    document.querySelector('.change-name-container').style.display = 'none';

    document.querySelector('.change-password').classList.add('active-button');
    document.querySelector('.edit-profile').classList.add('unactive-button');
    document.querySelector('.edit-profile').classList.remove('active-button');
}

function verify() {
    const newPasswordElement_inp = document.querySelector('.new-pass-wrapper');
    const newPasswordElement_rep = document.querySelector('.repeat-new-password-wrapper');

    const inputField = document.querySelector('body > div.body-container > div.change-password-container > div.new-pass-wrapper > input');

    const val1 = inputField.value;
    const val2 = document.querySelector('body > div.body-container > div.change-password-container > div.repeat-new-password-wrapper > input').value;

    if (val1 != val2 || !val1 || !val2) {       
        newPasswordElement_inp.style.animation = "glitch ease-out 0.20s 3";
        newPasswordElement_rep.style.animation = "glitch ease-out 0.20s 3";

        newPasswordElement_inp.addEventListener('animationend', function() {
            newPasswordElement_inp.style.animation = 'none';
        }, { once: true });

        newPasswordElement_rep.addEventListener('animationend', function() {
            newPasswordElement_rep.style.animation = 'none';
        }, {once: true});

        if (document.querySelector('.password-status-container > .stats-text').style.display = 'block'){
            document.querySelector('.password-status-container > .stats-text').style.display = 'none';
        }
    }

    else {
        document.querySelector('.password-status-container').style.display = 'flex';
        const up = document.querySelector('.password-status-container > .stats-text');

        if (document.querySelector('.password-status-container > .stats-text').style.display = 'none'){
            document.querySelector('.password-status-container > .stats-text').style.display = 'block';
        }

        up.style.animation = "slide-up ease-out 0.10s 1";

        up.addEventListener('animationend', function() {
            up.style.animation = 'none';
        }, { once: true });
    }
}