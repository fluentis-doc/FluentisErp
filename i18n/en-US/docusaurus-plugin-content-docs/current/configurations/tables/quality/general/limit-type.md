---
title: Limit Types 
sidebar_position: 4
---

The table can be found at the path **Tables > Quality > General > Limit Types**.

In this table, it is possible to code the *Limit Types*.   
The *Limit Type* is always associated with the *Value Type* (only for numeric *Value Types*).   
Some examples of the use of *Limit Types* can be found in the management:
> **Data Sheets** - in the *Property* tab;   
> **Control Plans** - in the *Planned Tests* tab;   
> **Items Control** - in the *Tests* tab;   
> **Certificates of Analysis** - in the *Controls and Detected Values > Detected Values* tab;   
> **M.E.S.** - in the *Quality Controls > Tests* tab.

The table contains default values from the system, and it is not possible to insert new values, delete them, or modify them; the default values are:   
| Code | Description |
|:-:|:--|
| N.L. | No limit required |   
| = | Equal |   
| x\> | Greater |   
| x\< | Less |   
| x \<\> | Different |   
| x\<= | Less than or equal |   
| x\>= | Greater than or equal |   
| \<;x;\> | Outside of |   
| \<;x;\>= | Less than or Greater/Equal |   
| \<=;x;\> | Less/equal or Greater |   
| \<=;x;\>= | Less/Equal or Greater/Equal |   
| \>;x;\< | Strictly between |   
| \>;x;\<= | Greater and Less than or equal |   
| \>=;x;\< | Greater than or equal and Less than |   
| \>=;x;\<= | Between |   

**Limit Type Search**

The form consists of a filter area and a result area. Once all desired filters are set, simply click the **Search** button to display the results in the result grid.

*Specific fields*: 

> **Limit Type**: read-only information, it is the code of the *Limit Type*.   
> **Type Description**: read-only information, it is the description of the *Limit Type*.   
> **Needs Minimum Value**: read-only information, indicates whether a minimum or lower limit is required and enables the *Minimum Limit Character* column.   
> **Needs Maximum Value**: read-only information, indicates whether a maximum or upper limit is required and enables the *Maximum Limit Character* column.   
> **Minimum Limit Character**: it is possible to indicate text to identify a range between the minimum limit and nominal value; example: *< ≤ > ≥ ≠ =*.   
> **Maximum Limit Character**: it is possible to indicate text to identify a range between nominal value and maximum limit; example: *< ≤ > ≥ ≠ =*.   
> **Notes**: free annotations.

For everything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).