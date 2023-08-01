describe('addCheapestPhoneToCart', () => {
    it("Login to site using user name and password and add the cheapest phone to cart", () => {
        // Enter to site
        cy.visit("https://www.demoblaze.com/")
        // Verify that the site is the right site
        cy.url().should("include", "demoblaze")
        cy.title().should("eq", "STORE")
        // Login with user name and password
        cy.get('#login2').click()
        cy.wait(500)
        cy.get('#loginusername').type("automatedUser26@example.com")
        cy.wait(500)
        cy.get('#loginpassword').type("4r4nd0mp4ssw0rd")
        cy.wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)

        // Enter to Phones section
        cy.get('#itemc').click()
        cy.wait(2000)
        // Choose the cheapest phone and add it to card
        cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').click()
        cy.wait(2000)
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
        // Enter to cart to verify the item is added
        cy.get('#cartur').click()
        cy.wait(1000)
        // for debug -> delete the item from the cart
        // cy.get('.success > :nth-child(4) > a').click({ multiple: true })
        // cy.wait(1000)
    })
})