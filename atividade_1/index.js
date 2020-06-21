let rs = require('readline-sync');

let number = Number(rs.question('Qual o numero do seu voo? '));
let fileira = String(rs.question('Qual fileira deseja sentar? '));
let letra1 = 'A';
let letra2 = 'B';
let letra3 = 'C';
let letra4 = 'D';
let letra5 = 'E';
let letra6 = 'F'; 

if(fileira == letra1 || fileira == letra2 || fileira == letra3 || fileira == letra4 || fileira == letra5 || fileira == letra6) {
    console.log('O numero do seu voo é ' + number + ' e a fileira é ' + fileira);
    console.log('Boa Viagem!');
}else {
    console.log('Dados inconsistentes');
}
