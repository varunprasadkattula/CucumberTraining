$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate to GoIbibo Login page and Login as a Customer",
  "description": "",
  "id": "navigate-to-goibibo-login-page-and-login-as-a-customer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 298667,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate to GoIbibo",
  "description": "",
  "id": "navigate-to-goibibo-login-page-and-login-as-a-customer;navigate-to-goibibo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Web Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Input GoIbibo Website URL and Enter",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify GoIbibo Website was opened",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify Login Screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Nav_login.Open_Web_Browser()"
});
formatter.result({
  "duration": 4298516125,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.Input_GoIbibo_Website_URL_and_Enter()"
});
formatter.result({
  "duration": 32496513155,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_GoIbibo_Website_was_opened()"
});
formatter.result({
  "duration": 17812052,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.click_on_Login()"
});
formatter.result({
  "duration": 8871783035,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Login_Screen_is_displayed()"
});
formatter.result({
  "duration": 10856425088,
  "status": "passed"
});
formatter.before({
  "duration": 87390,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login as a Customer",
  "description": "",
  "id": "navigate-to-goibibo-login-page-and-login-as-a-customer;login-as-a-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Verify Username Field is available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify Password Field is available",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters Username",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Signin",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify Signin is succesful",
  "keyword": "Then "
});
formatter.match({
  "location": "Nav_login.user_is_on_Login_Screen()"
});
formatter.result({
  "duration": 63743,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Username_Field_is_available()"
});
formatter.result({
  "duration": 29657454,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Password_Field_is_available()"
});
formatter.result({
  "duration": 31367719,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.user_enters_Username()"
});
formatter.result({
  "duration": 83511025,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.user_enters_Password()"
});
formatter.result({
  "duration": 1128846684,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.user_clicks_on_Signin()"
});
formatter.result({
  "duration": 81478447,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Signin_is_succesful()"
});
formatter.result({
  "duration": 284239238,
  "status": "passed"
});
});lang.NullPointerException\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:787)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.fromElement(PointerInput.java:221)\r\n\tat org.openqa.selenium.interactions.Actions.moveInTicks(Actions.java:418)\r\n\tat org.openqa.selenium.interactions.Actions.doubleClick(Actions.java:363)\r\n\tat stepdef.Nav_login.verify_Signin_is_succesful(Nav_login.java:143)\r\n\tat ✽.Then Verify Signin is succesful(C:/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature:19)\r\n",
  "status": "failed"
});
});