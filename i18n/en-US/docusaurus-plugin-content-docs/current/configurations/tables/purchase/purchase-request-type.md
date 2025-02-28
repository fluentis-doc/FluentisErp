---
title: Purchase Request Types
sidebar_position: 1
---

This table is essential for defining the various types of purchase requests available, each with its own characteristics. It can be accessed from **Configuration > Tables > Purchases > Purchase Request Types**.

The fields present are:

**Code/Description**: mandatory fields to identify the type of request.

**Numeration**: select the [Numeration](/docs/configurations/tables/fluentis-numerations) to associate with the request type.

**Cost Center**: cost center to propose when creating the purchase request. It can be left empty if the management control module is not used.

**Warehouse/Warehouse Description**: default warehouse to be used when creating the purchase request.

**Control Availability**: if set, purchase requests created with this type are used for the availability calculation and are visible in the [Availability Analysis](/docs/erp-home/registers/items/availability-analysis) form.

**Print Report**: in this field, it is possible to choose the default print to use (it is reminded that, to print the default report, during printing it will be necessary to select the *Multiple Prints* option); in the next field, it is possible to indicate a **Number of copies** to print.

**Cash Flow**: if this flag is active, this type of purchase requests will contribute to the Cash Flow calculation.

**Offer Request Type**: in this field, it is necessary to indicate which [Offer Request Type](/docs/configurations/tables/purchase/purchase-offer-type) to create from this type of purchase request.