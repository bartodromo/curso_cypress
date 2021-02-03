it('nada agora', function() {})

//function soma(a, b) {
//    return a + b;
//}

//const soma = function(a, b) {
//   return a + b
//}

//const soma = (a, b) => {
//    return a + b
//}

//const soma = (a, b) => a + b

//Erros comuns de colocar desse modo ao invés de colocar como esta acima (const soma = (a, b) => a + b)
//const soma = (a, b) => {
//    a + b
//}
//Se colocar colchete sera necessário colocar o return embaixo


//const soma = (a) => a + a
//Quando so tem um parametro conforma acima não é nessário colocar o () é so fazer conforme exemplo abaixo

//const soma = a => a + a
//Se tiver 2 parametros e não colocar ( ) vai dar problema 

//Quando não tem parametro é necessário colocar o (), conforme abaixo

const soma = ( ) => 5 + 5

console.log(soma(1,10))

it('a function test...', function () {
    console.log('Function', this)
})

it('an arrow test...', () =>{
    console.log('Arrow', this)
})

//Arrow function não para por aqui, é bom pesquisar sobre o contexto da linguagem pesquisar por ES6 ajuda