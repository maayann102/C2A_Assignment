describe('comparePDFsText', () => {
    it("Read 2 PDF files text and compare their text", () => {
        cy.visit('/')
        cy.get('[href="./PDF1.pdf"]').click()
        cy.get('[href="./PDF2.pdf"]').click()
        // var text1 = cy.readFile('cypress/downloads/PDF1.pdf', 'utf8')
        // console.log(cy.readFile('cypress/downloads/PDF1.pdf', 'utf8'));
        // console.log(cy.getTextFromPDF('cypress/downloads/PDF1.pdf'))
        cy.log('Hello');
    })
})