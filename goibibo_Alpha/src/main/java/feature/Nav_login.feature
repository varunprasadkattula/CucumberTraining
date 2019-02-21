Feature: Navigate to GoIbibo Login page and Login as a Customer

Scenario: Navigate to GoIbibo

Given Open Web Browser
When Input GoIbibo Website URL and Enter
Then Verify GoIbibo Website was opened
When Click on Login
Then Verify Login Screen is displayed

Scenario: Login as a Customer

Given User is on Login Screen
Then Verify Username Field is available
And Verify Password Field is available
When User enters Username
And User enters Password
And User clicks on Signin
Then Verify Signin is succesful