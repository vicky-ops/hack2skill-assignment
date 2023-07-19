describe('File Upload Test Suite', () => {
    it('Uploads an image', () => {
      cy.visit('https://example.com/image-upload-page');
  
      cy.fixture('sample-image.jpg').then((fileContent) => {
        cy.get('#image-upload-btn').click();
        cy.get('#image-upload').attachFile({
          fileContent,
          fileName: 'sample-image.jpg',
          mimeType: 'image/jpeg',
        });
      });
  
      // Add any assertions or verifications related to the image upload here
    });
  
    it('Uploads a PDF', () => {
      cy.visit('https://example.com/pdf-upload-page');
  
      cy.fixture('sample-pdf.pdf').then((fileContent) => {
        cy.get('#pdf-upload-btn').click();
        cy.get('#pdf-upload').attachFile({
          fileContent,
          fileName: 'sample-pdf.pdf',
          mimeType: 'application/pdf',
        });
      });
  
      // Add any assertions or verifications related to the PDF upload here
    });
  
    it('Uploads a text file', () => {
      cy.visit('https://example.com/txt-upload-page');
  
      cy.fixture('sample-text-file.txt').then((fileContent) => {
        cy.get('#txt-upload-btn').click();
        cy.get('#txt-upload').attachFile({
          fileContent,
          fileName: 'sample-text-file.txt',
          mimeType: 'text/plain',
        });
      });
  
      // Add any assertions or verifications related to the text file upload here
    });
  });
  