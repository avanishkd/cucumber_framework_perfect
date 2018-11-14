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
@tagrwdOMS @all
Feature: Admin can check oms webpage in different size on web browser

  @tag2RwdOms @all
  Scenario Outline: Admin can check for rwd for oms webpage
    Given Admin can open OMS webpage for checking RWD
    When Admin pass the value of "<length>" and "<breadth>" for rwd for oms
    Then Admin can close the browser for oms

    Examples: 
      | length | breadth |
      |    300 |     350 |
      |    500 |     500 |
