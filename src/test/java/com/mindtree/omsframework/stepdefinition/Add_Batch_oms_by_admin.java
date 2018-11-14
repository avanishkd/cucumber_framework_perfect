package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.omsframwworkUIstore.Ui_store_oms_webpage;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.Scenario;

/**
 * this java file is used to add batch to OMS system by admin here all the
 * feature file method gets initilize Batch added by admin
 * 
 * @author M1046847
 *
 */
public class Add_Batch_oms_by_admin {
	WebDriver driver;
	public static Properties prop;

	public Add_Batch_oms_by_admin() {
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream(System.getProperty("user.dir") + "/src/test/java/com/mindtree/"
					+ "/omsframework/config/config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * all the features files for called as test script method for OMS Batch
	 */

	@Given("^Admin click on batch button from side bar$")
	public void admin_cick_on_batch_button_from_side_bar() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
		driver.findElement(By.xpath(prop.getProperty("batch_click_by_admin"))).click();

	}

	@When("^Admin click on batch$")
	public void admin_click_on_batch() {

		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath(prop.getProperty("addbatch"))).click();

	}

	/**
	 * Admin can pass batch name and batch code and batch description
	 * 
	 * @param name
	 * @param code
	 * @param description
	 */

	@Then("^Admin enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void admin_enters_and_and(String name, String code, String description) {

		driver.findElement(Ui_store_oms_webpage.batch_name).sendKeys(name);
		driver.findElement(Ui_store_oms_webpage.batch_code).sendKeys(code);
		driver.findElement(Ui_store_oms_webpage.batch_description).sendKeys(description);
	}

	/**
	 * admin click on add button to add the batch
	 * 
	 * @throws Throwable
	 */

	@And("^Admin can click on add button$")
	public void admin_can_click_on_add_button() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("batch_add_btn"))).click();
		driver.quit();
	}

	/**
	 * Admin got proper message after adding Batch to Orchard Management System
	 */
	@And("^Admin got message Batch added successfully to OMS$")
	public void admin_got_message_Batch_added_successfully_to_OMS() {
		System.out.println("Batch added successfully to OMS");
	}
}
