Feature: Sales Machine Test

    Background: Login To Fikuro Website
        Given fikuro Website Visit
        When Hover Tilli Navbar
        And Click on English Button
        And Click on Sign in Button
        And Type username
        And Type password
        And click submit
    
    Scenario: test_navigate_SalesOrder
        When click sales button
        And click sales order button

    Scenario: test_CRSalesOrderModal1
        When click sales button
        And click sales order button
        And click on create a new sales order
        Then assert the sales order New

    Scenario: test_Customerselection
        When click sales button
        And click sales order button
        And click on create a new sales order
        Then assert the sales order New
        And click on customer textbox
        And type customer name
        And select first element form dropdown
    
    Scenario: test_TermofDelSelection
        When click sales button
        And click sales order button
        And click on create a new sales order
        Then assert the sales order New
        And click on term of delivery
        And type term of delivery
        And click first term of delivery


 