Feature: Ratify Login Page

  Test Ratify login page
  
  Scenario: Login successfully by going to homepage
    Given User goes to Ratify home page
    When User enters details to login
    Then User ends up in logged in home page

  Scenario: Login Fails with incorrect credentials
    Given User goes to Ratify home page
    When User enters incorrect details to login
    Then User gets incorrect details error

  Scenario: Login Fails with incorrect credentials no password
    Given User goes to Ratify home page
    When User enters incorrect details to login with no password
    Then User gets insufficient details error 

  Scenario: Login Fails with incorrect credentials no email
    Given User goes to Ratify home page
    When User enters incorrect details to login with no email
    Then User gets insufficient details error

  Scenario: Login Fails with incorrect credentials no password and email
    Given User goes to Ratify home page
    When User enters incorrect details to login with no email and password
    Then User gets insufficient details error