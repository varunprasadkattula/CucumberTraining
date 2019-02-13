Feature: Navigation and Login to IRCTC
This feature file contains scenarios and steps to test the IRCTC navigation and Login.

Scenario: Navigation to IRCTC
Given: Open Browser
When: Enter IRCTC URL and Navigate
Then: Verify IRCTC Home Page is displayed

Scenario: Login to IRCTC
Given: User is on IRCTC HomePage
When: Click on Login 
Then: Verify Login Page is displayed
When: Enter User name
And: Enter Password
And: Enter OTP
And: Click Login
Then: Verify Login is Successful


