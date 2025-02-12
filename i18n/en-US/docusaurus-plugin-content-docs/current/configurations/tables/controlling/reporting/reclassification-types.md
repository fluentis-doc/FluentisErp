---
title: Reclassification Types 
sidebar_position: 1
---

The table of ***Reclassification Types*** is already pre-filled by the [***Fast start***](/docs/guide/fast-start) with the following types:
- *IV - Reclassification IV Directive EU (Riclassificazione IV direttiva UE)*
- *EC - Economic Reclassification (Riclassificazione economico)*
- *BEP - Break Even Point (Break even point)*

These types are used for the accounting models that the ***Fast start*** pre-loads, particularly for the *Balance IV Directive (Bilancio IV direttiva)* model.

In the event that the company has *Controlling* management active, we suggest setting up a type:
- *COGE - Management Control (Controllo di gestione)* with the *Controlling* flag active, to be used for models that value the ***Historical Records Management*** through a ***Comparison*** of controlling
- *PRO - Project/Order Reclassification (Riclassificazione di progetto/commessa)* with the *Job Order Consolidation* flag, to be used if the company has set up a *dimension* for managing projects and wants to process a *Project Consolidation*

:::tip Note 
The reclassification type with the ***Product Cost*** flag has specific characteristics within the Reclassification Patterns, but currently must be valued with custom procedures.
:::

:::tip Note 
It is possible, through *Object Navigator*, to make the *Country* property visible in the grid, which is not mandatory for Reclassification Types: if a country is set in a reclassification type, the ***Reclassification Patterns*** linked to this type will only be visible in the companies of the set geographical location.
:::