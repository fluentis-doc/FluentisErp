---
title: Search Maturity Values
sidebar_position: 2
---

This mask allows you to search for mat. values using the fields available in the header, which represents the filtering area for the data that will be proposed, and to enter into editing each single maturity with a double mouse click.

Additional useful fields for the search filter are available by opening the **Expanders** present in the header. ![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image03.png)

By default, open mat. values are proposed (since when opening the mask the **State** filter field is filled with the "Opened Maturity" option). It is possible to view all mat. values simply by removing the entry from the filter field so as not to filter a specific type.

By performing the search (**Search** command in the Ribbon Bar), all mat. values with all related information will be displayed.

**For the detail fields displayed, please refer to the [Glossary](/docs/guide/common/glossary/glossary-intro).**

**SPECIFIC HEADER FIELDS:**

**Maturity values open at**: represents the reference date at which to consider the maturity as open (for example, today it might be closed, but representing it as of yesterday it might be shown as open since it had not yet been paid). To use this field, remove the Open status from the main **State** filter.

**With bills that fall due**: similarly to the module prints, it allows the inclusion of those mat. values that would be closed but have been transformed into active effects (e.g., C.Ord) and are therefore interesting as they have not yet been definitely collected. To use this field, remove the Open status from the main **State** filter.


**Show Deposit Account**: a field that makes visible the deposit guarantees collected from customers. These particular collections are represented by mat. values that have inside them (in the mat. values management form, the **Security Deposit Account** field filled) When they are closed by an accounting entry of collection, in the Journal Book section, instead of moving as usual the customer's account, the *Security Deposit Account* present inside the maturity being collected is moved.

In particular, for each row corresponding to the maturity, there is a command (+) that allows you to view additional and initially hidden information: it concerns any payments linked to the closed or partially open maturity.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**SPECIFIC FIELDS FOR THIS FORM:**

**In payment**: indicates that the maturity has already been included in a vendor payment list, but the payment list has not yet been accounted for, and therefore the line has not yet been closed.

**Accounted**: indicates that the maturity is linked to an accounting entry.

**Not payable**: indicates that the line has been blocked by the user so that it cannot be paid. The block can be set directly at the time of creation or later from either the **[Mat. Values Tab](/docs/finance-area/ledger-records/records/create-ledger-record/maturity-values-tab)** of the accounting entry that generates the maturity or by entering edit mode on the line itself from the comment form.

**Ribbon bar**:



| Function | Extended Description |
| --- | --- |
| Search | Starts the search for mat. values according to the data entered in the filter |
| New Maturity Value | Allows you to manually enter a new maturity |
| Edit Maturity Value | Enters the edit form of the selected line 'Mat. Values Management' (as an alternative to double-clicking on the row to modify) |
| View | Enters the 'Mat. Management Management' form in read-only mode, modifications cannot be saved |
| Delete Selected Mat. Values | Deletes the selected row |
| Delete Selected Payments | Allows you to delete payments linked to the mat. values (visible via the + button to the left of the mat. values) |
| Change Mat. Values Position | Opens a maturity position search form allowing you to assign the selected status to the maturity without entering the edit form 'Mat. Values Management' |
| Update Mat. Values Status | Refreshes the status of the mat. values for correct display. |
| Split Mat. Values | Opens a pop-up form that allows you to split the selected maturity into multiple mat. values of desired amount and due date. **Clearly, the sum of the resulting mat. values must match the amount of the starting maturity value.** The amount of the initial maturity is proposed in the **Split** field, at this point you need to enter in the grid rows the **amounts** and **due dates** of the resulting mat. values (for example, from one you want to make two or three) and the program will take care of performing the operation automatically. |
| Edit Record | Allows you to directly enter into the edit of the accounting entry linked to the selected maturity. If the selected maturity is not linked to an accounting entry, the button will be disabled. |


:::tip[NOTE: Update Maturity Value Status]
From the Fluentis2021 versions and later, there are no longer triggers and stored procedures that execute calculation or recalculation procedures. One of these procedures executed at the database level was the automatic recalculation of the status of mat. values, particularly typically the **Expired** maturity instead of the generic Open maturity value. It is therefore necessary to use the button to Update Maturity Value Status to perform the recalculation of the status and the correct display of mat. values (not moved by any payment, even partial, which would update them in status) expired.

It should be noted that if you want to ignore the **Expired** status for filtering purposes, you can use the date filter in the form header to achieve the same result.

For users who have the ***Supervisor*** tool, it is possible to enable the task code FI_MaturitiesOverdueStatusFix which sets the status **Expired** on mat. values with remaining != 0 and due date < today.
:::