describe('File Upload Test Suite', () => {
    it('Uploads a text file', () => {
      cy.visit('http://the-internet.herokuapp.com/upload');
  
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
  