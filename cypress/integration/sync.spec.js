/// <reference types="cypress" />

describe('Esperas...', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') 
    })
    
    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funcionou')

    })

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()        
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona')
        

    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        //cy.get('#lista li')
        //    .find('span')
        //    .should('contain', 'Item 2')
        //Em cima não não consegue pq ele achou o primeiro find que contem o itam 1 e não o 2. Fazer a seguinte forma:
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    

    })
    
    it('Uso do Time out', () => {
        //cy.get('#buttonDelay').click()
        //timeout do cypress é de padrão 4 segundos para colocar o timeout para colocar o timeout que dejesa é so colocar mais um atributo no get { timeout: 1000} por exemplo
        //para mudar o timeout padrão precisamos colocar no arquivo 'cypress.json' "defaultCommandTimeout: 1000" - Cuidado ao utilizar isso pois ele mexe em toda aplicação, usar apenas em casos extremos
        //cy.get('#novoCampo', { timeout: 1000}).should('exist')

        //cy.get('#buttonListDOM').click()
        //cy.wait(5000) - utilizar apenas em casos extremos, quando alguma resposta do dia esta demorando mto
        //cy.get('#lista li span')
        //    .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
        
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            //.should('have.length', 1)
            expect($el).to.have.length(1)
        })
            
    })

})