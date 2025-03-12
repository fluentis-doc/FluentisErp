---
title: Reclassification Types (Tipi riclassificazione)
sidebar_position: 1
---

The **Reclassification Types** table is already pre-filled by the [**Fast start**](/docs/guide/fast-start) with the following types:  
- *IV - Reclassification IV EU directive (Riclassificazione IV direttiva UE)*
- *EC - Economic Reclassification (Riclassificazione economico)*
- *BEP - Break-even point (Break even point)*

These types are used for the accounting models that the **Fast start** pre-loads, particularly for the *Balance IV directive (Bilancio IV direttiva)* model.

In case the company has *Controlling* management activated, we suggest setting a type  
- *COGE - Management Control (Controllo di gestione)* with the *Controlling* flag active, to be used for models that value the **Historical records management** through a **Comparison (Comparazione)** of controlling  
- *PRO - Project/Job Reclassification (Riclassificazione di progetto/commessa)* with the *Job order consolidation* flag, to be used if the company has set up a *Dimension* for managing projects and wants to process a *Project consolidation*

:::tip Note (Nota)
The reclassification type with the **Product Cost** flag requires specific characteristics within the Reclassification Models (Modelli di riclassificazione), but currently it must be valued with custom procedures.
:::

:::tip Note (Nota)
It is possible, via *Object navigator*, to make the *Country* property visible in the grid, which is not mandatory for Reclassification Types: if a country is set in a reclassification type, the **Reclassification patterns** linked to this type will only be visible in companies of the set geographical location.
:::