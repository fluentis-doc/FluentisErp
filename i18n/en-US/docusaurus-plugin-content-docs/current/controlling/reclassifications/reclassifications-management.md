---
title: Reclassifications 
sidebar_position: 4
---

Reclassifications are essentially the application of the data from an *Mid-Year Accounts Closures* (or a *Consolidated*) to a [*Reclassification Pattern*](/docs/controlling/reclassifications/create-reclassification-model).

In the case of inserting a new reclassification, upon opening the form it is necessary to set the unique code of *5* alphanumeric characters, the description of the reclassification, and enter the reclassification model: at this point we will have the option to recall an *Mid-Year Accounts Closures* to use or to use the button to create a new *Mid-Year Accounts Closures*. In this second case, the creation screen will open, and once the procedure is completed, ***FluentisERP*** will automatically assign the new creation to the reclassification being processed.

:::tip Note
This option can be used in simpler situations, where it is not deemed necessary to apply the procedures currently excluded from the automated management of the closing itself.
:::

If the ***Consolidated*** flag has been set, it will be possible to recall the code of the *Consolidation* to be managed in the reclassified version.

For reclassifications on accounting models, there are also fields in the header of the Reclassified section that link to sales orders, cost centers, and profit centers: once one of these is set, the management software will recalculate the entire structure of the reclassified version by referring to the data from the interim registrations linked to the set filter.

The last field of the reclassification header is called **Incremental closing**: this is essentially the initial value upon which the program will calculate the differences to value the details of the detail accounts with a *Incremental* balance type (see the detailed documentation on detail account levels and orders).

Below this section, on the left side of the form, the structure of the [*Reclassification Pattern*](/docs/controlling/reclassifications/create-reclassification-model) will be displayed, populated with the data from the set closing/consolidation. Selecting from this part a node of a type different from *Children Sum* or *Expression*, ***FluentisERP*** will show two grids on the right side: in the upper grid, the list of balances from the closing (or consolidation) consistent with the settings of that level will be displayed, and in the lower grid, the list of data that actually populated the level. Through the buttons present in the ribbon, it will be possible to make a change directly to the reclassified version without modifying the reference model. Manual intervention on the data in the lower grid is also allowed, including the possibility of inserting new manual rows.

:::tip Note
If a node of type *Expression* has been set with a fixed value of 0, then in the reclassified version on the right side a field will be available to manually set the value to be used in the current processing.
:::

In the form (as well as in the search for Reclassifications), a printout of the Reclassified version is available: alternatively, the ***Reclassification Valorization*** printout is available, which allows for comparing two reclassifications already stored in the system.