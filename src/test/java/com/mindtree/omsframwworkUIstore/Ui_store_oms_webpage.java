package com.mindtree.omsframwworkUIstore;

import org.openqa.selenium.By;

/**
 * all the xpath for the OMS (store of UI Locator for orchard management webpage)
 * @author M1046847
 *
 */

public class Ui_store_oms_webpage {
	
	//user for oms
	/**
	 * This is UI Store for the
	 */
	public final static By  userbutton=By.xpath("//a[contains(@href, '#/users')]");
	
    //Track locator for oms
	public final static By track_button_sidebar=By.xpath("//a//i[@class='fa fa-sitemap']");
	public final static By track_add_btn=By.xpath("//div//a[contains(text(),'ADD')]");
	public final static By track_name=By.cssSelector("#trackName");
	public final static By track_code=By.cssSelector("#trackCode");
	public final static By track_description=By.cssSelector("#trackDescription");
	public final static By track_add_to_oms=By.xpath("//span[@class='mat-button-wrapper']");
	
	//capability locator for oms 
	public final static By capability_name=By.xpath("//a[contains(text(),'Capabilities')]");
	public final static By capability_manage=By.xpath("//li//a[contains(text(),'Manage')]");
	public final static By capability_add=By.xpath("//div//a[contains(text(),'ADD')]");
	public final static By capability_capability_code=By.id("capCode");
	public final static By capability_description=By.id("capDescription");
	public final static By capability_add_sumbit=By.xpath("//span[@class='mat-button-wrapper']");
	
	//Batch adding xpath for OMS
	public final static By batch_name=By.id("batchName");
	public final static By batch_code=By.id("batchCode");
	public final static By batch_description=By.id("batchDescription");
	
	//Assginment for the OMS system
	public final static By assignment_btn=By.xpath("//a//i[@class='fa fa-folder']");
	public final static By assignment_home=By.xpath("//div//a[contains(text(),'HOME')]");
	public final static By assignment_add=By.xpath("//div//a[contains(text(),'ADD')]");
}
