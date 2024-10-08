---
title: Fixed Section
sidebar_position: 1
---

The form opens via the path *Purchases > Purchase Order > Create Purchase Order*.  

To create the order, the user must fill in the mandatory fields:

**Order Type**: predefined in *Configuration > Tables > Purchases > Purchase Order Types*.  
This field determines the numbering range of the document being entered and automatically proposes the supplier order number based on the entry date and the last entered number. Additionally, if the *Automatic Order Confirmation* flag is set in the *Order Type* [configuration](/docs/configurations/tables/purchase/purchase-orders-type), the order confirmation date is automatically set to the order entry date.  
**Year**: automatically enters the current year, but can be manually changed, always respecting the progression rule between date and number.  
**Number**: automatically proposed based on the type, but can be manually changed, always respecting the progression rule between date and number.  
**Entry Date**: automatically proposes the current date, but can be manually changed, always respecting the progression rule between date and number.  
**Supplier**: can be entered using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#using-field-help) or [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#manual-entry).

The form contains several tabs:

> - [Header](/docs/purchase/purchase-orders/insert-purchase-orders/header) and its [Procedures](/docs/purchase/purchase-orders/insert-purchase-orders/header-procedures)
> - [Items](/docs/purchase/purchase-orders/insert-purchase-orders/items)
> - [Summaries](/docs/purchase/purchase-orders/insert-purchase-orders/summaries)
