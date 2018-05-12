console.log("Olá");

const fs = require("fs")
const os = require("os")

let user = os.userInfo();
fs.appendFileSync("texto.txt", "Dados do Usuario\n");
fs.appendFileSync("texto.txt" , `User Name :  ${user.username} \n`)
fs.appendFileSync("texto.txt", `Home Folder : ${user.homedir} \n`)
console.log(user)
