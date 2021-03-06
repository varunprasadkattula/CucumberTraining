package stepdef;

import java.awt.Desktop.Action;
import java.beans.DesignMode;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.Rectangle;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.gson.annotations.Until;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import net.sourceforge.htmlunit.corejs.javascript.ast.ContinueStatement;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.interactions.Actions;

public class Nav_login {
	
	public static WebDriver driver;
	public static WebDriverWait wait;
	
@Given ("^Open Web Browser$")
public static void Open_Web_Browser() {
	System.setProperty("webdriver.chrome.driver","C://webdriver//chromedriver.exe");	
	//driver = webdriver.Chrome();
	DesiredCapabilities cap = new DesiredCapabilities();
	ChromeOptions opt = new ChromeOptions();
	opt.addArguments("incognito");
	cap.setCapability(ChromeOptions.CAPABILITY, opt);
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
	

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
    driver.findElement(By.xpath("//a[@class='fr marginT5 ico16 fmed']")).click();
    Assert.assertEquals(driver.findElement(By.id("authExistingUserSignInBtn")).getText(), "Sign In");
}

@Given("^User is on Login Screen$")
public void user_is_on_Login_Screen(){
    // Write code here that turns the phrase above into concrete actions
	System.out.println("Completed Given2");
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
		/*
		 * try { wait = new WebDriverWait(driver, 10);
		 * wait.until(ExpectedConditions.elementToBeClickable(By.xpath(
		 * "(//div[@class='wrapper']//a)[1]")));
		 * driver.findElement(By.xpath("(//div[@class='wrapper']//a)[1]")).click();
		 * }catch (Exception e) { // TODO: handle exception
		 * System.out.println("BANNER N/A");}
		 */ waitexe("hold",200);
	 WebElement ele = driver.findElement(By.xpath("(//div[@id='hd_user_widdget']//i)[1]"));
	 //wait.until(ExpectedConditions.visibilityOfElementLocated((By) ele)).click();
	 Actions a = new Actions(driver);
	 a.doubleClick(ele).perform();
	 System.out.println("Hovered");
	 
		/*
		 * String x = driver.findElement(By.xpath(
		 * "(//div[@id='hd_user_widdget']//following::span)[5]")).getText();
		 * 
		 * System.out.println(x);
		 */
 }

public static void waitexe(String x, int y) throws InterruptedException {
	String caseselect =x;
	switch(caseselect) {
	case "hold" : Thread.sleep(y);
	break;
	
		}
	}

@Before
public void before() {

	System.out.println("Completed Before");
	
}

@AfterClass
public void AC() {
	driver.close();
}

}
