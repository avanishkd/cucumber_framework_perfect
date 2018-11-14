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
@tagomsbuttoncheck @all 
Feature: Admin can check OMS all the Button on side bar of oms webpage
  
  @tag_oms_all_button @all
  Scenario: Admin can able to check all the OMS webelement
    Given Admin can open OMS webpage for checking button
    When Admin can check Batch button is present or not
    Then Admin can check Track button is present or not
    And Admin can check Assginment button is present or not
    And Admin can check groups button is present or not
    And Admin can check users button is present or not
    

  