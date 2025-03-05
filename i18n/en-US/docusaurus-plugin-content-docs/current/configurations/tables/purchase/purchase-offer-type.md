---
title: Offer Request Type
sidebar_position: 2
---

This table is essential for defining the various types of requests for quotations available, each with its own characteristics. It can be accessed from **Configuration > Tables > Purchases > Offer Request Type**.     

The fields present are:

**Code/Description**: mandatory fields to identify the type of request.

**Numeration**: contains the associated [Numeration](/docs/configurations/tables/fluentis-numerations);      

**Purchase Order Type**: contains the [Purchase Order Type](/docs/configurations/tables/purchase/purchase-orders-type) and the related **description** to be created starting from the RDO, in the procedure for [Purchase Order Creation from Purchase Offer](/docs/purchase/offer-request/procedures/order-creation).         

**Price including VAT**: this flag indicates that the price displayed on the document lines will already include tax.    

**Print Report**: in this field, it is possible to choose the default print to use (it should be noted that to print the default report, it will be necessary to select the option *Multiple Print* during the print phase); in the following field, it is possible to indicate a **Number of copies** to print.    

**Fixed Assets Management**: this flag indicates that the Offer Request Type must manage assets; in the following field, it is necessary to indicate the **Operation Type**, which in the case of purchases will always be an *Original Cost*.