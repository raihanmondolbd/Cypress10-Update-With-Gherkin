import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 

const locator= new locatorsPage();
const data= new Data(); 


// <------------------------------------------------------------------->
// <----------------------- Login Steps ------------------------------->
// <------------------------------------------------------------------->
Given('fikuro Website Visit',function(){ 
    cy.visit(data.URL);
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



  