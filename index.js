// const fs = require('fs');
const pdfparse = require('pdf-parse');

async function getTextFromPDF(fileName) {
  const PDFtext = (await pdfparse(fileName)).text;
  return PDFtext;
}

async function comparePDFs(file1, file2) {
  const text1 = await getTextFromPDF(file1);
  const text2 = await getTextFromPDF(file2);
  if (text1 == text2){
    console.log('The PDFs are the same!');
  } else {
    console.log('The PDFs are different!');
  }
}
comparePDFs('PDF1.pdf', 'PDF2.pdf');