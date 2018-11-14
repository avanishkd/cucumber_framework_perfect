package com.mindtree.omsframework.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
/**
 * Test runner used to run cucumber script using features files
 * also called this class in pom for sequential execution of cucumber script
 * @author M1046847
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/resource" },
		monochrome = true
		,plugin= {
   				"pretty",
   				"html:target/cucumber",
   				"json:target/cucumber/cucumber.json",
			},
				strict = false,
		 tags= {"@all"}
		,glue={"com.mindtree.omsframework.stepdefinition"})
public class TestRunner_oms {
 
	
}
