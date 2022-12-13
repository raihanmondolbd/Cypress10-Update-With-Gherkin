Feature: Basic Smoke Test

    Background: Login To Fikuro Website
        Given fikuro Website Visit
        When Hover Tilli Navbar
        And Click on English Button
        And Click on Sign in Button
        And Type username
        And Type password
        And click submit

    Scenario: test_navigate_sales_order
        When click sales button
        And click sales order button
        And sort the sales order number
        And again sort the sales order number
        And click the latest sales order number
        Then assert the latest sales order

    Scenario: test_navigate_sales_invoice
        When click sales button
        And click sales invoice
        And click first sales invoice
        Then assert the latest sales invoice

    Scenario: test_navigate_workcard
        When click on production
        And click on work card
        And click on first view
        Then assert the worknumber
 


 
 
    
    

