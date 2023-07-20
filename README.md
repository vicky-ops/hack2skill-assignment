
## Project Name: Hack2Skill Assignment The Internet Herokuapp



## Testing for:-
- [X] Validate if there are broken images.
- [X] Try uploading any file.


## Project Specif Links
Manual Test Case Sheet [Link](https://docs.google.com/spreadsheets/d/1lWt0Ccr4pc7EkbUR4Y5YqOOzmEutJOGA9wE9ILrLa5I/edit#gid=0) 

Project [Link](https://github.com/vicky-ops/hack2skill-assignment/)

## Concepts Included
- [X] Common web page interaction methods

## TOOLS & Requirements
- [X] Node>16.20
- [X] NPM>7.8
- [X] Cypress>12.17
- [X] VsCode
- [X] GIT & GITHUB

### Test Cases


1. Access http://the-internet.herokuapp.com/broken_images, and validate if there are broken images.

Test Steps:-
```
1. Open Chrome Browser.
2. In the URL BAR enter 
   http://the-internet.herokuapp.com/broken_images
   and present enter button.
3. A Page should load with images.
    
Expected Behavior:
The page should contain broken images.

Actual Behavior:
The page contains multiple broken images.

Status: Pass
```
#### Automation
```javascript
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
```
2. Access http://the-internet.herokuapp.com/upload and try uploading any file

Test Steps:-
```
1. Open Chrome Browser.
2. In the URL BAR enter 
http://the-internet.herokuapp.com/upload
and present enter button.
3. A Page should load with header "File Uploader" as H3.
4. Click on "Choose file" button to upload file "demo.txt".
5. Click on upload.
6. upon Clicking on Upload button page should redirected to a new page.uld load with images.
    
Expected Behavior:
The redircted page should contain ''File Uploaded!" as h3 header with a div containing the uploaded file name, Here the name is 'demo.txt'.
Actual Behavior:
The page is loaded with expected ''File Uploaded!" as h3 header with a div containing the uploaded file name, Here the name is 'demo.txt'.
Status: Pass
```
#### Automation
```javascript
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
  ```

## Test Summary Report

| **Platform and Browser**     | **Product Name**          |
|-----------------------------|---------------------------|
| Ubuntu 22.04                | The INTERNET HEROKU APP   |
| Chrome 115.0.5790.98        |                           |

| **Product Links**                              |
|-----------------------------------------------|
| [Broken Images](http://the-internet.herokuapp.com/broken_images) |
| [Upload](http://the-internet.herokuapp.com/upload)               |

| **Project Description**                       |
|-----------------------------------------------|
| The Internet Herokuapp is a website specifically made for common website testing scenarios. For this assignment, we tested the broken image and upload modules of the website. |

| **Author**     | **Total Test Cases** | **Project Duration**                             |
|----------------|----------------------|-------------------------------------------------|
| Vicky Das      | 2                    | Start Date: 18th July 2023 End Date: 19th July 2023 |

| **Test Case Status** |
|----------------------|
| Passed: 2            |
| Failed: 0            |
