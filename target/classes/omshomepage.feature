#Author: gajendra.kumar2@mindtree.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag @all
Feature: Open OMS Homepage 
  
  @tag1 @all
  Scenario: Campus Minds check for OMS webpage for login and capability as well as Track list
    Given campus mind open oms home page
    When campus mind login to oms webpage
    Then after login to oms campus mind check for capability batch and track
    And campus mind check for titile for oms webpage
    And campus mind validate the title of oms
    And campus mind close the browser

  
