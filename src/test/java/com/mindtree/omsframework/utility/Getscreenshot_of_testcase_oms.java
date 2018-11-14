package com.mindtree.omsframework.utility;

import java.io.File;
import java.io.IOException;

import org.apache.maven.shared.utils.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class Getscreenshot_of_testcase_oms {
	
	public static String getScreenshots(WebDriver driver) 
    {
        TakesScreenshot ts = (TakesScreenshot)driver;
        File source = ts.getScreenshotAs(OutputType.FILE);
        String dest = System.getProperty("user.dir") +"/Screenshots/"+System.currentTimeMillis();
        File destination = new File(dest);
        try {
			FileUtils.copyFile(source, destination);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println("capture failed "+e.getMessage());
		}        
        return dest;
    }

}
