---
title: Purchase and Sales Documents 
sidebar_position: 20
---

Within the various documents of the active and passive cycle, we essentially have two elements of interest for valuation in *Controlling*: the links to *Projects* and the detailed valuation information in the *Analytic* tab for each item moved.

Regarding the *Projects*, in the header of the documents, we will have the opportunity to associate a reference project, which will be used to value all the items inserted within it with the same reference: in the case of modifying the header reference with items already present, ***FluentisERP*** will ask for confirmation to replace them in all the details. Manual modification of the project reference is allowed at the individual item line, with a single connection field available.

As for the detailed *Analytic* tab, located below the item section, it allows us to freely attribute the line value to N corporate centers: ***FluentisERP*** will automatically assign the data to the centers according to the priority logic and available configurations, but users are always free to make manual modifications. If the company has *Controlling* activated, this analytic tab will present the same characteristics of multidimensional and project management as the analytic tab of ledger records: since the document and the item line, as mentioned in the previous paragraph, are already potentially associated with a *Project*, the analytic section will automatically populate the potential *Projects* dimension of the corporate centers.

:::tip Note 
Since the analytic tab is the data source for valuing the *Projects* dimension and since the tab is freely modifiable, even if the item line requires linking to a single *Project*, the user can intervene at the analytic level to break down the assignment across multiple *Projects*, without needing to multiply the item lines of the document.
:::