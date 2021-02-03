/// <reference types="cypress" />

describe('Helpers', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        //obj.should('have.property', 'nome')
        // para que funcione com o should que é um propriedade do cypress precisa ser usando conforme abaixo
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').then($el => {
            //$el.val('Funciona via jquery')
            //do modo de cima esta funcionado como jquery, mas o log se perde e queremos usar as propriedades do cypress
            //cy.wrap($el).type('Funciona via cypress')

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)

            cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
            //promise.then(nun => console.log(nun))
            cy.wrap(promise).then(ret => console.log(ret))
            cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))
        })
    })
})