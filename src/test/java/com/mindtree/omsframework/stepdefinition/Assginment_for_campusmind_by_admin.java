package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.omsframwworkUIstore.Ui_store_oms_webpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Assginment function for the oms system for campus minds
 * @author M1046847
 *
 */

public class Assginment_for_campusmind_by_admin {
	WebDriver driver;
	public static Properties prop;

	/**
	 * properties file to take for assginment execution
	 */
	public  Assginment_for_campusmind_by_admin() {
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
	 * this is test method script which call from features file
	 */
	@Given("^Admin open OMS webpage for assginment$")
	public void admin_open_OMS_webpage_for_assginment()  {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver=new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
	}

	/**
	 * admin click on assginment button
	 * @throws InterruptedException
	 */
	
	@When("^admin click on assginment button$")
	public void admin_click_on_assginment_button() throws InterruptedException  {
		Thread.sleep(2000);
	   driver.findElement(Ui_store_oms_webpage.assignment_btn).click();
	}
	/**
	 * admin click on home button
	 * @throws InterruptedException
	 */

	@Then("^Admin click on home button and add button and track$")
	public void admin_click_on_home_button_and_add_button_and_track() throws InterruptedException  {
	   Thread.sleep(2000);
	   driver.findElement(Ui_store_oms_webpage.assignment_add).click();
	   driver.quit();
	}
}
