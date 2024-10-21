describe('Покупка аватара', function () { 
    beforeEach('Начало теста', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('.auth__button').should('have.css','background-color','rgb(237, 111, 45)') // проверка цвета кнопки "войти"
          });

    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.get('input[type="email"]').type('user_login');
        cy.get('input[type="password"]').type('user_password');
        cy.get('.auth__button').click();
        cy.wait(1000);
        cy.get('.header__container > .header__id').click({ force: true });
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click({ force: true });  
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');

    });
});
