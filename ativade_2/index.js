let rs = require('readline-sync');

let questionOne = String(rs.question('Está usando mascara quando precisa sair de casa? '));
let questionTwo = String(rs.question('Está lavando as mãos frequentemente? '));
let confirm = 'Sim';
let not = 'Nao';

if(questionOne == confirm && questionTwo == confirm) {
    console.log('Meus parabens!! continue assim, vamos todos juntos acabar com a COVID-19');
} else if(questionOne == not && questionTwo == not) {
    console.log('Olha só enquanto todos lutam tem um ser que acha que nunca pegará, isso é muito feio, você não está contribuindo para acabar com a COVID-19 e, sim está ajudando para que o mesmo continue crescendo cada vez mais! Vamos se juntar ao restante da turma e fazer tudo direitinho?')
}else {
    console.log('Dados inconsistentes');
}