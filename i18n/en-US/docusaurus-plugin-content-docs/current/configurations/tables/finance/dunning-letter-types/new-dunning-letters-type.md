---
title: New Reminder Type 
sidebar_position: 3
---

The fields of this form are:

**Code**: identification code of the reminder type.

**Description**: description of the reminder type.

**Interest type**: optional, it is the link to the type of interest rate to apply to the late payment, to obtain a calculation as of the date of issuance of the reminder.

**Reminder for group of items**: the flag for managing a group of items, in particular, will manage a reminder letter for a group of items simultaneously (standard management), while without the flag each accounting item would have its reminder separate from the others.

Once the reminder type is saved, it is possible to create its various levels using the ‘new’ button.

**Code**: identification code of the reminder.

**Description**: description of the reminder type.

**Priority**: priority of creation from 1 to N levels.

**Credit type description**: the link to a type of customer credit control is not managed.

**Late days**: indication of the days of delay that must elapse before reminding about the item.

**Days**: the number of days of expiration of the reminder and whether these are to be counted from the creation date or from the expiration date of the previous reminder.

**From the date of previous transaction**: reference date for levels following the first.

**From creation date**: reference date usually used for the first level.

:::danger ATTENTION
The values of the fields "**Late days**" and "**Days**", particularly for reminders following the first, are summed and therefore in the case of the second, third reminder, etc., it is generally not necessary to add a value in the *Late days* parameter; instead, it is possible to refer to the additional time elapsed since the date of the first reminder via the *Days* parameter.
:::

For each reminder number, once saved, you can proceed to enter the various texts in the language: the first to be uploaded is the one that will be used by default when the customer registry does not have an assigned language.

The texts are divided into 4 sections: the subject of the letter, the header, the conclusion, and the references section (active only for reminders on groups of items). In the references section, in particular, you can insert text using the codes provided at the bottom of the mask: e.g., “Ref. (3) no. (4) of (5), (9) of (8) (10) due on (6)”.