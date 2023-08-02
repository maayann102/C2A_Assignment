describe('comparePDFsText', () => {
    it("Should Compare & Assert the Texts of 2 PDF Files", () => {
        cy.visit('/')
        cy.get('[href="./PDF1.pdf"]').click()
        cy.get('[href="./PDF2.pdf"]').click()
        const PDFtext1 =  cy.getTextFromPDF('cypress/downloads/PDF1.pdf').text
        const PDFtext2 =  cy.getTextFromPDF('cypress/downloads/PDF2.pdf').text
        expect(PDFtext1).to.equal(PDFtext2);
    })
})