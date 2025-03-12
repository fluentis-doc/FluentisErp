---
title: Fluentis Numbering (Numerazioni Fluentis)
sidebar_position: 13
last_update:
  date: 03/30/2023
---

When entering a new document, one of the first required pieces of information is the document number in question. This data is automatically proposed thanks to the numbering tables.

In Fluentis, the management of numbering is divided by document type, as we can see from the menu entries present among the tables in each module.

The logic behind all these numberings is the same, so we will examine one, in particular, the Compensation Numbering, which can serve as a theoretical basis for defining the numberings of other document types.

In the **Numeration Compensations** form, there is a grid that shows the list of numberings available for compensations. This means that it is possible to manage multiple numberings for the same document type. By pressing the **New** button, we access the **Numeration** form.

![](/img/it-it/configurations/tables/fluentis-numerations/image01.png)

### Upper Section

**Code**: this is the code of the numbering;

**Description**: the description of the numbering;

**Number formula**: in this field, you can set a value of an alphanumeric string, which will be stored in the predefined alphanumeric property ‘FormattedNumber’ of the object (while the numeric field is stored in the ‘Number’ property). The definition of the *Formula* for formatting the document number can be defined at the numbering type level, at the validity period level of the numbering type, or at the validity range definition level. The priority of application is bottom-up; it checks if defined in the validity ranges, if null it checks if defined in the validity periods, if null it checks if defined in the numbering type.

In the image above (taken from the compensation numberings), “Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code” has been inserted, which will create a string of the type “2015-00001-TestCode”.

Another example, inserting a value from the input user in the number: “Number.ToString("D5") + "-" + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”

In this case, it is also necessary to intervene at the Arm level to enable, in the setter of the formatted number, that this sees the user property: inside Patterns, this setter is edited

![](/img/it-it/configurations/tables/fluentis-numerations/image02.png)

And the flag **Used (Used)** is checked:

![](/img/it-it/configurations/tables/fluentis-numerations/image03.png)

You save it, restart the Fluentis pool in IIS, and it will be operational.

*Further example*: setting the invoice number (or DDT) with the crossed out (e.g., 1/A, 2/A.... 1/B, 2/B):

number.ToString()+"/B"

to be placed in the numbering (in the header)

Then in the report, the standard field (e.g., Number) must be replaced with a calculated field (e.g., CalcNumber) where inside there is this expression:

Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])

*CAUTION*: it only works in the report; in forms, the normal number will continue to display without the crossed out.

**Disabled**: to disable the counter.

### Management Policies (first grid)

In this section, the management policies of the numbering are entered.

**Order**: code of the row record;

**Valid from date**: mandatory field that indicates the start date of the validity range of the numbering;

**Valid on date**: end validity date of the range. The field can be empty (see next field);

**Period**: the periodicity of the range. The options are *None* (i.e., the range is valid only within the defined range; if there is no end date, it will be a perpetual counter), *Yearly* (the numbering will automatically reset to the initial number year after year, until the end validity date), *Monthly* (the numbering will automatically reset to the initial number from month to month, until the end validity date), *Daily* (the numbering will reset to the initial number every day, until the end validity date);

**Shift months**: months to add to the start validity date to determine the month when the counter resets;

**Shift days**: days to add to the start validity date to determine the day when the counter resets;

**Progressive Date Number**: if active, this ensures that the numbering is progressive by date, blocking the ability to enter a document with a number higher than the last entered but with a date prior to the latter;

**Recovery numbers**: allows automatic recovery of numbering gaps. If the **Progressive Date Number** flag is active, the number recovery can only occur if consistent with the logic explained earlier for this field;

**Disabled**: to disable the numbering policy;


### Numeric Ranges (second grid)

This grid is linked to the policy selected in the grid above.

**Order**: code of the numeric range;

**Start number**: mandatory and indicates the starting number of the range;

**Search start number**: can be entered if you want to limit the search of the number starting from a certain range;

**End Number**: maximum number of the range; it can be empty;

**External Numbering**: must be checked if the numbering is not assigned by Fluentis but is assigned by external systems;

**Number formula**: in this field, it is possible to associate a formula to use for the selected date range in the first grid;

**Disabled**: to disable the use of the subject range.