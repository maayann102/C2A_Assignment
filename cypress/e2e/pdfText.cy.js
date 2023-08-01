describe('Comapre 2 PDFs Text', () => {
  it('Should Compare & Assert the Texts of 2 PDF Files', () => {
    // const pdfFilePath1 = 'cypress\\e2e\\PDF1.pdf';
    const pdfFilePath1 = 'PDF1.pdf';
    // const pdfFilePath2 = 'cypress\\e2e\\PDF2.pdf';
    const pdfFilePath2 = 'PDF2.pdf';

    cy.getTextFromPDF(pdfFilePath1).then((pdfData) => {
      cy.log(pdfData)
    });
  })
})