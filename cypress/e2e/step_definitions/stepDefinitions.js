import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 

const locator= new locatorsPage();
const data= new Data(); 


// <------------------------------------------------------------------->
// <----------------------- Login Steps ------------------------------->
// <------------------------------------------------------------------->
Given('open demoblaze website',function(){ 
    cy.visit(data.URL);
    cy.wait(3000)
})
When('click on Home Button',()=>{ 
    cy.xpath(locator.home).click({force: true});
})
And('click on Phone Button',()=>{ 
    cy.xpath(locator.phone).click({force: true});
})
And('click on Laptop Button',()=>{ 
    cy.xpath(locator.laptop).click({force: true});
})
And('click on Monitors Button',()=>{ 
    cy.xpath(locator.monitors).click({force: true});
})
And('click on first mobile from list',()=>{ 
    cy.xpath(locator.firstProduct).click({force: true});
})
And('click on add to card',()=>{ 
    cy.xpath(locator.addToCard).click({force: true});
})
And('click on card',()=>{ 
    cy.xpath(locator.cart).click({force: true});
})
And('click on place order',()=>{ 
    cy.xpath(locator.placeOrder).click({force: true});
    cy.wait(2000)
})
And('enter username',()=>{ 
    cy.xpath(locator.nameTextBox).type(data.USERNAME);
})
And('enter country name',()=>{ 
    cy.xpath(locator.countryTextBox).type(data.COUNTRYNAME);
})
And('enter city name',()=>{ 
    cy.xpath(locator.cityTextBox).type(data.CITYNAME);
})
And('enter credit card number',()=>{ 
    cy.xpath(locator.creditCardTextBox).type(data.CREDITCARD);
})
And('enter month name',()=>{ 
    cy.xpath(locator.monthTextBox).type(data.MONTH);
})
And('enter year name',()=>{ 
    cy.xpath(locator.yearTextBox).type(data.YEAR);
})
And('click on purchase button',()=>{ 
    cy.xpath(locator.purchaseButton).click({force: true});
})

// Message
And('click on contacts',()=>{ 
    cy.xpath(locator.contact).click({force: true});
    cy.wait(2000)
})
And('type email address',()=>{ 
    cy.xpath(locator.contactEmailTextBox).type(data.USERNAME);
})
And('type contact name',()=>{ 
    cy.xpath(locator.contactNameTextBox).type(data.USERNAME);
})
And('type message',()=>{ 
    cy.xpath(locator.messageTextBox).type(data.MESSAGE);
})
And('click on send message',()=>{ 
    cy.xpath(locator.sendMessage).click({force: true});
})
And('click on close message',()=>{ 
    cy.xpath(locator.closeMessage).click({force: true});
})

// About us
And('click on about us',()=>{ 
    cy.xpath(locator.aboutUs).click({force: true});
    cy.wait(2000)
})
And('click on play',()=>{ 
    cy.xpath(locator.play).click({force: true});
    cy.wait(3000)
})
And('click on pause',()=>{ 
    cy.xpath(locator.pause).click({force: true});
})
And('click on close about us',()=>{ 
    cy.xpath(locator.aboutUsClose).click({force: true});
})

// Log in
And('click on log in',()=>{ 
    cy.xpath(locator.login).click({force: true});
    cy.wait(2000)
})
And('type login user name',()=>{ 
    cy.xpath(locator.userName).type(data.USERNAME);
})
And('type login password',()=>{ 
    cy.xpath(locator.password).type(data.PASSWORD);
})
And('click on log close',()=>{ 
    cy.xpath(locator.loginClose).click({force: true});
})

// Sign up
And('click on sign up',()=>{ 
    cy.xpath(locator.signup).click({force: true});
    cy.wait(2000)
})
And('type sign up user name',()=>{ 
    cy.xpath(locator.signupUsername).type(data.USERNAME);
})
And('type sign up password',()=>{ 
    cy.xpath(locator.signupPassword).type(data.PASSWORD);
})
And('click on sign up close',()=>{ 
    cy.xpath(locator.signupClose).click({force: true});
})



























When('Hover Tilli Navbar',()=>{ 
    cy.get(locator.tilli).click({force: true});
    // cy.wait(5000);
})

And('Click on English Button', ()=>{
    cy.xpath(locator.english).click({force: true});
})
And('Click on Sign in Button', ()=>{
    cy.get(locator.sighin).click({force: true});
})
And('Type username', ()=>{
    cy.get(locator.username).type(data.USERNAME);
})
And('Type password', ()=>{
    cy.get(locator.password).type(data.PASSWORD);
})
And('click submit', ()=>{
    cy.get(locator.signInSubmit).click({force: true});
    // cy.wait(5000);
})

 

// <------------------------------------------------------------------->
// <---------------- Sales, Sales Order ------------------------------->
// <------------------------------------------------------------------->

When('click sales button', ()=>{
    cy.xpath(locator.SalesTn_xpath).click({force: true});
    // cy.wait(5000);
})
And('click sales order button', ()=>{
    cy.xpath(locator.Ordertn_xpath).click({force: true});
    // cy.wait(5000);
})
And('sort the sales order number', ()=>{
    cy.xpath(locator.Sales_SOsortpage_xpath).click({force: true});
    cy.wait(5000);
})
And('again sort the sales order number', ()=>{
    cy.xpath(locator.Sales_SOsortpage_xpath).click({force: true});
    cy.wait(5000);
})
And('click the latest sales order number', ()=>{
    cy.xpath(locator.Sales_firstsales_xpath).click({force: true});
    // cy.wait(5000);
})
Then('assert the latest sales order', ()=>{
    cy.xpath(locator.Sales_ordernum).then(function(elem) {
        cy.log(`The latest sales order is : ${elem.text()}`)
   })
})
// <------------------------------------------------------------------->
// <--------------------- Sales Invoice ------------------------------->
// <------------------------------------------------------------------->
And('click sales invoice', ()=>{
    cy.xpath(locator.SalesinvTn).click({force: true});
    // cy.wait(5000);
})
And('click first sales invoice', ()=>{
    cy.xpath(locator.First_inv).click({force: true});
    // cy.wait(5000);
})
Then('assert the latest sales invoice', ()=>{
    cy.xpath(locator.invoice_no).then(function(elem) {
        cy.log(`The latest sales invoice is : ${elem.text()}`)
   })
})
// <------------------------------------------------------------------->
// <------------------------- Work Card ------------------------------->
// <------------------------------------------------------------------->
When('click on production', ()=>{
    cy.xpath(locator.top_nav).click({force: true});
    // cy.wait(5000);
})
And('click on work card', ()=>{
    cy.xpath(locator.workcard_nav).click({force: true});
    // cy.wait(5000);
})
And('click on first view', ()=>{
    cy.xpath(locator.first_view).click({force: true});
    // cy.wait(5000);
})
Then('assert the worknumber', ()=>{
    cy.xpath(locator.work_number).then(function(elem) {
        cy.log(`The workcard number is : ${elem.text()}`)
   })
})
// <------------------------------------------------------------------->
// <------------------- Sales Machine Test ---------------------------->
// <------------------------------------------------------------------->
//test_CRSalesOrderModal1
And('click on create a new sales order', ()=>{
    cy.xpath(locator.Sales_SOCreateNewButton_xpath).click({force: true});
    // cy.wait(5000);
})
Then('assert the sales order New', ()=>{
    cy.xpath(locator.Sales_SONewTitle_xpath).then(function(elem) {
        cy.log(`The workcard number is : ${elem.text()}`)
   })
})
And('click on customer textbox', ()=>{
    cy.xpath(locator.Sales_SOCustomerNameSearch_xpath).click({force: true});
    // cy.wait(5000);
})
//test_Customerselection
And('type customer name', ()=>{
    cy.xpath(locator.Sales_SOCustomerNameSearch_xpath).type('alin');
    // cy.wait(5000);
})
And('select first element form dropdown', ()=>{
    cy.xpath(locator.locator_customername_dropdown_firstchild_xpath).click({force: true});
    // cy.wait(5000);
})
And('click on term of delivery', ()=>{
    cy.xpath(locator.Sales_SOTermofDeliverySearch_xpath).click({force: true});
    // cy.wait(5000);
})
//test_TermofDelSelection
And('type term of delivery', ()=>{
    cy.xpath(locator.Sales_SOTermofDeliverySearch_xpath).type('when confirmed ok');
    // cy.wait(5000);
})
And('click first term of delivery', ()=>{
    cy.xpath(locator.locator_TOD_dropdown_firstchild_css).click({force: true});
    // cy.wait(5000);
})



  