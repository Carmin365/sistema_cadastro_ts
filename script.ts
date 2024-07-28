const formularioDeCadastro = document.getElementById('formularioDeCadastro') as HTMLFormElement;

formularioDeCadastro.addEventListener('submit' , function(event){
    event.preventDefault();

    const nome = document.getElementById('nome') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const dataDeNascimento = document.getElementById('dataDeNascimento') as HTMLInputElement;
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
