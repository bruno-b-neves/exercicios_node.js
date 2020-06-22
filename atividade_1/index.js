let rs = require('readline-sync');

let number = Number(rs.question('Qual o numero do seu voo? '));
let fileira = String(rs.question('Qual fileira deseja sentar? '));

/* 
let letra1 = 'A';
let letra2 = 'B';
let letra3 = 'C';
let letra4 = 'D';
let letra5 = 'E';
let letra6 = 'F';
*/

switch(fileira){
    case 'A':
        console.log('A fileira que irá sentar é a A');
        break;
    case 'B':
        console.log('A fileira que irá sentar é a B');
        break;
    case 'C':
        console.log('A fileira que irá sentar é a C');
        break;
    case 'D':
        console.log('A fileira que irá sentar é a D');
        break;
    case 'E':
        console.log('A fileira que irá sentar é a E');
        break;
    case 'F':
        console.log('A fileira que irá sentar é a F');
        break;
    default:
        console.log('Dados invalidos');
}
