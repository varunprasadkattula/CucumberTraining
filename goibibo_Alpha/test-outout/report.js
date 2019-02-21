$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/varun/git/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature");
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
  "duration": 4753097189,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.Input_GoIbibo_Website_URL_and_Enter()"
});
formatter.result({
  "duration": 5061140835,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_GoIbibo_Website_was_opened()"
});
formatter.result({
  "duration": 18917788,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.click_on_Login()"
});
formatter.result({
  "duration": 1372590104,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Login_Screen_is_displayed()"
});
formatter.result({
  "duration": 679470440,
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
  "duration": 227213,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Username_Field_is_available()"
});
formatter.result({
  "duration": 65741125,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Password_Field_is_available()"
});
formatter.result({
  "duration": 60062345,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.user_enters_Username()"
});
formatter.result({
  "duration": 117958971,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.user_enters_Password()"
});
formatter.result({
  "duration": 1163979866,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.user_clicks_on_Signin()"
});
formatter.result({
  "duration": 135056485,
  "status": "passed"
});
formatter.match({
  "location": "Nav_login.verify_Signin_is_succesful()"
});
formatter.result({
  "duration": 64182506,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//i[@class\u003d\u0027fl icon-user blue ico30 padL10 padR5\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027VARUNGEETHU\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:58333}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1), userDataDir\u003dC:\\Users\\varun\\AppData\\Local\\Temp\\scoped_dir11920_17903}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.109, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a7aeeede6112e545f8e71899f57234fc\n*** Element info: {Using\u003dxpath, value\u003d//i[@class\u003d\u0027fl icon-user blue ico30 padL10 padR5\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepdef.Nav_login.verify_Signin_is_succesful(Nav_login.java:108)\r\n\tat ✽.Then Verify Signin is succesful(C:/Users/varun/git/CucumberTraining/goibibo_Alpha/src/main/java/feature/Nav_login.feature:19)\r\n",
  "status": "failed"
});
});