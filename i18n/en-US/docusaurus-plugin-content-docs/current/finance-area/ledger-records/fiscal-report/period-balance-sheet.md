---
title: Period Balance Sheet
sidebar_position: 1
---

This report has the function to represent a basic prospect of the company balance. It divides by default the four typical sections active/passive/costs/profits. The report only works by accounting accrual date inserted in the record header, regardless of record date on the journal.

Options within the mask:

**Negative Sign Amount View**: if it is set, the application enters every detail account in the appropriate section (according to the account type). The negative sign occurs when the balance is in the opposite direction. If the flag is not active, as by default, every detail account is viewed in the section related to its balance;

**Registers Details**: the application excludes by default the whole detail of the detail accounts linked to the customers/vendors/agents. Only through the related flag the details of these register detail accounts are visible.

**Exclude Interim Account**: interim accounts are viewed at the bottom of the active/passive section. Thanks to this flag, the interim accounts are not visible in the report. Interim accounts never are the object of closure/opening account in the automatic procedure of the application;

**Comparison with the Previous Year**: thanks to this option the report Previous Year Balances active. It includes a column of the current year and a balance column of the same period but of the previous year;

**Exclude Template**: in case that the account closure records are found, to get the balance data it is necessary to exclude the movements based on the template of the closure itself. Let the report run without excluding this template will result in a report with all balances=0 (except for Interim account as said above): this can be used as a control check of the good result of the accounts closure.

In the report, it is possible to enter the movements that come from temporary registrations

Last point regards other two files that can be associated through the report management: the report Section Balance displays the balance with opposed sections, the report Group Balance on the other hand displays the structure of the chart of accounts with the related results of the various accounts grouping.

The best flexibility of re-classification (for instance according to the EEC IV directive) can be got through the Balance module and the related reclassification models.

RIBBON BAR: it represents the form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Preview | Button to start the preview of the accounting year balance. |
| Print | Button to start the concrete print of the accounting year balance. |






