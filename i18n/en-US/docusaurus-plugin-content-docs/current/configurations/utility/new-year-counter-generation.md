---
title: New Year Counter Generation
sidebar_position: 3
---

The form allows for managing the counters present in Fluentis, particularly at the start of the new year.

Upon opening the form, Fluentis displays the **Last existing managed year** (taken from accounting parameters) and the filter for *counters not valid for the next year*.

The grid presents a list of counters that are not defined (or not defined correctly) for the upcoming year, allowing the user, with a double click, to identify the reason: generally, the issue lies in the configuration of the counter with an end date that lacks a valid reason, forcing (before the creation of this automation) the creation of a new line every year, instead of setting the counter with the Annual option that automatically restarts every year. However, it could be that the counter has been blocked for a specific reason (change in number policy, etc.).

*Specific buttons*:

> **Creation**: the button shows a confirmation message regarding the automatic correction of counters for the rows selected in the grid.  
> **Rollback**: performs the restoration of the procedure.

*Example*  
If the message is responded to as follows:  
- affirmative, the end validity dates of the counters that have been (presumably) mistakenly closed in the year 2017 of the example will be removed (counters closed in previous years will not be unlocked), and they will also be set as ‘annual’ to make them valid forever.

- negative, the Fluentis counters will remain as they are.


Let's consider a few examples:

A) let's assume the last year is 2017, the Fluentis invoice counter with code ‘1’ is set with an end validity date of 2020 and thus valid for 2018, the procedure will also create the counter ex-Ideale2010 with code 1 for 2018.

B) let's assume the last year is 2017, the Fluentis invoice counter with code ‘2’ is set with an end validity date of 2017 and thus NOT valid for 2018. If the user confirms the adjustment of the Fluentis counter, then the end validity date will be removed from the counter, it will be set as annual, and then the corresponding counter ex-Ideale2010 with code ‘2’ will be recreated; if the Fluentis counter is not adjusted, this counter will not be valid for 2018, and thus the counter ex-Ideale2010 with code ‘2’ will remain blocked.

C) let's assume the last year is 2017, the Fluentis invoice counter with code ‘3’ has no end validity date and is thus valid for 2018; the procedure will also create the counter ex-Ideale2010 with code 3 for 2018 (regardless of how the user responds to the Fluentis adjustment confirmation message).

:::tip NOTE 
This utility also allows for the creation of accounting parameters for the new year. A specific message will be displayed asking for confirmation. It is recommended to accept the creation; otherwise, the accounting parameters, **necessary** to perform any ledger record, must be created for the new year from the [**appropriate form**](/docs/configurations/parameters/finance/accounting-parameters).
:::