/// <reference types="cypress" />

describe('Work with basic elements', () => {
    //Hooks são coisas que fazem antes ou depois de todos os testes
    //before vai executar 1 antes do primeiro teste
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') 
    })
    //beforeEach vai executar antes de todos os testes
    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {            
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {        
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')


        //Reload da um reflefh na tela 
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        //pare textos em campo não utilizamos have.text e sim have.value conforme abaixo
        cy.get('#formNome').should('have.value', 'Cypress Test')

        //cy.get('#elementosForm\:sugestoes')
        //    .type('textarea')
        //   .should('have.value', 'textarea')
            //se executarmos assim vai dar erro por conta dos : no get do elemento, algums comando do jqueryselecto e os 2 pontos estão confunciondo para reconhecer os : pontos precisa ser que nem o exemplo abaixo
            // sempre que tiver : atrelado com ID utilizar \\ para que funcione
        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
           .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
        
        //quando não souber qual evento de tecla usar escrever um errado que no erro ele apresentara as teclas disponiveis
        cy.get('[data-cy=dataSobrenome]')
        .type('Teste12345{backspace}{backspace}')
        //Colocando o {backspace} ele apaga o que escreveu
        .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            //delay faz com que esta acontecendo demore pra acontecer num tempo determinado. Por exemplo na escrita de cada letra demora um pouco mais 
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')        

    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        
        cy.get('#formSexoMasc')
            .should('not.be.checked')

        //dentro do cypress podemos fazer uma busca por propriedade alguma coisa do elemento e utilizamos [] para fazer a busca
        cy.get("[name=formSexo]").should('have.length', 2)
        //o codigo acima é so pra confirmar que exite os 2 elementos que existe na pagina
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        //comando para clicar em varios elementos
        cy.get('[name=formComidaFavorita]')
        .click({ multiple: true })
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaFrango').should('be.checked')
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        //TODO validar as opções do combo
    })

    it.only('Combo Multiplo', () => {
        //para fazer multiplas seleções precisa ser o valor do Value
        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida'])

        //TODO validar opções selecionadas do combo multiplo
    })
})