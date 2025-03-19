---
title: Delivery Note from Goods Receipt
sidebar_position: 2
keywords:
- DDT
- Goods Receipt 
---

The procedure opens via the path **Purchases > Purchase Invoice > Procedures > Delivery Note from Goods Receipt**

### Filter

It offers the possibility to enter filters to search for receipts, select them, and create the DDT.

> **Delivery note no. / date**: allows specifying the date and number of the DDT that will be generated with the procedure.

### Parameters

*Mandatory data*:

- **Purchase Delivery Note Type**: indicates the document type to be used for creating the DDT.
- **VAT**: indicates the [VAT Rate](/docs/configurations/tables/finance/vat-rates) to be entered on the item lines in the DDT.
- **Purchase turnover type**: to be set on the item lines of the DDT.

*Optional data*:
> **Recompute cost/revenue centers**: allows choosing whether to recalculate the cost/revenue centers at the time of DDT creation.

### Rollback

It offers the possibility to search, view, and cancel operations performed.

To cancel an operation, simply select the row corresponding to the DDT to be deleted in the upper grid and click the **Currency adjustment rollback** button located in the ribbon bar.

Each row in the upper grid (which contains the number, date, and user who created the DDT) corresponds to one or more rows in the lower grids **Subcontractor delivery note** and **Receipt List**. In these two grids, by double-clicking the relevant row, the user can view the newly created delivery DDT or the goods receipt from which it was generated.