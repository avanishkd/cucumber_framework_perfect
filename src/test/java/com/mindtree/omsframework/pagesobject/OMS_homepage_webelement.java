package com.mindtree.omsframework.pagesobject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.mindtree.omsframework.base.TestBase_OpenBrowser_TakeData_config;

/**
 * OMS Webelement for frontend of OMS webpage
 * @author M1046847
 *
 */
public class OMS_homepage_webelement extends TestBase_OpenBrowser_TakeData_config{

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
	public OMS_homepage_webelement() {
	 PageFactory.initElements(driver, this);
	}
	
	public OMS_Homepage clickOnOMS_Homepage_btn_checking_batch(){
		batchbtn.click();
		return new OMS_Homepage(driver);
	}
	
	public OMS_Homepage clickOnOMS_Homepage_btn_checking_track(){
		trackbtn.click();
		return new OMS_Homepage(driver);
	}
	
	public OMS_Homepage clickOnOMS_Homepage_btn_checking_assginment(){
		assginmentbtn.click();
		return new OMS_Homepage(driver);
	}
	
	public OMS_Homepage clickOnOMS_Homepage_btn_checking_groups(){
		groupsbtn.click();
		return new OMS_Homepage(driver);
	}
	
	public OMS_Homepage clickOnOMS_Homepage_btn_checking_usersbtn(){
		usersbtn.click();
		return new OMS_Homepage(driver);
	}
}
