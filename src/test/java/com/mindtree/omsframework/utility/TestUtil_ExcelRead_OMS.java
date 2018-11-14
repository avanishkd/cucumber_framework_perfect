package com.mindtree.omsframework.utility;

import com.mindtree.omsframework.base.TestBase_OpenBrowser_TakeData_config;

public class TestUtil_ExcelRead_OMS extends TestBase_OpenBrowser_TakeData_config {
	
	public static long PAGE_LOAD_TIMEOUT = 20;
	public static long IMPLICIT_WAIT = 20;
	
	//if excel read be needed the here i have to write code for that
	
	public void switchToFrame(){
		driver.switchTo().frame("mainpanel");
	}
	
}
