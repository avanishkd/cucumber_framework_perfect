$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addcapability.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gajendra.kumar2@mindtree.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Leads click on capability to add capability",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    },
    {
      "line": 23,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "leads open oms homepage for adding capability",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "lead click on capability",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "lead click on manage",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "lead click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters \"\u003ccode\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "lead can click on add button",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario;",
  "rows": [
    {
      "cells": [
        "code",
        "description"
      ],
      "line": 34,
      "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario;;1"
    },
    {
      "cells": [
        "java-91",
        "java is best language in any proggraming"
      ],
      "line": 35,
      "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario;;2"
    },
    {
      "cells": [
        "DOTNET1",
        "Dotnet is also best is also best language"
      ],
      "line": 36,
      "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Title of your scenario",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "leads open oms homepage for adding capability",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "lead click on capability",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "lead click on manage",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "lead click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters \"java-91\" and \"java is best language in any proggraming\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "lead can click on add button",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_capability_by_admin.leads_open_oms_homepage_for_adding_capability()"
});
formatter.result({
  "duration": 16799029140,
  "status": "passed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_capability()"
});
formatter.result({
  "duration": 8291035217,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@class\u003d\u0027dropdown-toggle\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027G1C2ML14207\u0027, ip: \u0027172.17.124.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56755}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\M1046847\\AppData\\Local\\Temp\\scoped_dir50944_20062}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a555fef790243398db86ce01b534d51e\n*** Element info: {Using\u003dxpath, value\u003d//select[@class\u003d\u0027dropdown-toggle\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat com.mindtree.omsframework.stepdefinition.Add_capability_by_admin.lead_click_on_capability(Add_capability_by_admin.java:52)\r\n\tat ✽.Then lead click on capability(addcapability.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_manage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "java-91",
      "offset": 13
    },
    {
      "val": "java is best language in any proggraming",
      "offset": 27
    }
  ],
  "location": "Add_capability_by_admin.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_can_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Title of your scenario",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;title-of-your-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "leads open oms homepage for adding capability",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "lead click on capability",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "lead click on manage",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "lead click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters \"DOTNET1\" and \"Dotnet is also best is also best language\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "lead can click on add button",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_capability_by_admin.leads_open_oms_homepage_for_adding_capability()"
});
formatter.result({
  "duration": 17944339123,
  "status": "passed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_capability()"
});
formatter.result({
  "duration": 8135717276,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@class\u003d\u0027dropdown-toggle\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027G1C2ML14207\u0027, ip: \u0027172.17.124.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56844}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\M1046847\\AppData\\Local\\Temp\\scoped_dir34700_29875}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: eab655e9dd216dda8e1be8e8124a300b\n*** Element info: {Using\u003dxpath, value\u003d//select[@class\u003d\u0027dropdown-toggle\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat com.mindtree.omsframework.stepdefinition.Add_capability_by_admin.lead_click_on_capability(Add_capability_by_admin.java:52)\r\n\tat ✽.Then lead click on capability(addcapability.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_manage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DOTNET1",
      "offset": 13
    },
    {
      "val": "Dotnet is also best is also best language",
      "offset": 27
    }
  ],
  "location": "Add_capability_by_admin.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_can_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("batchmodult.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gajendra.kumar2@mindtree.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Admin Add Batch to OMS",
  "description": "",
  "id": "admin-add-batch-to-oms",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Admin open Batch module to add batch for OMS",
  "description": "",
  "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag2"
    },
    {
      "line": 23,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin cick on batch button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on batch",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin enters \"\u003cname\u003e\" and \"\u003ccode\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin got message Batch added successfully to OMS",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;",
  "rows": [
    {
      "cells": [
        "name",
        "code",
        "description"
      ],
      "line": 33,
      "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;1"
    },
    {
      "cells": [
        "java-461",
        "java-788",
        "java is best language in any proggraming"
      ],
      "line": 34,
      "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;2"
    },
    {
      "cells": [
        "DOTNET461",
        "dotnet-0908",
        "Dotnet is also best is also best language"
      ],
      "line": 35,
      "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Admin open Batch module to add batch for OMS",
  "description": "",
  "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag2"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin cick on batch button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on batch",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin enters \"java-461\" and \"java-788\" and \"java is best language in any proggraming\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin got message Batch added successfully to OMS",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_cick_on_batch_button_from_side_bar()"
});
formatter.result({
  "duration": 9256231881,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_click_on_batch()"
});
formatter.result({
  "duration": 9530188737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java-461",
      "offset": 14
    },
    {
      "val": "java-788",
      "offset": 29
    },
    {
      "val": "java is best language in any proggraming",
      "offset": 44
    }
  ],
  "location": "Add_Batch_oms_by_admin.admin_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 9688600327,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_can_click_on_add_button()"
});
formatter.result({
  "duration": 1143635717,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_got_message_Batch_added_successfully_to_OMS()"
});
formatter.result({
  "duration": 305773,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Admin open Batch module to add batch for OMS",
  "description": "",
  "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag2"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin cick on batch button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on batch",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin enters \"DOTNET461\" and \"dotnet-0908\" and \"Dotnet is also best is also best language\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin got message Batch added successfully to OMS",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_cick_on_batch_button_from_side_bar()"
});
formatter.result({
  "duration": 9030026442,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_click_on_batch()"
});
formatter.result({
  "duration": 9163533603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DOTNET461",
      "offset": 14
    },
    {
      "val": "dotnet-0908",
      "offset": 30
    },
    {
      "val": "Dotnet is also best is also best language",
      "offset": 48
    }
  ],
  "location": "Add_Batch_oms_by_admin.admin_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 15348053896,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_can_click_on_add_button()"
});
formatter.result({
  "duration": 993217835,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_got_message_Batch_added_successfully_to_OMS()"
});
formatter.result({
  "duration": 100927,
  "status": "passed"
});
formatter.uri("oms_button_sidebar_checking.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gajendra.kumar2@mindtree.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Admin can check OMS all the Button on side bar of oms webpage",
  "description": "",
  "id": "admin-can-check-oms-all-the-button-on-side-bar-of-oms-webpage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tagomsbuttoncheck"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Admin can able to check all the OMS webelement",
  "description": "",
  "id": "admin-can-check-oms-all-the-button-on-side-bar-of-oms-webpage;admin-can-able-to-check-all-the-oms-webelement",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag_oms_all_button"
    },
    {
      "line": 23,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin can open OMS webpage for checking button",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin can check Batch button is present or not",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can check Track button is present or not",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can check Assginment button is present or not",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin can check groups button is present or not",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Admin can check users button is present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_open_OMS_webpage_for_checking_button()"
});
formatter.result({
  "duration": 7957074658,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_Batch_button_is_present_or_not()"
});
formatter.result({
  "duration": 363865547,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_Track_button_is_present_or_not()"
});
formatter.result({
  "duration": 150431139,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_Assginment_button_is_present_or_not()"
});
formatter.result({
  "duration": 220078013,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_groups_button_is_present_or_not()"
});
formatter.result({
  "duration": 154017018,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_users_button_is_present_or_not()"
});
formatter.result({
  "duration": 1036212457,
  "status": "passed"
});
formatter.uri("omshomepage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gajendra.kumar2@mindtree.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Open OMS Homepage",
  "description": "",
  "id": "open-oms-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "open-oms-homepage;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    },
    {
      "line": 23,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "campus mind open oms home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "campus mind login to oms webpage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "after login to oms campus mind check for capability batch and track",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "campus mind check for titile for oms webpage",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "campus mind validate the title of oms",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "campus mind close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_open_oms_home_page()"
});
formatter.result({
  "duration": 8812135452,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_login_to_oms_webpage()"
});
formatter.result({
  "duration": 8847824032,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.after_login_to_oms_campus_mind_check_for_capability_batch_and_track()"
});
formatter.result({
  "duration": 11328295855,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_check_for_titile_for_oms_webpage()"
});
formatter.result({
  "duration": 8860858926,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_validate_the_title_of_oms()"
});
formatter.result({
  "duration": 12515864894,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_close_the_browser()"
});
formatter.result({
  "duration": 84248,
  "status": "passed"
});
formatter.uri("trackmodule.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gajendra.kumar2@mindtree.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Admin Add Track to OMS",
  "description": "",
  "id": "admin-add-track-to-oms",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tagtrack"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Admin open Track module to add Track for OMS",
  "description": "",
  "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag2track"
    },
    {
      "line": 23,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin cick on Track button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on Track",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin enters Tarck details \"\u003cname\u003e\" and \"\u003ccode\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can click on add button for Track",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin got message Track added successfully to OMS",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;",
  "rows": [
    {
      "cells": [
        "name",
        "code",
        "description"
      ],
      "line": 33,
      "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;1"
    },
    {
      "cells": [
        "java-461",
        "java-788",
        "java is best language in any proggraming"
      ],
      "line": 34,
      "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;2"
    },
    {
      "cells": [
        "DOTNET461",
        "dotnet-0908",
        "Dotnet is also best is also best language"
      ],
      "line": 35,
      "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Admin open Track module to add Track for OMS",
  "description": "",
  "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tagtrack"
    },
    {
      "line": 19,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@tag2track"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin cick on Track button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on Track",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin enters Tarck details \"java-461\" and \"java-788\" and \"java is best language in any proggraming\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can click on add button for Track",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin got message Track added successfully to OMS",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_cick_on_Track_button_from_side_bar()"
});
formatter.result({
  "duration": 9904122114,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_click_on_Track()"
});
formatter.result({
  "duration": 210032848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java-461",
      "offset": 28
    },
    {
      "val": "java-788",
      "offset": 43
    },
    {
      "val": "java is best language in any proggraming",
      "offset": 58
    }
  ],
  "location": "Add_Track_by_Admin.admin_enters_Tarck_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 2617411761,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_can_click_on_add_button_for_Track()"
});
formatter.result({
  "duration": 1855595789,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_got_message_Track_added_successfully_to_OMS()"
});
formatter.result({
  "duration": 115894,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Admin open Track module to add Track for OMS",
  "description": "",
  "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tagtrack"
    },
    {
      "line": 19,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@tag2track"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin cick on Track button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on Track",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin enters Tarck details \"DOTNET461\" and \"dotnet-0908\" and \"Dotnet is also best is also best language\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Admin can click on add button for Track",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Admin got message Track added successfully to OMS",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_cick_on_Track_button_from_side_bar()"
});
formatter.result({
  "duration": 9593146246,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_click_on_Track()"
});
formatter.result({
  "duration": 350673705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DOTNET461",
      "offset": 28
    },
    {
      "val": "dotnet-0908",
      "offset": 44
    },
    {
      "val": "Dotnet is also best is also best language",
      "offset": 62
    }
  ],
  "location": "Add_Track_by_Admin.admin_enters_Tarck_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 300571474,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027G1C2ML14207\u0027, ip: \u0027172.17.124.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57418}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\M1046847\\AppData\\Local\\Temp\\scoped_dir51760_13222}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b23620cfa9b50c3a7dc69f8a15712996\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat com.mindtree.omsframework.stepdefinition.Add_Track_by_Admin.admin_enters_Tarck_details_and_and(Add_Track_by_Admin.java:62)\r\n\tat ✽.Then Admin enters Tarck details \"DOTNET461\" and \"dotnet-0908\" and \"Dotnet is also best is also best language\"(trackmodule.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_can_click_on_add_button_for_Track()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_got_message_Track_added_successfully_to_OMS()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("usermodule.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gajendra.kumar2@mindtree.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Admin can check User button for OMS",
  "description": "",
  "id": "admin-can-check-user-button-for-oms",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@taguserbtn"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Admin can click on user to check button",
  "description": "",
  "id": "admin-can-check-user-button-for-oms;admin-can-click-on-user-to-check-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1userbtn"
    },
    {
      "line": 23,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Admin open OMS webpage for adding users to OMS",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin click on user button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Admin got proper message for click button for oms",
  "keyword": "When "
});
formatter.match({
  "location": "Admin_add_users_to_oms.admin_open_OMS_webpage_for_adding_users_to_OMS()"
});
formatter.result({
  "duration": 8457603453,
  "status": "passed"
});
formatter.match({
  "location": "Admin_add_users_to_oms.admin_click_on_user_button()"
});
formatter.result({
  "duration": 260841991,
  "status": "passed"
});
formatter.match({
  "location": "Admin_add_users_to_oms.admin_got_proper_message_for_click_button_for_oms()"
});
formatter.result({
  "duration": 1172288962,
  "status": "passed"
});
});