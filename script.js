document.getElementById('Loginform').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = 'farry';
    const correctPassword = 'farry';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword){
        alert("login berhasil");
        window.location.href = 'index.html';
    }else{
        alert("username atau password tidak sesuai");
    }

});