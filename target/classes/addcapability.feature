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
@tagCapability @all
Feature: Leads click on capability to add capability

  @tagCapability @all
  Scenario Outline: Lead or Admin can add capability for Campus Minds
    Given leads open oms homepage for adding capability
    When lead click on capability
    Then lead click on manage
    And lead click on add button
    When user enters "<code>" and "<description>"
    And lead can click on add button

    Examples: 
      | code    | description                                      |
      | java-91 | java is best programming language for Capability |
