package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.omsframework.pagesobject.OMS_Homepage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * check all side bar button for OMS
 * 
 * @author M1046847
 *
 */
public class Oms_button_sidebar_checking_by_admin {

	WebDriver driver;
	OMS_Homepage oms_homepage_webelement;
	public static Properties prop;

	/**
	 * take all the file or locator from the properties file or UI Store of Orchard
	 * Management System
	 */
	public Oms_button_sidebar_checking_by_admin() {
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
	 * Admin first open the OMS webpage
	 */

	@Given("^Admin can open OMS webpage for checking button$")
	public void admin_can_open_OMS_webpage_for_checking_button() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
	}

	/**
	 * Admin check about all the button which is available on the side bar of oms
	 * system
	 */

	@When("^Admin can check Batch button is present or not$")
	public void admin_can_check_Batch_button_is_present_or_not() {
		oms_homepage_webelement = new OMS_Homepage(driver);
		oms_homepage_webelement.clickOn_Batch();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	/**
	 * Admin check for the track button function whether it is clicking or not
	 */

	@Then("^Admin can check Track button is present or not$")
	public void admin_can_check_Track_button_is_present_or_not() {
		oms_homepage_webelement = new OMS_Homepage(driver);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		oms_homepage_webelement.clickOn_Track();

	}

	/**
	 * Admin check for the Assginment button for click or not
	 */
	@And("^Admin can check Assginment button is present or not$")
	public void admin_can_check_Assginment_button_is_present_or_not() {
		oms_homepage_webelement = new OMS_Homepage(driver);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		oms_homepage_webelement.clickOn_Assginment();

	}

	/**
	 * Admin check for the groups button for the Orchard Management System
	 */

	@And("^Admin can check groups button is present or not$")
	public void admin_can_check_groups_button_is_present_or_not() {
		oms_homepage_webelement = new OMS_Homepage(driver);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		oms_homepage_webelement.clickOn_Groups();

	}

	/**
	 * Admin checking whether users button clickable or not After Admin can quit OMS
	 * browser
	 */
	@And("^Admin can check users button is present or not$")
	public void admin_can_check_users_button_is_present_or_not() {
		oms_homepage_webelement = new OMS_Homepage(driver);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		oms_homepage_webelement.clickOn_Users();
		driver.quit();
	}
}
