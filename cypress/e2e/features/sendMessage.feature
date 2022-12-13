Feature: Demo Blaze Website

    Background: Open The Application
        Given open demoblaze website
        

    Scenario: Send Message
        When click on contacts
        And type email address
        And type contact name
        And type message
        And click on send message
 