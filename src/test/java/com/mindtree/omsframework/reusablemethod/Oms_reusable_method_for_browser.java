package com.mindtree.omsframework.reusablemethod;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * method which is used to open the Orchard management system webpage
 * @author M1046847
 *
 */
public  class Oms_reusable_method_for_browser {
	WebDriver driver;
	public static Properties prop;
	public  Oms_reusable_method_for_browser() {
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
	 * This method is used to open browser for the OMS
	 * @param driver
	 */
	
	public  WebDriver open_oms_browser() {
		System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
		driver=new ChromeDriver();
		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
		return driver;
	}

}
