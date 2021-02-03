/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;
    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal(2);
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

//objeto em javascript fica em chaves
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.eq(obj);
    //expect(obj).to.be.equal({a: 1, b: 2});
    //do jeito de cima falha por ele não verifica as propriedades do objeto. O jeito é conforma abaixo
    expect(obj).to.be.deep.equal({ a: 1, b: 2 });
    //do jeito de baixo tbm funciona
    expect(obj).eql({ a: 1, b: 2 });
    expect(obj).include({ a: 1 });
    //o include verifica se existe a propriedade a tem o valor 1
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.be.have.members([1, 2, 3]);
    expect(arr).to.include.members([1, 3]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

it('Types', () => {
    const nun = 1
    const str = 'String'

    expect(nun).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('String', () => {
    const str = 'String de teste'
    expect(str).to.be.equal('String de teste');
    expect(str).to.be.length(15);
    expect(str).to.be.contains('de')
    expect(str).to.be.match(/de/)
    //para ver se existem em primeiro colocar ^conforme abaixo
    expect(str).to.be.match(/^String/)
    //para finalizar é conforme abaixo
    expect(str).to.be.match(/teste$/)
    //verificar a quantidade de caracteres
    expect(str).to.be.match(/.{15}/)
    //verificar que so contem letras
    expect(str).to.be.match(/\w+/)
    //verificar que não contem numeros
    expect(str).to.be.match(/\D+/)
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(2)
    expect(number).to.be.below(5)
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 1.2)
    expect(floatNumber).to.be.closeTo(5.2, 1.2)
    expect(floatNumber).to.be.above(5)
})