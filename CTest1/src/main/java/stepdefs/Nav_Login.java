package stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;

public class Nav_Login {
	
	public static WebDriver driver;
	
	@Given ("^Open Browser$")
	public void Open_Browser() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\varun\\Desktop\\Eclipse\\chromedriver");
	driver = new ChromeDriver();
	driver.get("https://www.irctc.co.in");
	}
	

}
