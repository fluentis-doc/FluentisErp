---
title: Data Search
sidebar_position: 2
---

The forms allow you to find previously entered records to *view them*, *edit them*, *delete them*, etc., if the user has the **necessary rights** for these operations.

Some forms of this type contain the insert button ![](/img/neutral/common/new.png) which, when pressed, opens the insertion form for new records.

In search forms, it is possible to view: a single record (filter by document number), multiple records (filter by date), records entered in a year (filter by year), records entered for a certain registry (filter by account/subaccount), etc.

A form is divided into three sections:

### 1. Advanced Search Bar

This multifunctional bar allows searching by keyword within various fields present in the document subject of the form.

The search criteria, if more than one keyword is entered, can be:

- OR if the words are separated by TWO spaces (it will search in the relevant fields for any of the two or more entered words)
- AND if the words are separated by ONE space (it will search both words together as a search key in the relevant fields)

:::note Note

To know which fields of the document are being searched, you can access the *Object navigator* (on the right) and right-click to press *Details*. 

In the dialog that opens, select the object again and right-click to select *Edit standard object*. Then select the *Search Models* tab in the grid at the bottom left.

:::

### 2. Filter Area

Filters are typically in 'AND' condition, meaning multiple filters can be entered simultaneously.

Click the arrows ![](/img/neutral/common/arrow.png) to open the [expanders](/docs/guide/common/glossary/glossary-intro#expander) and filter based on the data contained within them.

After entering the desired filters, press the **Search** button to obtain the list of data.

:::note Note
The filter area can be displayed as already expanded upon opening the dialog if it is "pinned" by pressing the button with the pin icon (*Pin*).
:::

![](/img/neutral/common/pin.png)

### 3. Result Grid

Represents the list of data that matches the filters entered in the filter area.

In the result grid, you can select one or more rows.

*Particularity of the grid*

The first row of the grid is a filter (the icon on the row header field looks like a funnel ![](/img/neutral/common/filter.png)): once the dialog is opened, simply execute a search to view the records present and activate insertion (if provided) or manage the grid itself.

The filter in text fields does not distinguish between uppercase and lowercase. Once you begin filtering records through the column headers, a panel will appear at the bottom of the dialog showing how the filter will be applied: at the far right of this section, both a close/cancel button for the filter itself, and a useful editing button ![](/img/neutral/common/pencil.png) for the filter will appear, where you can guidedly add more complex filters.

*Further details*: [Filter and sort records in grids](/docs/guide/common/operations-with-data/filter-sort-and-other-operations-with-records-in-grids).