const pdfparse = require('pdf-parse');

async function getTextFromPDF(fileName) {
  const PDFtext = (await pdfparse(fileName)).text;
  return PDFtext;
}

async function comparePDFs(PDFfile1, PDFfile2) {
  const PDFtext1 = await getTextFromPDF(PDFfile1);
  const PDFtext2 = await getTextFromPDF(PDFfile2);
  if (PDFtext1 == PDFtext2){
    console.log('The PDFs are the same!');
  } else {
    console.log('The PDFs are different!');
  }
}
//compare between two differnt pdf files
comparePDFs('cypress/downloads/PDF1.pdf', 'cypress/downloads/PDF2.pdf');

//compare between two identical pdf files (the same pdf file actually)
comparePDFs('cypress/downloads/PDF1.pdf', 'cypress/downloads/PDF1.pdf');