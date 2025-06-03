---
title: Dunning Letters Automatic Issue
sidebar_position: 2
---

This procedure, an alternative to the similar *Dunning Letters Issue*, acts massively by generating dunned values for all overdue items according to the parameters (days of delay, etc.) established by the type of dunned value that is selected. Therefore, there is no detailed control and selection of the mat. values, as is the case with the *Dunning Letters Issue* procedure.


In this interface, it is possible to set up a list of customers not to be dunned, a list of mat. values excluded from dunned values, and the default type of dunned value to create.

Once these settings are saved, the automatic creation button will be activated: with this, the application will proceed to create dunned values for all mat. values that meet the established selection criteria.

These criteria are set in the Parameters section through the use of flags. It is also possible to filter customers by ***Finance Category*** (a field present in the registers to create groupings).

At the end of the creation, the dunned maturity values are visible in the relevant form, while the dunning letters can be printed and sent using the specific print option (Finance > Mat. Values > Prints > DUnning Letters)

:::danger[Attention]
Unlike the manual reminder generation procedure, **in this procedure it is NOT possible to manage** reminders with a **Negative Days of Delay**. Typically, negative days are set to create a notice before the due date. In this case, **it is necessary to use** the manual procedure [***Dunning Letters Issue***](/docs/finance-area/maturity-values/procedures/generation-of-dunning-letters/generation-of-dunning-letters-intro).
:::


| Function | Extended Description |
| --- | --- |
| Save | Button to save the Dunning Letters Issue. |
| Dunning Letters Issue | Button to perform the Dunning Letters Issue for mat. values that meet the established selection criteria. |
| Search customer to be Ignored | Button to search for customers intended to be ignored from automatic Dunning Letters Issue. |
| Delete customers | Button to delete customers from the excluded customer list for dunned values. |
| Search maturity values to be ignored | Button to search for mat. values intended to be ignored. |
| Delete maturity values | Button to delete previously selected mat. values to exclude. |