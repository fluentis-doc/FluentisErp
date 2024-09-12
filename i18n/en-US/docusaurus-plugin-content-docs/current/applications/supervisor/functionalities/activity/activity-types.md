---
title: Activity Types
sidebar_label: Activity Types
sidebar_position: 2
---

The *types of Activity* currently available are:

**Generate Script**
> Lets you create a generic script in C#, thanks to the script editor widget (previously mentioned in the *scripting* article).  

**Data Source**
> Lets you select a Data Source - under the *Activity Configuration* tab - from an existing collection of Data Sources previously created by the user (from the *Application Resource Manager* application).

:::success video tutorial
At this link you can find the **[video](https://youtu.be/egDCFGZOu14)** explaining the aforementioned activity type.
:::

**Run Report**
> Allows to create a report based on parameters selected in the <i>Activity Configuration</i> tab, such as: business object, type of print report, export format and various attached report parameters.

**SQL Query**
> Allows to execute queries created under the **Activity Configuration > Script** tab, with a set of predefined parameters - made available in case you need to query against an external database - and optionally custom parameters.

:::success video tutorial
At this link you can find the **[video](https://youtu.be/bzyelPIs9tk)** explaining the aforementioned activity type.
:::

**Stored Procedure**
> Executes a stored procedure previously created in the Fluentis database, with the values of defined in the *Linked Parameters* tab. It is important to verify the parameters used in the stored procedure, with the parameters defined in the *Linked Parameters* tab.

**Mail Template**
> Returns a document - of different formats (i.e. Pdf, HTML, Docx, Doc) that can be selected in the *Document Generation Setting* tab - formatted in the *Template Document* tab, with data taken from the input parameters of the *Linked Parameters* tab.