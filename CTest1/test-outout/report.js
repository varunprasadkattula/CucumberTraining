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
  "duration": 7533427028,
  "status": "passed"
});
formatter.match({
  "location": "Nav_Login.enter_IRCTC_URL_and_Navigate()"
});
formatter.result({
  "duration": 889029112,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027VARUNGEETHU\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53819}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1), userDataDir\u003dC:\\Users\\varun\\AppData\\Local\\Temp\\scoped_dir20464_17199}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.109, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e2e5a212139895f83bb8e619b63edfdd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat stepdefs.Nav_Login.enter_IRCTC_URL_and_Navigate(Nav_Login.java:23)\r\n\tat ✽.When Enter IRCTC URL and Navigate(C:/Users/varun/git/CucumberTraining/CTest1/src/main/java/features/Navigation_Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Nav_Login.verify_IRCTC_Home_Page_is_displayed()"
});
formatter.result({
  "status": "skipped"
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