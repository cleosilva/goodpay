import controlerUserLogin from "./moduloInterface.js";

// Trazendo elementos do Bootstrap 
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

// Trazendo os botões da DOM em Html
const entrarUsuario = document.getElementById('btnEntrar');
entrarUsuario.addEventListener('click', (evento) => {
    let nome = document.getElementById('nome').value,
    senha = document.getElementById('senha').value;
    // Testando se os campos não estão vazios
    if(!nome || nome === null || nome === ''|| !senha || senha === null || senha === ''){
        document.getElementById('titleModal').innerHTML = ``
        myModal.show();
    }else{
        controlerUserLogin.loginInfo(nome, senha);
    }
})

