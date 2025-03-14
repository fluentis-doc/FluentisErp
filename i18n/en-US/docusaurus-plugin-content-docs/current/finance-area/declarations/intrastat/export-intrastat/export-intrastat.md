---
title: Export of Telematic Track 
sidebar_position: 1
---

Through the button **Export on file**, located within the templates in the ribbon bar and also in the search form, the telematic track necessary for sending the templates is created:

- to the customs (channel *Intraweb*), or alternatively
- to the Revenue Agency (channel *Entratel*)

It is possible to set, also from the interface, the desired type of track by accessing the **General parameters** form, and then opening the business layer navigation tree up to the Finance area.

In the detail of the intrastat export parameter, the flag **Value*** has the following meaning: 0 = flag deactivated (*False*) = Intraweb; 1 = flag activated (*True*) = Entratel.

![](/img/it-it/finance-area/declarations/intrastat/export/FI_GeneralParameters.png)

The telematic track file is automatically archived in the document management system and can be downloaded from there like all other exported tracks (button with the paperclip).
At the same time, an export to an external folder is also provided, controlled by the appropriate Bizlink connector (code *Intrastat*), and therefore it is possible to customize the save path.

:::tip Info
The difference in the track between the Intraweb version and the Entratel version refers to the header record track, where it is noted that for the Entratel version, the initial code ZENT appears.
The file name can also be different, typically scambi.cee for Intraweb.

It is also possible to manage a **custom code** for the header record track through the **Intrastat file sender identifier** field present within the [**General Accounting Parameters**](/docs/configurations/parameters/finance/accounting-parameters), section *Intrastat*.
:::