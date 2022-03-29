const url="https://jsonplaceholder.typicode.com/users";

//processo 1:
// fetch(url)
// .then(resposta=>resposta.json())
// .then(dados=>{
//     const  nomeUsuario=document.querySelector("#nomeusuario");
//     const userName =document.querySelector("#username");
//     const userEmail=document.querySelector("#user-email");

//     nomeUsuario.textContent=dados[1].name;
//     userName.textContent=dados[1].username;
//     userEmail.textContent=dados[1].email;

//     let nome =dados[1].username;
//     let email=dados[1].email;
// })


//processo 2:
async function PegarDados() {
    const  nomeUsuario=document.querySelector("#nomeusuario");
    const userName =document.querySelector("#username");
    const userEmail=document.querySelector("#user-email");
    const num=8;//escolhe o usuario do array dados

    const response= await fetch(url);
    const dados= await response.json();


    nomeUsuario.textContent=dados[num].name;
    userName.textContent=dados[num].username;
    userEmail.textContent=dados[num].email;

    console.log(dados);
}

PegarDados();