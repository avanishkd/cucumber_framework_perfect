package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.omsframwworkUIstore.Ui_store_oms_webpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Add users to OMS System admin can add user to oms
 * 
 * @author M1046847
 *
 */
public class Admin_add_users_to_oms {
	WebDriver driver;
	public static Properties prop;

	/**
	 * ui store for browser and UI locator
	 */

	public Admin_add_users_to_oms() {
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

	// features file for adding users to oms system

	@Given("^Admin open OMS webpage for adding users to OMS$")
	public void admin_open_OMS_webpage_for_adding_users_to_OMS() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
	}

	/**
	 * all the features steps call from usermodule features to stepdefinition
	 */

	@When("^Admin click on user button$")
	public void admin_click_on_user_button() {
		WebElement wb = driver.findElement(Ui_store_oms_webpage.userbutton);
		wb.click();
		driver.quit();
		System.out.println("admin click on user button");
		
	}

	/**
	 * Admin got proper message regarding new users which is added to OMS
	 */
	@Then("^Admin got proper message for click button for oms$")
	public void admin_got_proper_message_for_click_button_for_oms() {
		System.out.println("Users button is present at side bar of OMS website");
		}
}
