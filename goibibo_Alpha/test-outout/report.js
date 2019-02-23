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
  "duration": 399991643,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\admin\\Documents\\GitHub\\CucumberTraining\\goibibo_Alpha\\https:\\github.com\\varunprasadkattula\\CucumberTraining\\blob\\master\\goibibo_Alpha\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:534)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:329)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat stepdef.Nav_login.Open_Web_Browser(Nav_login.java:35)\r\n\tat ✽.Given Open Web Browser(C:/Users/admin/Documents/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature:5)\r\n",
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
  "duration": 189501,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Username_Field_is_available()"
});
formatter.result({
  "duration": 3787815,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdef.Nav_login.verify_Username_Field_is_available(Nav_login.java:76)\r\n\tat ✽.Then Verify Username Field is available(C:/Users/admin/Documents/GitHub/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature:14)\r\n",
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