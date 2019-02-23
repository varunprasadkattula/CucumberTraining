$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/admin/Documents/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate to GoIbibo Login page and Login as a Customer",
  "description": "",
  "id": "navigate-to-goibibo-login-page-and-login-as-a-customer",
  "keyword": "Feature"
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
  "duration": 326136025,
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: VISTA\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:115)\r\n\tat java.base/java.util.Optional.orElseGet(Optional.java:369)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:257)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:204)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:99)\r\n\tat stepdef.Nav_login.Open_Web_Browser(Nav_login.java:36)\r\n\tat ✽.Given Open Web Browser(C:/Users/admin/Documents/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Nav_login.Input_GoIbibo_Website_URL_and_Enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.verify_GoIbibo_Website_was_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.verify_Login_Screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 145882,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Username_Field_is_available()"
});
formatter.result({
  "duration": 2433435,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdef.Nav_login.verify_Username_Field_is_available(Nav_login.java:77)\r\n\tat ✽.Then Verify Username Field is available(C:/Users/admin/Documents/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Nav_login.verify_Password_Field_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.user_enters_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.user_enters_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.user_clicks_on_Signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Nav_login.verify_Signin_is_succesful()"
});
formatter.result({
  "status": "skipped"
});
});