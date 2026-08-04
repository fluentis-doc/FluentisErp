---
title: Material picking list
description: Management of material picking lists for production orders in Fluentis, with creation of movements and picking documents.
keywords:
  - picking list
  - production materials
  - picking
  - Fluentis
  - production orders
sidebar_position: 4
schema: TechArticle
tags:
  - production
  - logistics
  - materials
  - picking
last_update:
  author: Fluentis Documentation Team
---

# Material picking list<!-- Lista prelievo materiali -->

:::important What is it for<!-- A cosa serve -->
The **material picking list<!-- lista prelievo materiali -->** in Fluentis is a fundamental tool for the effective management of materials intended for production orders<!-- ordini di produzione -->. It allows you to create and manage detailed lists of materials to be picked, directly linking the operation to specific production needs.  
It is widely used to generate picking documents and manage the transfer of materials, for example to the WIP warehouse<!-- magazzino WIP -->, simplifying the logistics flow and ensuring accurate traceability.
:::

This procedure allows you to create and manage *material picking lists<!-- liste di prelievo dei materiali -->* for *production orders<!-- ordini di produzione -->* that require their use.

You can search among *production orders<!-- ordini di produzione -->* in *launched* and *executive* status, select the one of interest, and then perform two distinct operations:

- **Search materials<!-- Cerca materiali -->**: allows the issue of materials that, in the [MRP Parameters<!-- Parametri MRP -->](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item, are configured with *Picking type: With list<!-- Tipo prelievo: Con lista -->*. The actual consumption takes place via the **Create movements<!-- Crea movimenti -->** button, generating the **warehouse issue<!-- scarico di magazzino -->**.  
- **Search picking materials<!-- Cerca materiali picking -->**: allows you to move materials from the warehouse<!-- magazzino --> where they are stored (to the WIP warehouse<!-- magazzino WIP -->, for example) and to create **picking documents<!-- documenti di picking -->**, i.e., movement documents not yet registered, viewable in the [Picking](/docs/logistics/picking/search-picking) window.

The **Create movements<!-- Crea movimenti -->** button generates the picking document, automatically setting:
  - for materials with *Picking type With list<!-- Tipo prelievo Con lista -->*: the transaction type<!-- causale --> and warehouse<!-- magazzino --> already present in the material line of the production order<!-- ordine di produzione --> so they can be definitively issued;
  - for materials with *Picking type Manual<!-- Tipo prelievo Manuale -->*: the transaction type<!-- causale --> and warehouse<!-- magazzino --> set in the selected *Picking type<!-- Tipo picking -->*.

Materials transferred to the WIP warehouse<!-- magazzino WIP --> will then be issued within the **production declarations<!-- dichiarazioni di produzione -->**.  
Registration will be done later through the dedicated **picking issue<!-- scarico del picking -->** procedure.

## Filter<!-- Filtro -->

In the **Filter<!-- Filtro -->** tab, you can search for the desired *Production Orders<!-- Ordini di produzione -->* by applying the available filters.

### Specific buttons<!-- Pulsanti specifici -->

- **Search materials<!-- Cerca materiali -->**: by searching for materials with this button, you can then directly create warehouse records<!-- registrazioni di magazzino -->. Among all the data shown below regarding the details of each material, it is important to highlight the Mov. flag, which, when active, indicates that for that material the picking type with list<!-- tipo di prelievo con lista --> was chosen in the item's MRP Parameters<!-- Parametri MRP -->, while if the flag is not active it means that for that material the manual picking type<!-- tipo di prelievo manuale --> was chosen. (For more details on the meaning of these picking types, refer to the article on the item's [MRP Parameters<!-- Parametri MRP -->](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)).  
- **Search picking materials<!-- Cerca materiali picking -->**: by searching for materials with this button, you can then create picking documents<!-- documenti di picking -->, which are not actual records, but material transfer documents that can be viewed in the [Picking](/docs/logistics/picking/search-picking) window in the logistics area<!-- area logistica -->. In this case, registration will be done later, after a second check.   
- **Activate movable<!-- Attiva movimentabile -->** and **Deactivate movable<!-- Disattiva movimentabile -->**: activate or deactivate, in bulk, based on the selected material lines, the movable flag *Mov.*.   
- **Create movements<!-- Crea movimenti -->**: after selecting the materials based on the type of search performed, allows you to create warehouse movements<!-- movimenti di magazzino --> (the issue<!-- scarico -->) or the picking document<!-- documento di picking -->.  
If picking is created, for materials that are:
> - *Picking type With list<!-- Tipo prelievo Con lista -->*: the transaction type<!-- causale --> and warehouse<!-- magazzino --> already present in the material line of the production order<!-- ordine di produzione --> will be set.  
> - *Picking type Manual<!-- Tipo prelievo Manuale -->*: the transaction type<!-- causale --> and warehouse<!-- magazzino --> set in the **Picking type<!-- Tipo picking -->** used will be set.  

## Restore registration<!-- Ripristino registrazione -->

In this tab, you can **restore** previously created movements.  
By selecting a row, the following are displayed:  
- in the **Generated picking records<!-- Registrazioni di prelievo generate -->** tab → the records created;
- in the **Picking generated from picking list<!-- Picking generati da prelievo -->** tab → the pickings generated.

### Specific buttons<!-- Pulsanti specifici -->

- **Delete picking list<!-- Cancella lista prelievo -->**: restores both the records and the pickings generated at the same time.  
- **Delete records<!-- Cancella registrazioni -->**: restores only the selected warehouse record<!-- registrazione di magazzino -->.   
- **Delete picking<!-- Cancella picking -->**: restores the picking document<!-- documento di picking --> selected in the **Picking generated from picking list<!-- Picking generati da prelievo -->** tab.

## Summary and further information<!-- Riepilogo e approfondimenti -->

The material picking list<!-- lista prelievo materiali --> allows you to:

- manage materials intended for production orders<!-- ordini di produzione -->;
- create issue movements<!-- movimenti di scarico --> or picking documents<!-- documenti di picking -->;
- manage transfers to intermediate warehouses<!-- magazzini intermedi --> (e.g., WIP);
- easily track and restore records and pickings.

For more information:

- [MRP Parameters<!-- Parametri MRP -->](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)
- [Picking – Logistics Area<!-- Picking – Area Logistica -->](/docs/logistics/picking/search-picking)
- [Common features and fields<!-- Funzionalità e campi comuni -->](/docs/guide/common)