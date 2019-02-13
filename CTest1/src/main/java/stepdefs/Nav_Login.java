package stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Nav_Login {
	
	public static WebDriver driver;
	
	@Given ("^Open Browser$")
	public void Open_Browser() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\varun\\Desktop\\Eclipse\\chromedriver.exe");
	driver = new ChromeDriver();
	}
	
	@When("^Enter IRCTC URL and Navigate$")
	public void enter_IRCTC_URL_and_Navigate() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.irctc.co.in");  
	}

	
	  @Then("^Verify IRCTC Home Page is displayed$") public void
	  verify_IRCTC_Home_Page_is_displayed() throws Throwable { 
		  String title = driver.getTitle();
		  Assert.assertEquals("IRCTC Next Generation eTicketing System", title);
	  }
	  
	 /* @Given("^User is on IRCTC HomePage$") public void user_is_on_IRCTC_HomePage()
	 * throws Throwable { // Write code here that turns the phrase above into
	 * concrete actions throw new PendingException(); }
	 * 
	 * @When("^Click on Login$") public void click_on_Login() throws Throwable { //
	 * Write code here that turns the phrase above into concrete actions throw new
	 * PendingException(); }
	 * 
	 * @Then("^Verify Login Page is displayed$") public void
	 * verify_Login_Page_is_displayed() throws Throwable { // Write code here that
	 * turns the phrase above into concrete actions throw new PendingException(); }
	 * 
	 * @When("^Enter User name$") public void enter_User_name() throws Throwable {
	 * // Write code here that turns the phrase above into concrete actions throw
	 * new PendingException(); }
	 * 
	 * @When("^Enter Password$") public void enter_Password() throws Throwable { //
	 * Write code here that turns the phrase above into concrete actions throw new
	 * PendingException(); }
	 * 
	 * @When("^Enter OTP$") public void enter_OTP() throws Throwable { // Write code
	 * here that turns the phrase above into concrete actions throw new
	 * PendingException(); }
	 * 
	 * @When("^Click Login$") public void click_Login() throws Throwable { // Write
	 * code here that turns the phrase above into concrete actions throw new
	 * PendingException(); }
	 * 
	 * @Then("^Verify Login is Successful$") public void
	 * verify_Login_is_Successful() throws Throwable { // Write code here that turns
	 * the phrase above into concrete actions throw new PendingException(); }
	 */

}
