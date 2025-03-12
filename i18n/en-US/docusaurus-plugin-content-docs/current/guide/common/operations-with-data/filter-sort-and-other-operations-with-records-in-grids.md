---
title: Filter, Sort, and Other Operations with Records in Grids (Filtrare, ordinare e altre operazioni con i record nelle griglie)
sidebar_position: 4
---

### Filtering Records (Filtrare i record)

Within the grids, you can filter and/or sort records (see the example in the image below). 

The first row of the grid is for filtering (the icon on the header row field is an image of a funnel ![](/img/neutral/common/filter.png)): once the mask is opened, it is sufficient to perform a search to view the present records and activate input (if allowed) or manage the grid itself. The wildcard character for searching throughout the entire field is ‘%', and the single wildcard character is ‘_'. 

The filter in text fields is ‘case insensitive' (i.e., it does not distinguish between uppercase and lowercase). Once you start filtering records through the column headers, a panel will appear at the bottom of the mask showing how the filter will be applied: at the far right of this section, both a close/cancel button for the filter itself and a helpful editing button ![](/img/neutral/common/pencil.png) will appear, where you can guidedly add more complex filters.

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image03.png)

On the column header, there is also an active button (another icon similar to a funnel) that displays a checklist with the various occurrences of the records present in the grid, with the option to check all or just empty/non-empty or individual records.

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image04.png)


### Sorting Records (Ordinare i record)

In the grids, in addition to the first filter row, you can sort records (in ascending or descending order) by clicking on the header of the column itself: if you want to sort by cascading for other columns, you need to hold down ‘Shift' and click them with the mouse.

It is possible to copy the selected data in the grid: with CTRL+C, values are copied, and if you do CTRL+SHIFT+C, column headers are also copied.

At the bottom of the mask, there is text that indicates the selected record and the total number of records present, with buttons that allow you to move from one record to another or jump from page to page or go to the end or the beginning. The grid scroll displays the current number of records compared to the total number of records.

By right-clicking on the grid headers, the following operations are allowed:

**Sort Ascending**: sets ascending sorting for the field

**Sort Descending**: sets descending sorting for the field

**Clear Sorting**: removes the sorting

### Other Operations (Altre operazioni)

By right-clicking on the grid headers, the following operations are allowed:

**Group by this column**: the records of the grid will be grouped by the same field, and pressing the + of the group will open its details. Multiple groups nested within each other are allowed.

**Ungroup**: (present if a grouping has been defined) cancels the set grouping.

**Show group panel**: displays the grouping management section above the grid.

**Hide group panel**: (if the grouping panel is present) hides the grouping management section.

**Show Column Chooser**: allows adding columns intended for the grid but that have been hidden.

**Best Fit**: adjusts the size of the selected column to the values present in the field.

**Fit (All Columns) (Adatta (tutte le colonne))**: adjusts the size of all columns based on the values present in the field.

**Group Summary Editor...**: (only in case of grouped data) opens a form where you can set a counter for occurrences per group, setting the corresponding label and its formatting. (The totals should not be managed in this option but by setting the grid for total loading and then through the totals summary panel, as explained further below.)

**Filter Editor (Editor filtro)**: opens the manual filter writing panel on the grid.

**Show Search Panel**: opens a search field on the occurrences of the grid, filtering the records themselves.

**Fixed Style**: allows setting a column as fixed to the left or right in the grid, scrolling horizontally the others. To set multiple columns as fixed, hold down CTRL and then right-click to add the subsequent ones.

**Summary panel**: opens the grid summary panel, where you can view the total number of rows, for example.

**Total Summary panel**: allows viewing the panel for totaling the displayed fields. This option is managed only if the grid has been set to load all data (details further below).

**Filter row**: enables/disables the initial filter row.

**End Group (Fine gruppo)**: displays a final section for each group, where you can display totals and values of the columns for that group (for grids with total loading, as explained further below).

**Export**: allows exporting the grid in various formats (csv, html, image, mht, pdf, rtf, text, xls, xlsx, xps).

**Print Preview**: opens a print preview of the grid table, from which you can also export the data, attach them to an email, or print them. The settings are those of the default printer.

**Print Report**: directly executes the print of the grid table on the default printer.