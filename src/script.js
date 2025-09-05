let username = document.getElementById("username");
let password = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener("click", () => {

    if (!(username.value) && !(password.value )) {
        alert("Você não inseriu nada nos inputs")
    }else{
        alert(`Seu nome de usuário é: ${username.value} e sua senha é: ${password.value}`);
    }
});
