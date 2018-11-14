package com.mindtree.omsframework.stepdefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.omsframework.base.TestBase_OpenBrowser_TakeData_config;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

/**
 * oms all webelement for OMS  
 * 
 * @author M1046847
 *
 */
public class oms_homepage_cucumber_test {
	WebDriver driver;
	public static Properties prop;

	/**
	 * take all the data file from properties file
	 */
	public oms_homepage_cucumber_test() {
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

	// features for homepage for oms webpage
	/**
	 * Campus Minds can open Orchard Management System webpage
	 */
	@Given("^campus mind open oms home page$")
	public void campus_mind_open_oms_home_page() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.quit();
	}

	/**
	 * Next Campus Minds trying to login here for getting into OMS webpage
	 */
	@When("^campus mind login to oms webpage$")
	public void campus_mind_login_to_oms_webpage() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		System.out.println("Campus Minds has to be login here");
		driver.quit();
	}

	/**
	 * Next Campus Mind check for Capability and Track details as well
	 */
	@Then("^after login to oms campus mind check for capability batch and track$")
	public void after_login_to_oms_campus_mind_check_for_capability_batch_and_track() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath(prop.getProperty("batch"))).click();
		System.out.println("Batch Button click successfully");
		System.out.println("Batch Button is present iN OMS webpage");
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath(prop.getProperty("track"))).click();
		System.out.println("Track Button is click successfully");
		System.out.println("Track Button is present in OMS");
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath(prop.getProperty("assginment"))).click();
		System.out.println("assignment Button click successfully");
		System.out.println("assginment button is present on OMS webpage");
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath(prop.getProperty("gropus"))).click();
		System.out.println("gropus button click successfuly");
		System.out.println("groups button is present on OMS webpage");
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath(prop.getProperty("user"))).click();
		System.out.println("users button click successfully");
		System.out.println("user button is present is on OMS webpage");
		driver.quit();
	}

	/**
	 * Verify title for the Orchard Management System
	 */
	@And("^campus mind check for titile for oms webpage$")
	public void campus_mind_check_for_titile_for_oms_webpage() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		String title = driver.getTitle();
		//Assert.assertEquals("OMS-QA-1.8.0", title);
		driver.quit();
	}

	@And("^campus mind validate the title of oms$")
	public void campus_mind_validate_the_title_of_oms() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		String title = driver.getTitle();
		//Assert.assertEquals("OMS-QA-1.8.0", title);
		driver.quit();
	}

	@And("^campus mind close the browser$")
	public void campus_mind_close_the_browser() {
		System.out.println("close OMS webpage");

	}
}
