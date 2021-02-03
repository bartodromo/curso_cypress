/// <reference types="cypress" />

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A especific test...', () => {

        })
    })
    it('A internal test...', () => {

    })
})

// dentro podemos utilizar skip e only para falar qual grupo ou teste que vai ser executando