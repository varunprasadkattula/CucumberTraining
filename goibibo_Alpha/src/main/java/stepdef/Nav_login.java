package stepdef;

import java.awt.Desktop.Action;
import java.beans.DesignMode;

import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import net.sourceforge.htmlunit.corejs.javascript.ast.ContinueStatement;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import org.openqa.selenium.interactions.Actions;

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

@Then("^Verify GoIbibo Website was opened$")
public void verify_GoIbibo_Website_was_opened(){
    // Write code here that turns the phrase above into concrete actions
  String title = driver.getTitle();   
  Assert.assertEquals("Online flight booking, Hotels, Bus &amp; Holiday Packages at Goibibo", title);
}

@When("^Click on Login$")
public void click_on_Login()  {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.xpath("//a[@id='get_sign_in']")).click();
}

@Then("^Verify Login Screen is displayed$")
public void verify_Login_Screen_is_displayed(){
    // Write code here that turns the phrase above into concrete actions
    driver.switchTo().frame("authiframe");
    System.out.println("Pass till here");
    driver.findElement(By.xpath("//a[@class='fr marginT5 ico16 fmed']")).click();
    Assert.assertEquals(driver.findElement(By.id("authExistingUserSignInBtn")).getText(), "Sign In");
}

@Given("^User is on Login Screen$")
public void user_is_on_Login_Screen(){
    // Write code here that turns the phrase above into concrete actions
  System.out.println("User is on Login Screen");
}

@Then("^Verify Username Field is available$")
public void verify_Username_Field_is_available(){
    // Write code here that turns the phrase above into concrete actions
  Assert.assertEquals(driver.findElement(By.xpath("//input[@id='authUsername']")).isDisplayed(), true);    	
}

@Then("^Verify Password Field is available$")
public void verify_Password_Field_is_available(){
    // Write code here that turns the phrase above into concrete actions
	Assert.assertEquals(driver.findElement(By.xpath("//input[@id='authPassword']")).isDisplayed(), true);    
}

@When("^User enters Username$")
public void user_enters_Username() throws Throwable {
	driver.findElement(By.xpath("//input[@id='authUsername']")).sendKeys("9000967472");
}

@When("^User enters Password$")
public void user_enters_Password() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Thread.sleep(1000);
	driver.findElement(By.xpath("//input[@id='authPassword']")).sendKeys("VVarunkattula@2");
}

@When("^User clicks on Signin$")
public void user_clicks_on_Signin() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.id("authExistingUserSignInBtn")).click();
}

	
 @Then("^Verify Signin is succesful$") public void
  verify_Signin_is_succesful() throws Throwable { 
	 
	 driver.switchTo().defaultContent();
	 Actions a = new Actions(driver);
	 
	 a.moveToElement(driver.findElement(By.xpath("//i[@class='fl icon-user blue ico30 padL10 padR5']"))).build().perform();		 
 }
	 



}
