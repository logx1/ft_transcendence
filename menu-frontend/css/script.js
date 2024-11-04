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

function logout_con(){
    document.querySelector('.logoutpop-container > .logoutpop-box').classList.add('logoutpop-box-animate-up');
    document.querySelector('.logoutpop-container').style.display = 'flex';
}

function closeLogOutBox() {
    document.querySelector('.logoutpop-container').style.display = 'none';
}

document.querySelector('.update-cancel-logout > .cancel-log').addEventListener('click', closeLogOutBox);

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
        document.querySelector('.lang-container > .select-lang').style.backgroundImage = "url('./icons/french.svg')";
        document.querySelector('.lang-container > .lang-option').style.backgroundImage = "url('./icons/english.svg')";

        document.getElementById('welcome-txt').innerHTML = "Bienvenue!👋"
        document.getElementById('start-playing').innerHTML = "commencer à jouer"

        document.getElementById('user-chat-text').innerHTML = "Conversations"
        document.getElementById('user-settings-text').innerHTML = "Paramètres"
        document.getElementById('user-profile-text').innerHTML = "Profil"
        document.getElementById('logout-text').innerHTML = "Déconnecter"

        document.getElementById('logoutpop-tex').innerHTML = "Êtes-vous sûr(e) de vouloir vous déconnecter ?"
        document.getElementById('cancel-log').innerHTML = "Non"
        document.getElementById('enter-log').innerHTML = "Oui"
    }
    else{
        document.querySelector('.lang-container > .select-lang').style.backgroundImage = "url('./icons/english.svg')";
        document.querySelector('.lang-container > .lang-option').style.backgroundImage = "url('./icons/french.svg')";

        document.getElementById('welcome-txt').innerHTML = "Welcome!👋"
        document.getElementById('start-playing').innerHTML = "Start playing"

        document.getElementById('user-chat-text').innerHTML = "Chat"
        document.getElementById('user-settings-text').innerHTML = "Settings"
        document.getElementById('user-profile-text').innerHTML = "Profile"
        document.getElementById('logout-text').innerHTML = "Log out"

        document.getElementById('logoutpop-tex').innerHTML = "are you sure you want to logout?"
        document.getElementById('cancel-log').innerHTML = "No"
        document.getElementById('enter-log').innerHTML = "Yes"
    }
}