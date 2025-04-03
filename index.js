document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector("#formularioDeCadastro");
    
    if(formulario) {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();

    const nome = document.querySelector("#nome") .value.trim();
    const email = document.querySelector("#email") .value.trim();
    const dataDeNascimento = document.querySelector("#dataDeNascimento") .value.trim();
    const nivel = document.getElementById('nivel') as HTMLInputElement;

    const DadosDaBaseDeDados = {
        nome: nome.value,
        email: email.value,
        dataDeNascimento: dataDeNascimento.value,
        nivel: nivel.value
    };
    // Armazenamento dos dados na base de Dados.
        console.log('Dados do Cadastro:' , DadosDaBaseDeDados);
    
    // Confirmação do cadastro
        alert('Seu cadastro foi concluído!');
   });
