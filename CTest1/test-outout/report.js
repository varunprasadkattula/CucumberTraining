$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/varun/git/CucumberTraining/CTest1/src/main/java/features/Navigation_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation and Login to IRCTC",
  "description": "",
  "id": "navigation-and-login-to-irctc",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#This feature file contains scenarios and steps to test the IRCTC navigation and Login."
    }
  ],
  "line": 4,
  "name": "Navigation to IRCTC",
  "description": "",
  "id": "navigation-and-login-to-irctc;navigation-to-irctc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter IRCTC URL and Navigate",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify IRCTC Home Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Nav_Login.Open_Browser()"
});
formatter.result({
  "duration": 2877350266,
  "status": "passed"
});
formatter.match({
  "location": "Nav_Login.enter_IRCTC_URL_and_Navigate()"
});
formatter.result({
  "duration": 25672371321,
  "status": "passed"
});
formatter.match({
  "location": "Nav_Login.verify_IRCTC_Home_Page_is_displayed()"
});
formatter.result({
  "duration": 7226604,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login to IRCTC",
  "description": "",
  "id": "navigation-and-login-to-irctc;login-to-irctc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on IRCTC HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify Login Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter User name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter OTP",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click Login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Login is Successful",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});