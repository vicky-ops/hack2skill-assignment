describe('Testing If Image is broken!', () => {
    it('Check if any broken image present or not', () => {
        //visit the page
      cy.visit('http://the-internet.herokuapp.com/broken_images');
      cy.get('img').each(($img) => {
        // Check if the image is broken
        cy.request({
          url: $img.attr('src'),
          failOnStatusCode: false,
        }).then((response) => {
          if (response.status === 404) {
            cy.log(`Found a broken image: ${$img.attr('src')}`);
          }
        });
      });
    });
  });
  //Testing is done to check if the page contains any 404 image
  