
describe('File Upload Test Suite', () => {
    it('Uploads a text file', () => {
      cy.visit('http://the-internet.herokuapp.com/upload');

      
  
      cy.fixture('sample-text-file.txt').then((fileContent) => {
        // cy.get('#file-submit').click();
        cy.get('#file-upload').click().attachFile({
          fileContent,
          fileName: 'sample-text-file.txt',
          mimeType: 'text/plain',
        });
      });

      //Click on upload button
      cy.get('#file-submit').click();

      //Assert if the file is uploaded successfully
      cy.contains('File Uploaded!').should('be.visible');
        });
  });
