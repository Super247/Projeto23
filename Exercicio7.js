const prompt = require('prompt-sync')();
var n1 = prompt("Qual a altura?");
var n2 = prompt("Qual seu peso?");
var imc = n2 / (n1**2);
console.log("Seu imc é "+imc);