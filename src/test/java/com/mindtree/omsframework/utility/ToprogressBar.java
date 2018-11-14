package com.mindtree.omsframework.utility;

import org.testng.ISuite;
import org.testng.ISuiteListener;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class ToprogressBar implements ISuiteListener,ITestListener {
	int size=0;
	int inc=0;
	int rVal=0;
	
	public void onTestStart(ITestResult result) {
		
	}

	
	public void onTestSuccess(ITestResult result) {
		rVal=rVal+inc;
		GetProgressBar.set(rVal);
		
	}
	
	public void onTestFailure(ITestResult result) {
		rVal=rVal+inc;
		GetProgressBar.set(rVal);
		
	}
	
	public void onTestSkipped(ITestResult result) {
		rVal=rVal+inc;
		GetProgressBar.set(rVal);
		
		
	}

	
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		
	}

	
	public void onStart(ITestContext context) {
		
	}

	
	public void onFinish(ITestContext context) {
		
	}

	
	public void onStart(ISuite suite) {
	
		size=suite.getAllMethods().size()+2 ;
		GetProgressBar.Init(size);
		inc=100/size;
		rVal=rVal+inc;
		GetProgressBar.set(rVal);
		
		
	}

	
	public void onFinish(ISuite suite) {
		GetProgressBar.set(100);
		GetProgressBar.end();
		
	}

}
