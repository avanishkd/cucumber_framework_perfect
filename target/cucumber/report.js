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
      "name": "@tagCapability"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Lead or Admin can add capability for Campus Minds",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;lead-or-admin-can-add-capability-for-campus-minds",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tagCapability"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "leads open oms homepage for adding capability",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "lead click on capability",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "lead click on manage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "lead click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enters \"\u003ccode\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "lead can click on add button",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;lead-or-admin-can-add-capability-for-campus-minds;",
  "rows": [
    {
      "cells": [
        "code",
        "description"
      ],
      "line": 32,
      "id": "leads-click-on-capability-to-add-capability;lead-or-admin-can-add-capability-for-campus-minds;;1"
    },
    {
      "cells": [
        "java-91",
        "java is best programming language for Capability"
      ],
      "line": 33,
      "id": "leads-click-on-capability-to-add-capability;lead-or-admin-can-add-capability-for-campus-minds;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Lead or Admin can add capability for Campus Minds",
  "description": "",
  "id": "leads-click-on-capability-to-add-capability;lead-or-admin-can-add-capability-for-campus-minds;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tagCapability"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "leads open oms homepage for adding capability",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "lead click on capability",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "lead click on manage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "lead click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enters \"java-91\" and \"java is best programming language for Capability\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "lead can click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "Add_capability_by_admin.leads_open_oms_homepage_for_adding_capability()"
});
formatter.result({
  "duration": 12744328346,
  "status": "passed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_capability()"
});
formatter.result({
  "duration": 11568970111,
  "status": "passed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_manage()"
});
formatter.result({
  "duration": 10723490050,
  "status": "passed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_click_on_add_button()"
});
formatter.result({
  "duration": 14721323983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java-91",
      "offset": 13
    },
    {
      "val": "java is best programming language for Capability",
      "offset": 27
    }
  ],
  "location": "Add_capability_by_admin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 9596464413,
  "status": "passed"
});
formatter.match({
  "location": "Add_capability_by_admin.lead_can_click_on_add_button()"
});
formatter.result({
  "duration": 10253691616,
  "status": "passed"
});
formatter.after({
  "duration": 198859,
  "status": "passed"
});
formatter.uri("assginment.feature");
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
  "name": "Admin check for assginment function for OMS",
  "description": "",
  "id": "admin-check-for-assginment-function-for-oms",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag_assginment_oms"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Assginment function checking by admin",
  "description": "",
  "id": "admin-check-for-assginment-function-for-oms;assginment-function-checking-by-admin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1_assginment"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin open OMS webpage for assginment",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "admin click on assginment button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin click on home button and add button and track",
  "keyword": "Then "
});
formatter.match({
  "location": "Assginment_for_campusmind_by_admin.admin_open_OMS_webpage_for_assginment()"
});
formatter.result({
  "duration": 10324233997,
  "status": "passed"
});
formatter.match({
  "location": "Assginment_for_campusmind_by_admin.admin_click_on_assginment_button()"
});
formatter.result({
  "duration": 2207193653,
  "status": "passed"
});
formatter.match({
  "location": "Assginment_for_campusmind_by_admin.admin_click_on_home_button_and_add_button_and_track()"
});
formatter.result({
  "duration": 3403145139,
  "status": "passed"
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
  "line": 23,
  "name": "Admin open Batch module to add batch for OMS",
  "description": "",
  "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag2"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin click on batch button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin click on batch",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin enters \"\u003cname\u003e\" and \"\u003ccode\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Admin got message Batch added successfully to OMS",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
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
      "line": 31,
      "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;1"
    },
    {
      "cells": [
        "java-401",
        "java-748",
        "java is best language in any proggraming"
      ],
      "line": 32,
      "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;2"
    },
    {
      "cells": [
        "DOTNET741",
        "dotnet-1908",
        "Dotnet is also best is also best language"
      ],
      "line": 33,
      "id": "admin-add-batch-to-oms;admin-open-batch-module-to-add-batch-for-oms;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
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
      "line": 22,
      "name": "@tag2"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin click on batch button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin click on batch",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin enters \"java-401\" and \"java-748\" and \"java is best language in any proggraming\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Admin got message Batch added successfully to OMS",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_cick_on_batch_button_from_side_bar()"
});
formatter.result({
  "duration": 10358788011,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_click_on_batch()"
});
formatter.result({
  "duration": 439270353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java-401",
      "offset": 14
    },
    {
      "val": "java-748",
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
  "duration": 1044522629,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_can_click_on_add_button()"
});
formatter.result({
  "duration": 1046703665,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_got_message_Batch_added_successfully_to_OMS()"
});
formatter.result({
  "duration": 218532,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
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
      "line": 22,
      "name": "@tag2"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin click on batch button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin click on batch",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin enters \"DOTNET741\" and \"dotnet-1908\" and \"Dotnet is also best is also best language\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Admin got message Batch added successfully to OMS",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_cick_on_batch_button_from_side_bar()"
});
formatter.result({
  "duration": 10206548323,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_click_on_batch()"
});
formatter.result({
  "duration": 229530449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DOTNET741",
      "offset": 14
    },
    {
      "val": "dotnet-1908",
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
  "duration": 1009171895,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_can_click_on_add_button()"
});
formatter.result({
  "duration": 1269448099,
  "status": "passed"
});
formatter.match({
  "location": "Add_Batch_oms_by_admin.admin_got_message_Batch_added_successfully_to_OMS()"
});
formatter.result({
  "duration": 81682,
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
  "line": 23,
  "name": "Admin can able to check all the OMS webelement",
  "description": "",
  "id": "admin-can-check-oms-all-the-button-on-side-bar-of-oms-webpage;admin-can-able-to-check-all-the-oms-webelement",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag_oms_all_button"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin can open OMS webpage for checking button",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin can check Batch button is present or not",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin can check Track button is present or not",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can check Assginment button is present or not",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Admin can check groups button is present or not",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Admin can check users button is present or not",
  "keyword": "And "
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_open_OMS_webpage_for_checking_button()"
});
formatter.result({
  "duration": 8981312376,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_Batch_button_is_present_or_not()"
});
formatter.result({
  "duration": 237307336,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_Track_button_is_present_or_not()"
});
formatter.result({
  "duration": 115315615,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_Assginment_button_is_present_or_not()"
});
formatter.result({
  "duration": 113030233,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_groups_button_is_present_or_not()"
});
formatter.result({
  "duration": 161122917,
  "status": "passed"
});
formatter.match({
  "location": "Oms_button_sidebar_checking_by_admin.admin_can_check_users_button_is_present_or_not()"
});
formatter.result({
  "duration": 929967383,
  "status": "passed"
});
formatter.uri("oms_rwd_for_webpage.feature");
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
  "name": "Admin can check oms webpage in different size on web browser",
  "description": "",
  "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tagrwdOMS"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Admin can check for rwd for oms webpage",
  "description": "",
  "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag2RwdOms"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin can open OMS webpage for checking RWD",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin pass the value of \"\u003clength\u003e\" and \"\u003cbreadth\u003e\" for rwd for oms",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin can close the browser for oms",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage;",
  "rows": [
    {
      "cells": [
        "length",
        "breadth"
      ],
      "line": 29,
      "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage;;1"
    },
    {
      "cells": [
        "300",
        "350"
      ],
      "line": 30,
      "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage;;2"
    },
    {
      "cells": [
        "500",
        "500"
      ],
      "line": 31,
      "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Admin can check for rwd for oms webpage",
  "description": "",
  "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag2RwdOms"
    },
    {
      "line": 19,
      "name": "@tagrwdOMS"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin can open OMS webpage for checking RWD",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin pass the value of \"300\" and \"350\" for rwd for oms",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin can close the browser for oms",
  "keyword": "Then "
});
formatter.match({
  "location": "Oms_rwd_for_webpage_by_admin.admin_can_open_OMS_webpage_for_checking_RWD()"
});
formatter.result({
  "duration": 7696388334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 25
    },
    {
      "val": "350",
      "offset": 35
    }
  ],
  "location": "Oms_rwd_for_webpage_by_admin.admin_pass_the_value_of_and_for_rwd_for_oms(int,int)"
});
formatter.result({
  "duration": 4457825833,
  "status": "passed"
});
formatter.match({
  "location": "Oms_rwd_for_webpage_by_admin.admin_can_close_the_browser_for_oms()"
});
formatter.result({
  "duration": 808243372,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Admin can check for rwd for oms webpage",
  "description": "",
  "id": "admin-can-check-oms-webpage-in-different-size-on-web-browser;admin-can-check-for-rwd-for-oms-webpage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag2RwdOms"
    },
    {
      "line": 19,
      "name": "@tagrwdOMS"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin can open OMS webpage for checking RWD",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin pass the value of \"500\" and \"500\" for rwd for oms",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin can close the browser for oms",
  "keyword": "Then "
});
formatter.match({
  "location": "Oms_rwd_for_webpage_by_admin.admin_can_open_OMS_webpage_for_checking_RWD()"
});
formatter.result({
  "duration": 7882647469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 25
    },
    {
      "val": "500",
      "offset": 35
    }
  ],
  "location": "Oms_rwd_for_webpage_by_admin.admin_pass_the_value_of_and_for_rwd_for_oms(int,int)"
});
formatter.result({
  "duration": 4474278964,
  "status": "passed"
});
formatter.match({
  "location": "Oms_rwd_for_webpage_by_admin.admin_can_close_the_browser_for_oms()"
});
formatter.result({
  "duration": 830408251,
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
  "line": 23,
  "name": "Campus Minds check for OMS webpage for login and capability as well as Track list",
  "description": "",
  "id": "open-oms-homepage;campus-minds-check-for-oms-webpage-for-login-and-capability-as-well-as-track-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "campus mind open oms home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "campus mind login to oms webpage",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "after login to oms campus mind check for capability batch and track",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "campus mind check for titile for oms webpage",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "campus mind validate the title of oms",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "campus mind close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_open_oms_home_page()"
});
formatter.result({
  "duration": 8483931115,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_login_to_oms_webpage()"
});
formatter.result({
  "duration": 9558593942,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.after_login_to_oms_campus_mind_check_for_capability_batch_and_track()"
});
formatter.result({
  "duration": 10668156755,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_check_for_titile_for_oms_webpage()"
});
formatter.result({
  "duration": 9228913771,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_validate_the_title_of_oms()"
});
formatter.result({
  "duration": 8414131142,
  "status": "passed"
});
formatter.match({
  "location": "oms_homepage_cucumber_test.campus_mind_close_the_browser()"
});
formatter.result({
  "duration": 90235,
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
  "line": 23,
  "name": "Admin open Track module to add Track for OMS",
  "description": "",
  "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag2track"
    },
    {
      "line": 22,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin click on Track button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin click on Track",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin enters Tarck details \"\u003cname\u003e\" and \"\u003ccode\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can click on add button for Track",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Admin got message Track added successfully to OMS",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
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
      "line": 31,
      "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;1"
    },
    {
      "cells": [
        "java-221",
        "java-788",
        "java is best language in any programming use collection concepts"
      ],
      "line": 32,
      "id": "admin-add-track-to-oms;admin-open-track-module-to-add-track-for-oms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
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
      "line": 22,
      "name": "@tag2track"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Admin click on Track button from side bar",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Admin click on Track",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin enters Tarck details \"java-221\" and \"java-788\" and \"java is best language in any programming use collection concepts\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin can click on add button for Track",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Admin got message Track added successfully to OMS",
  "keyword": "And "
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_cick_on_Track_button_from_side_bar()"
});
formatter.result({
  "duration": 8572480723,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_click_on_Track()"
});
formatter.result({
  "duration": 17070500470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java-221",
      "offset": 28
    },
    {
      "val": "java-788",
      "offset": 43
    },
    {
      "val": "java is best language in any programming use collection concepts",
      "offset": 58
    }
  ],
  "location": "Add_Track_by_Admin.admin_enters_Tarck_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 24756577212,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_can_click_on_add_button_for_Track()"
});
formatter.result({
  "duration": 175766,
  "status": "passed"
});
formatter.match({
  "location": "Add_Track_by_Admin.admin_got_message_Track_added_successfully_to_OMS()"
});
formatter.result({
  "duration": 115466,
  "status": "passed"
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
  "keyword": "Then "
});
formatter.match({
  "location": "Admin_add_users_to_oms.admin_open_OMS_webpage_for_adding_users_to_OMS()"
});
formatter.result({
  "duration": 8912697432,
  "status": "passed"
});
formatter.match({
  "location": "Admin_add_users_to_oms.admin_click_on_user_button()"
});
formatter.result({
  "duration": 1108552268,
  "status": "passed"
});
formatter.match({
  "location": "Admin_add_users_to_oms.admin_got_proper_message_for_click_button_for_oms()"
});
formatter.result({
  "duration": 79116,
  "status": "passed"
});
});