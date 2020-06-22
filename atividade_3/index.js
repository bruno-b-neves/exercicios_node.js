let rs = require('readline-sync');

let numberOne = Number(rs.question('Topo: '));
let numberTwo = Number(rs.question('Direita: '));
let numberTree = Number(rs.question('Inferior: '));
let numberFour = Number(rs.question('Esquerda: '));
let totalOne = numberOne + numberTwo;
let totalTwo = numberTree + numberFour;
let total = totalOne + totalTwo;

if(total){
    console.log('O total é: ' + total + 'm²');
}else{
    console.log('Desculpe o valor informado não confere!')
}

