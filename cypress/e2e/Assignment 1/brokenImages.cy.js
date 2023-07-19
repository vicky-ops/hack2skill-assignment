describe('Testing If Image is broken!',()=>{
    it('Check if any broken image present or not',()=>{
        cy.visit('http://the-internet.herokuapp.com/broken_images');

        cy.get('img').each(($img)=>{
            //check if the image is broken
            cy.request($img.attr('src')).then((response) => {
                expect(response.status).to.equal(404); // Assuming a 200 status code means the image is not broken
              });
        })
    })
})