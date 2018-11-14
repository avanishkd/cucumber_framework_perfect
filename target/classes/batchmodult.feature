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
Feature: Admin Add Batch to OMS

  @tag2 @all
  Scenario Outline: Admin open Batch module to add batch for OMS
    Given Admin click on batch button from side bar
    When Admin click on batch
    Then Admin enters "<name>" and "<code>" and "<description>"
    And Admin can click on add button
    And Admin got message Batch added successfully to OMS

    Examples: 
      | name      | code        | description                               |
      | java-401  | java-748    | java is best language in any proggraming  |
      | DOTNET741 | dotnet-1908 | Dotnet is also best is also best language |
