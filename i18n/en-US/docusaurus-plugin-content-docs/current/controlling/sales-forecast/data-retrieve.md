---
title: Data Retrieve
sidebar_position: 3
---

:::important What it is for
Processing for the automatic generation of sales data and, if requested, sales forecasts based on historical data from documents in the Sales area; in particular from the documents: Customer Orders, Delivery Notes, and Sales Invoices.
:::

We can execute the Data Retrieve from the menu area Controlling > Monthly Sales Forecasts.

The management consists of a filter form to search for previously executed Data Retrieve and, through the **New** button, to create new ones, along with a **Data Retrieve Management** form where you can specify from which types of sales documents, and for which period, to retrieve the data that will become the starting point for the sales forecasts for a predefined [Sales Forecast Version](/docs/configurations/tables/controlling/forecast/pv-versions).

Let’s detail each individual piece of information present:

- **Version**: this is a mandatory field and is used to store the retrieved data in that specific version;
- **Group by variant**: allows or disallows consideration of detail by item variant;
- **Last Retrieve date**: is proposed as today’s date and is updated when the **Data Retrieve** button is pressed with the date of processing;
- **Consider expected estimated date**: if indicated, for the Retrieve of customer orders only, the month of relevance will be the month of the Estimated Delivery Date and not that of the Goods Ready Date;
- **Generate Forecasts**: if indicated, the **Data Retrieve** will also generate sales forecasts for Item, Variant, and Version;
- **Sales Invoices**: in the first list, we can indicate from which Invoice Types to retrieve information and for which period (*From date, To date*); the selected Invoice Type will automatically indicate whether it is a Return Invoice Type or not;
- **Sales Delivery Notes**: in the second list, we can indicate from which Delivery Notes Types to retrieve information and for which period (*From date, To date*); the selected Delivery Notes Type will automatically indicate whether it is a Return Delivery Notes Type or not;
- **Customer Orders**: in the third list, we can indicate from which Order Types to retrieve information and for which period (*From date, To date*).

For the periods of the invoice and sales Delivery Notes types, when inserting a new document type, the proposed values are: *From date* equal to the first of January of the current year, *To date* equal to today; for the customer order types, *From date* proposed is the first of January of the current year, *To date* is the thirty-first of December of the current year, all of which can be modified by the operator.

The available buttons are:

- **Save**: stores the information entered in the form for data Retrieve;
- **Insert a new Invoice Type**, **Delete selected Invoice Types**, **Insert a new Delivery Notes Type**, **Delete selected Delivery Notes Types**, **Insert a new Order Type**, **Delete selected Order Types**: these are all buttons to position in the insertion row of a new document type or to delete selected document types;
- **Data Retrieve**: through this processing, all document lines that meet the required document types and periods (invoice date for invoices, Delivery Notes date for Delivery Notes, and goods ready date or expected delivery date for orders) will generate the forecasts for the requested version.