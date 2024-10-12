function register() {
    let name = document.getElementById('re_name').value;
    let email = document.getElementById('re_mail').value;
    let password = document.getElementById('re_password').value;

    fetch('http://127.0.0.1:8001/api/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
}) .then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
    console.error('Error:', error);
});
}

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    fetch('http://127.0.0.1:8001/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        document.cookie = `access=${data.access}; path=/`;
        console.log(data);
    })
    .catch(error => console.error('Error:', error));

}





function getProfile() {

    fetch('http://127.0.0.1:8001/api/user/', {
        method: 'GET',
        credentials: 'include',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}

function logout() {
    fetch('http://127.0.0.1:8001/api/logout/', {
        method: 'POST',
        credentials: 'include',
        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}




