---
title: Payroll codes
sidebar_position: 4
---

#### Specific Fields (Campi specifici) 

**Code** / **Description**: code and description to identify the payroll code

**Intervention**: flag used in some exported file tracks from payroll processing for external management outside Fluentis.

**External**: if enabled, verifies the configuration of the intervention type linked to the activity declaration, checking if the external flag is enabled in the intervention type to set it accordingly in the pay slip.

**Measurement Unit Code**: unit of measure used in the track of the file exported from payroll processing for external management outside Fluentis.

**Ordinary**: if enabled, used as the default code for regular working hours in case of lack of more specific configurations.  

**Final values**: if enabled, the value associated with this payroll code will be entered in the "Values" box of the Summary for pay slips and will be excluded from the movements.

**Travel reimbursement**: if enabled, the travel hours identified with this code will be added to the regular hours. If the sum results in more than 8 hours, a line with quantity 1 will be inserted in the movements as an identifier of 1 business trip regardless of the declared travel hours. If disabled, travel hours will be entered separately for the hours actually declared.

**Festivity**: if enabled, will be used to identify holiday days in the "Movements" box of the Summary for pay slips - configured in the Holiday calendar.

**Extraordinary**: if enabled, will be used to identify overtime hours in the "Movements" box of the Summary for pay slips - calculated based on the established times for the resource.

**Festivity overtime**: if enabled, will be used to identify overtime hours worked on Saturday/Sunday in the "Movements" box of the Summary for pay slips - calculated based on the established times for the resource.

**Vacation**: if enabled, will be used to identify vacation days in the "Movements" box of the Summary for pay slips - based on the activity category entered in the activity declaration.

**Permission**: if enabled, will be used to identify permission hours in the "Movements" box of the Summary for pay slips - based on the activity category entered in the activity declaration.

**ROL**: if enabled, will be used to identify ROL hours in the "Movements" box of the Summary for pay slips - based on the activity category entered in the activity declaration.

**Remote Working**: if enabled, will be used to identify smart working days in the "Movements" box of the Summary for pay slips - identified based on the activity declarations with the "Smartworking" flag enabled, replacing the payroll code associated with the activity category.

**Is not exported**: blocks the export in the track file for external management outside Fluentis.

**Code exported**: code used in the file track for external management outside Fluentis.