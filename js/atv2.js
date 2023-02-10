var nome=window.prompt("Informe seu nome:")
var anoNasc=parseInt(window.prompt("Informe seu ano de nascimento:"))
var email=window.prompt("Informe seu e-mail:")
var telefone=parseInt(window.prompt("Informe seu telefone:"))

var idade=2022 - anoNasc

document.write(`Nome: ${nome} <br>`)
document.write(`Ano de nascimento: ${anoNasc} <br>`)
document.write(`Idade: ${idade} <br>`)
document.write(`E-mail: ${email} <br>`)
document.write(`Telefone: ${telefone}`)