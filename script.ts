document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector("#formularioDeCadastro");
    
    if(formulario) {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const dataDeNascimento = document.querySelector("#dataDeNascimento").value;
    const nivel = document.querySelector("#nivel").value;

            if (!nome || !email || !dataDeNascimento || !nivel) {
                alert("Preencha todos os campos corretamente.");
                return;
            }
            
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Data de Nascimento:", dataDeNascimento);
        cosole.log("Nível:", nivel);
    
        alert("Cadastro concluído!");
            formulario.reset();
   });

}
});
