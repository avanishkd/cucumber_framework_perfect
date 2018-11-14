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
@tagtrack @all
Feature: Admin Add Track to OMS

  @tag2track @all
  Scenario Outline: Admin open Track module to add Track for OMS
    Given Admin click on Track button from side bar
    When Admin click on Track
    Then Admin enters Tarck details "<name>" and "<code>" and "<description>"
    And Admin can click on add button for Track
    And Admin got message Track added successfully to OMS

    Examples: 
      | name     | code     | description                                                      |
      | java-221 | java-788 | java is best language in any programming use collection concepts |
