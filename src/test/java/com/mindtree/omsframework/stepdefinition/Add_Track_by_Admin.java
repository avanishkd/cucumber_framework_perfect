package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.omsframwworkUIstore.Ui_store_oms_webpage;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Add Track to OMS system All the track Admin can add for Campus Minds
 * 
 * @author M1046847
 *
 */

public class Add_Track_by_Admin {

	WebDriver driver;
	public static Properties prop;

	/**
	 * this is for taking file from properties file
	 */
	public Add_Track_by_Admin() {
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

	// this is features senario for adding track to OMS System
	/**
	 * Admin click on track button for the orchard management system
	 */
	@Given("^Admin click on Track button from side bar$")
	public void admin_cick_on_Track_button_from_side_bar() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.findElement(Ui_store_oms_webpage.track_button_sidebar).click();
		driver.quit();
	}

	/**
	 * features file for track gets call here for the
	 */

	@When("^Admin click on Track$")
	public void admin_click_on_Track() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.findElement(Ui_store_oms_webpage.track_button_sidebar).click();
		driver.findElement(Ui_store_oms_webpage.track_add_btn).click();
		driver.quit();
	}

	/**
	 * admin can pass track name and track code and track description
	 * 
	 * @param name
	 * @param code
	 * @param description
	 * @throws InterruptedException
	 */

	@Then("^Admin enters Tarck details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void admin_enters_Tarck_details_and_and(String name, String code, String description)
			throws InterruptedException {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.findElement(Ui_store_oms_webpage.track_button_sidebar).click();
		Thread.sleep(3000);
		driver.findElement(Ui_store_oms_webpage.track_add_btn).click();
		Thread.sleep(3000);
		driver.findElement(Ui_store_oms_webpage.track_name).sendKeys(name);
		Thread.sleep(3000);
		driver.findElement(Ui_store_oms_webpage.track_code).sendKeys(code);
		Thread.sleep(3000);
		driver.findElement(Ui_store_oms_webpage.track_description).sendKeys(description);
		Thread.sleep(3000);
		driver.findElement(Ui_store_oms_webpage.track_add_to_oms).click();
		driver.quit();
	}

	/**
	 * Admin click on add track to OMS for the Coming Campus Minds
	 */

	@And("^Admin can click on add button for Track$")
	public void admin_can_click_on_add_button_for_Track() {
		System.out.println("admin click on add button for track");

	}

	/**
	 * Admin got proper message After Adding track to Orchard Management System
	 */
	@And("^Admin got message Track added successfully to OMS$")
	public void admin_got_message_Track_added_successfully_to_OMS() {
		System.out.println("Track added succesfully to OMS");
	}
}
