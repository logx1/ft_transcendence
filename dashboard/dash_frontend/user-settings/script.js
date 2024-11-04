let ussrr = "sndhelp"

window.addEventListener('load', function(){
    let menu_icon_box = document.querySelector(".small-sidebar-container");
    let box = document.querySelector(".sidebar-container");
    let transl = this.document.querySelector("#select-lang");
    let mode = this.document.querySelector("#select-mode");

    menu_icon_box.onclick = function() {
        box.classList.toggle("active");
    };

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        let isClickInside = box.contains(event.target) || menu_icon_box.contains(event.target) || transl.contains(event.target) || mode.contains(event.target);
 
        if (!isClickInside) {
            box.classList.remove("active");
        }
    });

    // Close the sidebar when the window is resized
    window.addEventListener('resize', function() {
        box.classList.remove("active");
    });
});

////////////////

var isOriginal = true;

function mode_select(){
    var modeOp = document.querySelector('#select-mode');

    if(isOriginal) {
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

function applyLightMode() {
    document.querySelector('body').style.backgroundColor = "rgb(228, 222, 211)";
    document.querySelector('.head-container').style.backgroundColor = "rgb(242, 237, 227)";
    document.querySelector('.body-container').style.backgroundColor = "rgb(242, 237, 227)";
    document.querySelector('.name-area').style.color = "rgba(38, 37, 34, 1)";
    document.querySelector('.username-area').style.color = "rgba(38, 37, 34, 1)";
    document.querySelector('.old-pass-wrapper > .old-pass-area').style.color = "rgba(38, 37, 34, 1)";
    document.querySelector('.new-pass-area').style.color = "rgba(38, 37, 34, 1)";
    document.querySelector('.repeat-new-password-area').style.color = "rgba(38, 37, 34, 1)";
    document.querySelector('.sidebar-container').style.backgroundColor = "rgb(242, 237, 227)";
    document.querySelector('fname').style.color = "rgba(31, 30, 28, 1)";
}

function applyDarkMode() {
    document.querySelector('body').style.backgroundColor = "rgba(38, 37, 34, 1)";
    document.querySelector('.head-container').style.backgroundColor = "rgba(31, 30, 28, 1)";
    document.querySelector('.body-container').style.backgroundColor = "rgba(31, 30, 28, 1)";
    document.querySelector('.name-area').style.color = "aliceblue";
    document.querySelector('.username-area').style.color = "aliceblue";
    document.querySelector('.old-pass-wrapper > .old-pass-area').style.color = "aliceblue";
    document.querySelector('.new-pass-area').style.color = "aliceblue";
    document.querySelector('.repeat-new-password-area').style.color = "aliceblue";
    document.querySelector('.sidebar-container').style.backgroundColor = "rgba(31, 30, 28, 1)";
    document.querySelector('fname').style.color = "#e4e4e4";
}

function applyMode() {
    var mode = localStorage.getItem('mode');
    var modeOp = document.querySelector('#select-mode');
    // var fname = document.querySelector('fname');

    if (mode === 'Lite'){
        modeOp.style.backgroundImage = "url('icons/moon.svg')";
        // fname.style.color = "rgba(31, 30, 28, 1)";
        applyLightMode();
        isOriginal = false;
    }
    else if (mode === 'Dark'){
        modeOp.style.backgroundImage = "url('icons/light.svg')";
        fname.style.color = "#e4e4e4";
        applyDarkMode();
        isOriginal = true;
    }
}

window.addEventListener('load', function(){
    applyMode();
});

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

window.addEventListener('load', function() {
    var savedlang = localStorage.getItem('selecLang');
    applyTransl(savedlang);
})

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

        document.getElementById('user-chat-text').innerHTML = "Conversations"
        document.getElementById('user-settings-text').innerHTML = "Paramètres"
        document.getElementById('user-profile-text').innerHTML = "Profil"
        document.getElementById('logout-text').innerHTML = "Déconnecter"
        document.getElementById('pfp-txt').innerHTML = "Veuillez vous assurer que votre image est dans l'un de ces formats: <br><strong>JPEG</strong>, <strong>PNG</strong> ou <strong>JPG</strong>";

        document.getElementById('edit-profile').innerHTML = "Modifier le Profil"
        document.getElementById('change-password').innerHTML = "Modifier le mot de passe"
        document.getElementById('first-name').innerHTML = "Nom et Prénom:"
        document.getElementById('username-txt').innerHTML = "Pseudo:"
        document.getElementById('updatee_name').innerHTML = "Enregistrer"
        document.getElementById('delete').innerHTML = "Supprimer l'utilisateur";
        document.getElementById('p1_user').innerHTML = "Pseudo existe déjà."
        document.getElementById('success-txt').innerHTML = "Vos informations ont été mises à jour avec succès !"

        document.getElementById('old-password').innerHTML = "Ancien mot de passe:"
        document.getElementById('new-password').innerHTML = "nouveau mot de passe:"
        document.getElementById('repeat-new-password').innerHTML = "Répétez le mot de passe:"
        document.getElementById('p1_pass').innerHTML = "Le mot de passe ne correspond pas."
        document.getElementById('updatee').innerHTML = "Enregistrer";

        document.getElementById('logoutpop-tex').innerHTML = "Êtes-vous sûr(e) de vouloir vous déconnecter ?"
        document.getElementById('cancel-log').innerHTML = "Non"
        document.getElementById('enter-log').innerHTML = "Oui"

        document.getElementById('deletepop-tex').innerHTML = "Êtes-vous sûr de vouloir supprimer votre compte ?"
        document.getElementById('deletepop2-text').innerHTML = "Cette action supprimera définitivement cet utilisateur."
        document.getElementById('cancel-del').innerHTML = "Non"
        document.getElementById('enter-del').innerHTML = "Oui!"

    }
    else{
        document.getElementById('select-lang').style.backgroundImage = "url('icons/english.svg')";
        document.getElementById('lang-option').style.backgroundImage = "url('icons/french.svg')";
    
        document.getElementById('user-chat-text').innerHTML = "Chat"
        document.getElementById('user-settings-text').innerHTML = "Settings"
        document.getElementById('user-profile-text').innerHTML = "Profile"
        document.getElementById('logout-text').innerHTML = "Log out"
        document.getElementById('pfp-txt').innerHTML = "please ensure that your image is in one of these formats: <br><strong>JPEG</strong>, <strong>PNG</strong> or <strong>JPG</strong>";

        document.getElementById('edit-profile').innerHTML = "Edit Profile"
        document.getElementById('change-password').innerHTML = "Change Password"
        document.getElementById('first-name').innerHTML = "Full Name:"
        document.getElementById('username-txt').innerHTML = "Username:"
        document.getElementById('updatee_name').innerHTML = "Submit"
        document.getElementById('delete').innerHTML = "Delete User";
        document.getElementById('p1_user').innerHTML = "Username aleady exists."
        document.getElementById('success-txt').innerHTML = "Your info has been updated successfully!"

        document.getElementById('old-password').innerHTML = "Old Password:"
        document.getElementById('new-password').innerHTML = "New Password:"
        document.getElementById('repeat-new-password').innerHTML = "Repeat New Password:"
        document.getElementById('p1_pass').innerHTML = "Le mot de passe ne correspond pas."
        document.getElementById('updatee').innerHTML = "Submit";

        document.getElementById('logoutpop-tex').innerHTML = "are you sure you want to logout?"
        document.getElementById('cancel-log').innerHTML = "No"
        document.getElementById('enter-log').innerHTML = "Yes"

        document.getElementById('deletepop-tex').innerHTML = "are you sure you want to delete your account?"
        document.getElementById('deletepop2-text').innerHTML = "This action will permanently delete this user."
        document.getElementById('cancel-del').innerHTML = "No"
        document.getElementById('enter-del').innerHTML = "Yes!"
    }
}

//////////////

function togglePasswordVisibility(inputClass) {
    const inputField = document.querySelector(`.${inputClass}`);
    const button = inputField.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.src = "./icons/crossed-eye.svg";
        icon.alt = "Hide Password";
    }
    else {
        inputField.type = "password";
        icon.src = "./icons/eye.svg";
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

    ////////fetch area

    if (document.getElementById('old_pass').value != ol_pass){
        document.querySelector('p1').style.display = 'inline';
        const oldPasswordEl = document.querySelector('.old-pass-wrapper');
        oldPasswordEl.style.animation = "glitch ease-out 0.20s 3";

        oldPasswordEl.addEventListener('animationend', function() {
            oldPasswordEl.style.animation = 'none';
        }, { once: true });

        if (document.querySelector('.password-status-container > .stats-text').style.display = 'block'){
            document.querySelector('.password-status-container > .stats-text').style.display = 'none';
        }
    }
    else{
        document.querySelector('p1').style.display = 'none';

        var formData = new FormData();
        formData.append('password', document.getElementById('rp_pass').value);
    }

    fetch(`http://127.0.0.1:8000/user-setting/${username}/`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
        },
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

///////////

var fileType;
var ol_pass;

function TriggerText(){
    const txt = document.querySelector('.pfp-txt');
    txt.style.animation = "glitch ease-out 0.20s 3";
    // txt.style.color = "rgb(152, 0, 0)";

    txt.addEventListener('animationend', function() {
        txt.style.animation = 'none';
        // txt.style.color = "#88680f"
    }, { once: true });

}

function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('pfp');
        output.style.backgroundImage = 'url(' + reader.result + ')';
    };
    fileType = event.target.files[0].type;

    if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg') {
        reader.readAsDataURL(event.target.files[0]);
    } else {
        TriggerText();
    }
}

function TriggerErrorUsername() {
    const usr = document.querySelector('.change-name-container > .username');
    const usr_wrap = document.querySelector('.username-wrapper');
    document.querySelector('p1').style.display = 'inline';
    document.querySelector('p').style.color = 'rgba(152, 0, 0, 0.773)';

    usr.style.animation = "glitch ease-out 0.20s 3";
    usr_wrap.style.animation = "glitch ease-out 0.20s 3";

    usr.addEventListener('animationend', function() {
        usr.style.animation = 'none';
        document.querySelector('p').style.color = '#bb8c08';
    }, {once: true});
    usr_wrap.addEventListener('animationend', function() {
        usr_wrap.style.animation = 'none';
    }, {once: true});
}

function UpdateSuccess() {
    document.querySelector('.name-status-container').style.display = 'flex';
    const up = document.querySelector('.name-status-container > .stats-info-text');

    if (document.querySelector('.name-status-container > .stats-info-text').style.display = 'none'){
        document.querySelector('.name-status-container > .stats-info-text').style.display = 'flex';
    }

    up.style.animation = "slide-up ease-out 0.10s 1";
}

function verify_info() {
    var formData = new FormData();

    formData.append('profile_picture', document.querySelector('input[type="file"]').files[0]);
    formData.append('full_name', document.getElementById('fullname_txt').value);
    formData.append('password', document.getElementById('old_pass').value);

    const userInp = document.getElementById('username_txt').value;
    const userStrd = localStorage.getItem('username');

    if (userInp !== userStrd){
        formData.append('username', userInp);
    }

    fetch(`http://127.0.0.1:8000/user-setting/${ussrr}/`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
        },
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        else{
            UpdateSuccess();
        }
    })
    .catch((error) => {
        console.log(error);
        TriggerErrorUsername();
    });
}

function updateData(data){
    const fullname_ = document.getElementById('first-last');
    const username_ = document.getElementById('username');
    const img_ = document.getElementById('pfp');

    fullname_.innerHTML = '';
    username_.innerHTML = '';

    const fname = document.createElement('fname');

    var mode = localStorage.getItem('mode');
    if (mode === 'Lite') {
        fname.style.color = "rgba(31, 30, 28, 1)";
    }
    else if (mode === 'Dark'){
        fname.style.color = "#e4e4e4";
    }

    const uname = document.createElement('uname');
    const pass = document.createElement('pass');
    
    fname.textContent = data.full_name;
    uname.textContent = data.username;
    pass.textContent = data.password;
    img_.style.backgroundImage = 'url(' + "http://127.0.0.1:8000" + data.profile_picture + ')';
    ol_pass = data.password;

    fullname_.appendChild(fname);
    username_.appendChild(uname);
}

fetch(`http://127.0.0.1:8000/user-setting/${ussrr}/`, {
    method:'GET',
})
    .then(response => response.json())
    .then(data => {
        document.getElementById('fullname_txt').value = data.full_name;
        document.getElementById('username_txt').value = data.username;
        updateData(data);
    })
    .catch(error => {
        console.error('Error fetching data', error);
})

document.getElementById('updatee').addEventListener('submit', function(event) {
    event.preventDefault();
    verify();
});

function logout_con(){
    document.querySelector('.logoutpop-container > .logoutpop-box').classList.add('logoutpop-box-animate-up');
    document.querySelector('.logoutpop-container').style.display = 'flex';
}

function closeLogOutBox() {
    document.querySelector('.logoutpop-container').style.display = 'none';
}

document.querySelector('.update-cancel-logout > .cancel-log').addEventListener('click', closeLogOutBox);

function delete_user(){
    document.querySelector('.deletepop-container > .deletepop-box').classList.add('deletepop-box-animate-up');
    document.querySelector('.deletepop-container').style.display = 'flex';
}

function closeDelUser() {
    document.querySelector('.deletepop-container').style.display = 'none';
}

document.querySelector('.update-cancel-delete > .cancel-del').addEventListener('click', closeDelUser);

/////////////////////////

document.getElementById('enter-del').addEventListener('click', delUserr);

function delUserr(){
    fetch(`http://127.0.0.1:8000/user-setting/${ussrr}/`, {
        method:'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}