package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * This is the Responsive Web Design (RWD) for the Orchard Management System
 * Admin can check Orchard Management system WebPage can be able to open in any
 * platform with proper allginemnt of webpage
 * 
 * @author M1046847
 *
 */
public class Oms_rwd_for_webpage_by_admin {
	WebDriver driver;
	public static Properties prop;

	/**
	 * Take all the Data from properties file
	 */
	public Oms_rwd_for_webpage_by_admin() {
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
	 * Admin can open the Webpage for the Orchard Management System for Checking RWD
	 */
	@Given("^Admin can open OMS webpage for checking RWD$")
	public void admin_can_open_OMS_webpage_for_checking_RWD() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));

	}

	/**
	 * Admin pass different length and breadth for checking Responsive Web Design
	 * for the Orchard System Webpage
	 * 
	 * @param length
	 * @param breadth
	 * @throws InterruptedException
	 */
	@When("^Admin pass the value of \"([^\"]*)\" and \"([^\"]*)\" for rwd for oms$")
	public void admin_pass_the_value_of_and_for_rwd_for_oms(int length, int breadth) throws InterruptedException {

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Dimension d = new Dimension(length, breadth);
		driver.manage().window().setSize(d);
		Thread.sleep(3000);
	}

	/**
	 * Admin close the Webpage for OMS
	 */
	@Then("^Admin can close the browser for oms$")
	public void admin_can_close_the_browser_for_oms() {
		driver.quit();
		System.out.println("admin can successfully done rwd for OMS");
	}

}
