let idade = 20;
let possuiCadastro = true;
let nivelAcesso = "usuario";

if (idade >= 18) {
    console.log("Acesso permitido: maior de idade.");
} else if (possuiCadastro === true && nivelAcesso === "supervisor") {
    console.log("Acesso permitido: possui cadastro e nível de supervisor.");
} else if (nivelAcesso === "admin") {
    console.log("Acesso total: administrador do sistema.");
} else {
    console.log("Acesso negado.");
}