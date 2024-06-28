---
title: Activity Tabs
hide_title: true
sidebar_label: Activity Tabs
sidebar_position: 1
---

:::info
Once opened the object form, located inside the filter widget (i.e. over the tabs), there are more/less standard parameters - such as *Code, Name, Description, Creation Date, Last edit date* - the ones you need to pay more attention to are *Groups*, and *Activity type*.
:::

### Linked Parameters

All the *Activity types* have *Linked Parameters* (both input and output) that can be seen from the task, specially when *Blockly* is used. These parameters are crucial for most cases as they are the only way to communicate with an *Activity* from a *Task*.

To create a parameter is necessary to specificy some default values (i.e. *Name*, *Description*) and some special values like the **IsInputParameter**, **IsMandatory**, **Type** and **Global Parameter**.

### Records Mapping

For the **Mail Template** *Activity type* there is also the possibility to map records (columns names) to headings; the mapping result will be displayed after a recordset is used inside a document (under the *Template Document* tab).

### Activity Configuration

Moving on the **Activity Configuration** tab, the important thing to remember is that it changes accordingly to the *Activity type* and the only value that is common to all the *Activity types* is the **Result Parameter**.

Let's see all the variations:

> **Generic Script** activity type has two tabs, *Parameters* and *Script*. The input and output values that have been used in the *Script* tab, must be declared in the *Parameters* tab.

> **Datasource** activity type has no tabs, it has only the configuration of the DS parameters and the selection of the datasource.  

> **Run Report** activity type has no tabs, it has the selection of the business object, the selection of type of report referred to the business object and the export format selection.

> **Sql Query** activity type share the same tab layout as the *Generic Script* activity type, except of the Script tab, which no longer contains a C# script but a SQL script. To map the activity input parameters onto the query is necessary to include them between square brackets, as seen in the picture below.

> **Stored procedure** activity type has no tabs, it has only the configuration of the input parameters for the stored procedure. 

> **Mail Template** has the *Document Generation Settings* and *Document Template* tabs. In the first tab at the top can be set: *Master Record* (i.e. the recordset data that will fill document template), *Generated Document* (i.e. the variable containing the document, that must be mapped in the *Linked Parameters* tab as an output parameters, in order to get a result when it will be used inside a *Task*), *Document Format* (i.e. .Pdf, .HTML, .Docx, .Doc), *Description* and *Send as HTML body* (the latter is a flag); in the lower part of the tab the document variables can be set (the variables will appears in the second tab, in the document variables pane on the right side).  
In the second tab there is a custom widget, that reminds (only by the ribbon) the one you could find in MS Word. The latter allows to create the document template using the built in tools and the document variables that can be found on the right side pane.