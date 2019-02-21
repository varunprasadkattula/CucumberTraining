package stepdef;

import java.beans.DesignMode;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;

public class Nav_login {
	
	public static WebDriver driver;

@Given ("^Open Web Browser$")
public static void Open_Web_Browser() {
	System.setProperty("webdriver.chrome.driver","C:\\Users\\varun\\Desktop\\Eclipse\\chromedriver.exe");
	DesiredCapabilities cap = new DesiredCapabilities();
	ChromeOptions opt = new ChromeOptions();
	opt.addArguments("incognito");
	cap.setCapability(ChromeOptions.CAPABILITY, opt);
	driver = new ChromeDriver();
}

@When ("^Input GoIbibo Website URL and Enter$")
public static void Input_GoIbibo_Website_URL_and_Enter() {
	
	driver.get("https://www.goibibo.com");
	
}

}
