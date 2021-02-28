Feature: Ratify Sign up page

  Test Ratify Sign up page
  
  Scenario: Sign up successfully by going to homepage
    Given User goes to Ratify home page
    And User clicks on Sign up button
    When User enters details to Sign up
    Then User ends up in logged in home page

  Scenario: Sign up to Ratify with no name
    Given User goes to Ratify home page
    And User clicks on Sign up button
    When User enters details to Sign up without name
    Then User gets please provide your name error 

  Scenario: Sign up to Ratify with no email
    Given User goes to Ratify home page
    And User clicks on Sign up button
    When User enters details to Sign up without email
    Then User gets please provide your name error 


  Scenario: Sign up to Ratify with no password
    Given User goes to Ratify home page
    And User clicks on Sign up button
    When User enters details to Sign up without password
    Then User gets please provide your name error 


  Scenario: Sign up to Ratify with no password confirm
    Given User goes to Ratify home page
    And User clicks on Sign up button
    When User enters details to Sign up without password confirm
    Then User gets password mismatch error 
