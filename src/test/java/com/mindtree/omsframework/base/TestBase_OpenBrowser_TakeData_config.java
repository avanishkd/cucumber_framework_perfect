package com.mindtree.omsframework.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;



/**
 * Base class for all the others java class present in hybrid framework This is
 * the base class for opening browser and properties file also set the browser
 * name. open browser and take all data from properties files select chrome or
 * firefox browser
 * 
 * @author M1046847 03/09/2018
 */
public class TestBase_OpenBrowser_TakeData_config {
	
	public static WebDriver driver;
	public static Properties prop;
	public static EventFiringWebDriver e_driver;
	
	public  TestBase_OpenBrowser_TakeData_config() {
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

	//initilize the browser
	public static void initialization() {
		String browserName = prop.getProperty("browser");

		if (browserName.equals("chrome")) {
			System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
			driver = new ChromeDriver();
		} else if (browserName.equals("Mozilla Firefox")) {
			System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
			driver = new FirefoxDriver();
		}

		e_driver = new EventFiringWebDriver(driver);
		// Now create object of EventListerHandler to register it with
		// EventFiringWebDriver
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
		//driver.close();

	}
	 public static void takeSnapShot(WebDriver driver,String fileWithPath) throws Exception{

	        //Convert web driver object to TakeScreenshot

	        TakesScreenshot scrShot =((TakesScreenshot)driver);

	        //Call getScreenshotAs method to create image file

	                File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);

	            //Move image file to new destination
                    
	                File DestFile=new File(fileWithPath);

	                //Copy file at destination

	                FileUtils.copyFile(SrcFile, DestFile);

	            

	    }
	 public static WebDriver getDriver(){

	        if(driver==null){


	        WebDriver driver ;
	        System.setProperty(prop.getProperty("webdriver"), prop.getProperty("filepath"));
	    	driver = new ChromeDriver();


	     }

	        return driver;

	    }
}
