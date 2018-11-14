package com.mindtree.omsframework.pagesobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.mindtree.omsframework.base.TestBase_OpenBrowser_TakeData_config;

/**
 * OMS homepage webelements which is present on oms webpage
 * pageFactory for OMS webpage
 * @author M1046847
 *
 */
public class OMS_Homepage extends TestBase_OpenBrowser_TakeData_config{
	
	@FindBy(xpath = "//div//h3[contains(text(),'Orchard Management System')]")
	WebElement title_oms;
	
	@FindBy(xpath ="//a//i[@class='fa fa-briefcase']")
	WebElement batchbtn;
	
	@FindBy(xpath ="//a//i[@class='fa fa-sitemap']")
	WebElement trackbtn;
	
	@FindBy(xpath ="//a//i[@class='fa fa-folder']")
	WebElement assginmentbtn;
	
	@FindBy(xpath ="//a//i[@class='fa fa-users']")
	WebElement groupsbtn;
	
	@FindBy(xpath ="//a//i[@class='fa fa-users']")
	WebElement usersbtn;
	
	// Initializing the Page Objects:
			public OMS_Homepage(WebDriver driver) {
				PageFactory.initElements(driver, this);
			}
			
			public String verifyHomePageTitle_oms(){
				return driver.getTitle();
			}
			//verify title
			public boolean verify_titile_oms(){
				return title_oms.isDisplayed();

		    }
			//verify batch btn
			public OMS_Homepage clickOnOMS_Homepage_btn_checking_batch(){
				batchbtn.click();
				return new OMS_Homepage(driver);
			}
			
			//verify track button
			public OMS_Homepage clickOnOMS_Homepage_btn_checking_track(){
				trackbtn.click();
				return new OMS_Homepage(driver);
			}
			
			//verify assginment button
			public OMS_Homepage clickOnOMS_Homepage_btn_checking_assginment(){
				assginmentbtn.click();
				return new OMS_Homepage(driver);
			}
			
			//verify groups button
			public OMS_Homepage clickOnOMS_Homepage_btn_checking_groups(){
				groupsbtn.click();
				return new OMS_Homepage(driver);
			}
			
			//verify user button
			public OMS_Homepage clickOnOMS_Homepage_btn_checking_usersbtn(){
				usersbtn.click();
				return new OMS_Homepage(driver);
			}
			/**
			 * All the method which is going to be called from page object to stepdefinition
			 */
			public void clickOn_Batch() {
				batchbtn.click();
			}
			public void clickOn_Track() {
				trackbtn.click();
			}
			public void clickOn_Assginment() {
				assginmentbtn.click();
			}
			public void clickOn_Groups() {
				groupsbtn.click();
			}
			public void clickOn_Users() {
				usersbtn.click();
			}
}
