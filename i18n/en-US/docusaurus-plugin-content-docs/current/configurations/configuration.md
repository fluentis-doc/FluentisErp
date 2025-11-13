---
title: ERP Configuration 
description: Complete guide to configuring Fluentis ERP 
keywords: ["ERP", "ERP parameters", "ERP tables", "Fast Start"]
tags: [ERP, Configuration, Fluentis]
schema: TechArticle
sidebar_position: 1
---

# Configuration of Fluentis ERP 

The **configuration** area represents the starting point for the correct use of Fluentis ERP.  
It mainly consists of two fundamental elements: **Tables** and **Parameters**.  

Both are organized by **functional area**, in addition to a set of **general** elements, necessary regardless of the operational area concerned.

:::danger[Attention]
An incomplete or incorrect configuration of this basic data can prevent the correct use of the ERP in the specific area.
:::

## Tables 

The **tables** contain the basic data necessary for the creation of documents and operational information.  

For example, the **Invoice Types** table defines the different types of invoice available.  
To create a new invoice, it is necessary to select the appropriate type via the designated *combo box*.

> The tables constitute the foundation of the system: their correct completion ensures consistency and data integrity across all management areas.

## Parameters 

The **parameters** define options, default values, and behavior settings for processing procedures or automatic data generation.  

Their absence or incorrect configuration can compromise the functioning of some automatic functions.  
In particular, failing to save a default parameter can block the execution of the associated procedure.

:::important[Fast Start]
After the installation of **Fluentis ERP**, it is possible to initialize a [**Fast Start**](/docs/guide/fast-start) environment, ready for use.  

This environment automatically preconfigures many **tables** and **parameters**, allowing for a quick and safe start of the system.

A key element for the *Fast Start* is the [**Chart of Accounts**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts), part of the Finance area.

The *Fast Start* procedure generates a **standard chart of accounts**:  
it is possible to modify the descriptions, add or delete accounts (provided they are not already used by other generated data, such as accounting templates or budget templates).

*If the proposed chart of accounts does not reflect the business reality*, it is advisable to proceed with a **manual configuration** of the tables and parameters related to the desired functional areas, in addition to the **import of a customized chart of accounts**.

Refer to the **detailed verification checklist** available in the link above to check the most important tables.
:::