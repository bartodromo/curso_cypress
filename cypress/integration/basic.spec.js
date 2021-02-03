/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        //const title = cy.title()
        //console.log(title)
        //O codigo de cima não funcionou por conta pois precisa de promises porque o cypress trabalha de uma forma sincrona. Aprecisamos esperar de uma forma assincrona conforma abaixo
        //no caso do should abaixo ele vai ficar tentando até encontra ou role algum timeout
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
        //abaixo poderia usar then ao inves de should    
        cy.title().should(title => {
            console.log(title)
        })

        //TODO imprimir o log no console
        //TODO Escrever o title em um campo de teste
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        //cy.get('#buttonSimple').click()
        //cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        //podemos melhorar da seguinte forma
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    })
})