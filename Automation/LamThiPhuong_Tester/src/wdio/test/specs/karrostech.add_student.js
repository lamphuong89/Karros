
//URL: https://systemmanagement-stage.karrostech.io/login
////User name: test+challenge@karrostech.com
//Password: Test@123	
import chai from 'chai';
var expect = chai.expect;

describe('Add new student ', () => {
    

    it('Case 1: Validate when input all fields and submit', () => {
        browser.url('https://systemmanagement-stage.karrostech.io/login');
        $('input[formcontrolname="username"]').setValue('test+challenge@karrostech.com');
        $('input[formcontrolname="password"]').setValue('Test@123');
        browser.pause(2000);

        $('button[type="submit"]').click();
        browser.pause(5000);

        browser.url('https://systemmanagement-stage.karrostech.io/student-management/student');
        browser.pause(1000);
        $('div[class="group-btn"]').click();
        browser.pause(3000);
        $('input[id="mat-input-4"]').setValue('Tester_1');
        $('input[id="mat-input-5"]').setValue('QA_1');
        browser.pause(2000);
        $('button[type="button"]').click();
        $('td[aria-label="April 25, 2021"]').click();
        
        browser.pause(3000);
        $('input[formcontrolname="grade"]').setValue('Grade1');
    
        browser.pause(3000);
        $('input[formcontrolname="school"]').click();

        $('mat-option[id="mat-option-3"]').click();
    
        $('input[formcontrolname="districtId"]').click();
        $('input[formcontrolname="districtId"]').setValue('PP_1');

        $('input[formcontrolname="legacyStudentId"]').click();
        $('input[formcontrolname="legacyStudentId"]').setValue('legacy_1');

        browser.pause(3000);
        $('button[type="submit"]').click();

        let innerHTML = $('simple-snack-bar.mat-simple-snackbar').getHTML(false);
        expect(innerHTML).to.equal('<span>Add new Student successfully.</span><!----><div class="mat-simple-snackbar-action ng-star-inserted"><button mat-button="" class="mat-button mat-button-base"><span class="mat-button-wrapper">X</span><div class="mat-button-ripple mat-ripple" matripple=""></div><div class="mat-button-focus-overlay"></div></button></div>');
     
 browser.pause(3000);

        
    });



    it('Case 2: Validate when only input at mandatory fields and submit', () => {
       

        browser.url('https://systemmanagement-stage.karrostech.io/student-management/student');
        browser.pause(1000);
        $('div[class="group-btn"]').click();
        browser.pause(3000);
        $('input[id="mat-input-4"]').setValue('Tester_2');
        $('input[id="mat-input-5"]').setValue('QA_2');
        browser.pause(2000);
        $('button[type="button"]').click();
        $('td[aria-label="April 25, 2021"]').click();
        
        browser.pause(3000);
        $('input[formcontrolname="school"]').click();

        $('mat-option[id="mat-option-3"]').click();
    
        $('input[formcontrolname="districtId"]').click();
        $('input[formcontrolname="districtId"]').setValue('PP_2');


        browser.pause(3000);
        $('button[type="submit"]').click();

        let innerHTML = $('simple-snack-bar.mat-simple-snackbar').getHTML(false);
        expect(innerHTML).to.equal('<span>Add new Student successfully.</span><!----><div class="mat-simple-snackbar-action ng-star-inserted"><button mat-button="" class="mat-button mat-button-base"><span class="mat-button-wrapper">X</span><div class="mat-button-ripple mat-ripple" matripple=""></div><div class="mat-button-focus-overlay"></div></button></div>');
        browser.pause(3000);
        
    });
    

    it('Case 3: Fileter School', () => {

        browser.url('https://systemmanagement-stage.karrostech.io/student-management/student');
        browser.maximizeWindow()
        browser.pause(5000);
        $('input[id="schoolName"]').setValue('test school 7');
        browser.pause(3000);
        $('mat-icon[aria-label="Filter"]').click();
        browser.pause(3000);

        let actual=$('mat-cell[class="mat-cell cdk-column-schoolName mat-column-schoolName ng-star-inserted"]').getText();
        console.log(actual);
       expect(actual).to.equal('TEST SCHOOL 7');
    
       

        
    });

    
});