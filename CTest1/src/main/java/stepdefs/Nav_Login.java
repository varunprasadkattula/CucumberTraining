package stepdefs;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;

public class Nav_Login {
	
	public static WebDriver driver;
	
	@Given ("^Open Browser$")
	public void Open_Browser() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\varun\\Desktop\\Eclipse\\chromedriver");
	
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}