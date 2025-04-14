const senha = "123456";
let login = "admin";

if(senha === "123456" && login === "admin") {
    return console.log("Acesso permitido!");
}

if(senha === "123456"){
    return console.log("Senha correta!");
}

if(login === "admin"){
    return console.log("Login correto!");
}