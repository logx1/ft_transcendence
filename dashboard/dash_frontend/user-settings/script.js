
    // let ussrr = "abdel-ou"

// window.onload = function() {
//     let menu_icon_box = document.querySelector(".small-sidebar-container");
//     let box = document.querySelector(".sidebar-container");

//     menu_icon_box.onclick = function() {
//         box.classList.toggle("active");
//     };

//     // Close the sidebar when clicking outside of it
//     document.addEventListener('click', function(event) {
//         let isClickInside = box.contains(event.target) || menu_icon_box.contains(event.target);
 
//         if (!isClickInside) {
//             box.classList.remove("active");
//         } 
//     });

//     // Close the sidebar when the window is resized
//     window.addEventListener('resize', function() {
//         box.classList.remove("active");
//     });
// };

function sss() {
    let box = document.querySelector(".sidebar-container");
    box.classList.toggle("active");
}

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
    const oldpass = document.querySelector('.old-pass-area');
    const newpassone = document.querySelector('.new-pass-area');
    const newpasstwo = document.querySelector('.new-pass-area');

    // check the length of the password
    // if (newpassone.value.length < 8) {
    //     console.log('password is too short');
    // }

    if (newpassone.value != newpasstwo.value || oldpass.value != newpassone.value) {
        console.log('passwords do not match');
    }else
    {

    }

    // console.log(oldpass.value);
    // console.log(newpassone.value);
    // console.log(newpasstwo.value);

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

function verify_info() {
    var formData = new FormData();

    formData.append('profile_picture', document.querySelector('input[type="file"]').files[0]);
    formData.append('full_name', document.getElementById('fullname_txt').value);
    formData.append('password', document.getElementById('old_pass').value);

    const firstName = document.getElementById('fullname_txt').value;
    const lastName = document.getElementById('username_txt').value;
    
    const fullName = `${firstName} ${lastName}`
    formData.append('full_name', fullName)

    fetch('http://127.0.0.1:8001/api/user/', {method: 'get', credentials: 'include'})
    .then(response => response.json())
    .then(data => {
        
        fetch(`http://127.0.0.1:8004/user-setting/${data.username}/`, {
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
    })
    .catch((error) => {
        console.log(error);
    });


    })

    
}

function updateData(data){
    const fullname_ = document.getElementById('first-last');
    const username_ = document.getElementById('username');
    const img_ = document.getElementById('pfp');

    fullname_.innerHTML = '';
    username_.innerHTML = '';

    const fname = document.createElement('fname');
    const uname = document.createElement('uname');
    const pass = document.createElement('pass');
    
    fname.textContent = data.full_name;
    uname.textContent = data.username;
    pass.textContent = data.password;
    img_.style.backgroundImage = 'url('+ "http://127.0.0.1:8004" + data.profile_picture + ')';
    ol_pass = data.password;
   
    fullname_.appendChild(fname);
    username_.appendChild(uname);
}

// fetch(`http://10.12.3.5:8000/user-setting/${ussrr}/`, {
//     method:'GET',
// })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('fullname_txt').value = data.full_name;
//         document.getElementById('username_txt').value = data.username;
//         updateData(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data', error);
// })

// document.getElementById('updatee').addEventListener('submit', function(event) {
//     event.preventDefault();
//     verify();
// });


function logout_con(){
    document.querySelector('.logoutpop-container > .logoutpop-box').classList.add('logoutpop-box-animate-up');
    document.querySelector('.logoutpop-container').style.display = 'flex';
}


function closeLogOutBox() {
    document.querySelector('.logoutpop-container').style.display = 'none';
}

function logout() {
    fetch('http://127.0.0.1:8001/api/logout/', {method: 'post', credentials: 'include'})
    .then(response => {
        
        // delete cookies
        document.cookie = 'access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        console.log('logged out');
        go_welcome();
    })
}

function delete_user(){
    document.querySelector('.deletepop-container > .deletepop-box').classList.add('deletepop-box-animate-up');
    document.querySelector('.deletepop-container').style.display = 'flex';
}

function closeDelUser() {
    document.querySelector('.deletepop-container').style.display = 'none';
}

function delUserr(){


    console.log("user delete function called");
    fetch('http://127.0.0.1:8001/api/user/', {method: 'GET',credentials: 'include',})
    .then(response => response.json())
    .then(data => {
        fetch(`http://127.0.0.1:8004/user-setting/${data.username}/`, {
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


    fetch(`http://127.0.0.1:8001/api/delete/${data.username}/`, {
        method:'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })

    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    logout();

    })
    
}