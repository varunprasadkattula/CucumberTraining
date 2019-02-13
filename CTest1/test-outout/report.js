$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/varun/git/CucumberTraining/CTest1/src/main/java/features/Navigation_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation and Login to IRCTC",
  "description": "This feature file contains scenarios and steps to test the IRCTC navigation and Login.",
  "id": "navigation-and-login-to-irctc",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Navigation to IRCTC",
  "description": "Given: Open Browser\r\nWhen: Enter IRCTC URL and Navigate\r\nThen: Verify IRCTC Home Page is displayed",
  "id": "navigation-and-login-to-irctc;navigation-to-irctc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 9,
  "name": "Login to IRCTC",
  "description": "Given: User is on IRCTC HomePage\r\nWhen: Click on Login \r\nThen: Verify Login Page is displayed\r\nWhen: Enter User name\r\nAnd: Enter Password\r\nAnd: Enter OTP\r\nAnd: Click Login\r\nThen: Verify Login is Successful",
  "id": "navigation-and-login-to-irctc;login-to-irctc",
  "type": "scenario",
  "keyword": "Scenario"
});
});