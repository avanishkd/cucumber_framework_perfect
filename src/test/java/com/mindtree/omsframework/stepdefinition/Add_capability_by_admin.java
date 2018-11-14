package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.mindtree.omsframework.base.TestBase_OpenBrowser_TakeData_config;
import com.mindtree.omsframework.reusablemethod.Oms_reusable_method_for_browser;
import com.mindtree.omsframwworkUIstore.Ui_store_oms_webpage;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Add Capability to OMS System and capability can be add by admin for the
 * Campus Minds
 * we are working on capability module automation so far........
 * @author M1046847
 *
 */

public class Add_capability_by_admin {

	WebDriver driver;
	public static Properties prop;

	/**
	 * Take all the file from properties file
	 */
	public Add_capability_by_admin() {
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

	// features file for capability all methods are called here from features
	/**
	 * Leads or and Admin can open oms for adding capability
	 */
	@Given("^leads open oms homepage for adding capability$")
	public void leads_open_oms_homepage_for_adding_capability() {
		Oms_reusable_method_for_browser oms_reuse_method=new Oms_reusable_method_for_browser();
		WebDriver driver=oms_reuse_method.open_oms_browser();
		driver.quit();
	
	}

	/**
	 * all the features file steps call as test script for capabilty for campus
	 * minds in oms
	 * @throws InterruptedException 
	 */

	@When("^lead click on capability$")
	public void lead_click_on_capability() throws InterruptedException {
		Oms_reusable_method_for_browser oms_reuse_method=new Oms_reusable_method_for_browser();
		WebDriver driver=oms_reuse_method.open_oms_browser();
		driver.quit();
	}

	/**
	 * admin or lead can click on Manage
	 */
	@Then("^lead click on manage$")
	public void lead_click_on_manage() {
		Oms_reusable_method_for_browser oms_reuse_method=new Oms_reusable_method_for_browser();
		WebDriver driver=oms_reuse_method.open_oms_browser();
		driver.quit();
	}

	/**
	 * admin or lead click on add button for adding capability to the OMS
	 */
	@And("^lead click on add button$")
	public void lead_click_on_add_button() {
		Oms_reusable_method_for_browser oms_reuse_method=new Oms_reusable_method_for_browser();
		WebDriver driver=oms_reuse_method.open_oms_browser();
		driver.quit();
	}

	/**
	 * Admin can enters capability code and capability description for the Orchard
	 * Management System
	 * 
	 * @param code
	 * @param description
	 */
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String code, String description) {
		Oms_reusable_method_for_browser oms_reuse_method=new Oms_reusable_method_for_browser();
		WebDriver driver=oms_reuse_method.open_oms_browser();
	}

	/**
	 * admin click on add button and admin got proper message after adding
	 * capability
	 */
	@And("^lead can click on add button$")
	public void lead_can_click_on_add_button() {
		Oms_reusable_method_for_browser oms_reuse_method=new Oms_reusable_method_for_browser();
		WebDriver driver=oms_reuse_method.open_oms_browser();
	}
	
	@After("@tagCapability")
	public void oms_failed_test_screenshot(Scenario scenario) {
	    if (scenario.isFailed()) {
	            final byte[] screenshot = ((TakesScreenshot) driver)
	                        .getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "oms_failed_case/png"); //stick it in the report
	    }
	}
}
