---
title: Reports
sidebar_position: 5
---

Several **Reports** are available. To view a preview of each print, you need to set the desired filters and press the *Preview* button on the toolbar. This operation will show the print on screen without changing the document's status. If you need to proceed with printing on paper or saving it to a file, then you must click on the *Print Report* button.

## Invoice Print 

This print is used to massively print sales invoices that have already been entered into the system, according to the filters specified in the initial form. The first choice requested is between temporary printing and definitive printing: the difference between the two types is that temporary printing has no effect on the status of the invoice, while the printed or digital final version changes the document to *Printed*. The first filters displayed are related to the header information of the documents, such as the invoice type, document number, and customer. In the *Advance search* groupbox, you can check the statuses of the invoice to filter and the project indicated in the header of the document.
In the *ITEM* groupbox, it is possible to filter not only by item code but also by other information related to the body lines of the document, such as the barcode, item description, or if there is a project linked to the item line.       
Two different layouts are available for this print, selectable from the toolbar's combo box. The first is called *Accompanying invoice* and includes transportation data along with the invoice details; the second is called *Sales invoice* and does not include transportation data, so it is recommended for deferred invoices.     
With this print, each invoice is paginated separately, each with the following sections:
- Header with Logo and company information
- Invoice information (type, number, date, etc.)
- Customer information (VAT number, agent, etc.)
- Invoice details (item code, quantity, price, etc.)
- DN summary (total goods, expenses, total tax, etc.)        
In this print, the Nomenclatures of Items are printed only for invoices outside the EU, under the item code; furthermore, in the item description column, a summary of the amounts by nomenclature is provided.

## Billing Summary Print

The billing summary print provides a detailed overview of the company's revenues, organizing sales invoices to facilitate accounting analysis and management.      
Thanks to the available filters, it is possible to customize the print to include only the invoices that meet specific criteria, such as those issued from a certain date, those related to certain items, etc.     
This print is divided into several sections for an in-depth view of the data from different aspects.        
By highlighting receivables, payables, and totals in the various sections, it allows for a clear view of the inflows and outflows related to sales.            
The main sections are:
- Customers: Shows revenue divided by customer groups. Under each group, the customers are listed with their respective receivables, payables, and totals. At the end of the section, the total for the group is indicated.
- Revenue Accounts: Reports invoices divided by sales revenue. Only invoices with specified sales revenue are included. At the end of the section, the total for sales revenue is present.
- Payments: Details revenue divided by payment type (e.g., cash, bank transfer, credit card). Each payment type has its own summary of receivables, payables, and totals, with the section total reported at the end.
- Agents: Provides, for each agent, net goods and earned commission. This section allows for evaluating agent performance and their impact on revenue.
- Expenses: Reports the receivables, payables, and total of ancillary expenses, providing an overview of expenses associated with sales.          

At the end, there is a Summary by VAT code, where for each VAT group, the description, taxable total, and VAT are reported.

## Invoice List Print 

With this print, it is possible to print a list of the invoices entered into the system. The filters presented are the same as those of the previous prints, with the addition of the option to sort the displayed invoices by customer, invoice number, and type. There is also the possibility to select two different types of printing: the *Synthetic* print shows a list of invoice headers with total amounts and deadlines breakdown; the *Complete* print shows the details of the individual invoice lines, with indications related to their quantities and value.

## Revenue Report 

The report analyzes the sales revenue produced by all the [Invoice Types](/docs/configurations/tables/sales/invoices-type) with the *In statistic* flag active, displaying the revenue value and the percentage impact on the total of each printed item line.      
In the initial form, some filters related to the header of the documents to extract are shown, similar to those in the reports already analyzed, but there are some specific options for this report.
In the *Years for comparison* field, you can specify the fiscal years you wish to compare. In the *Options* groupbox, there are some flags that allow you to show certain data and include or exclude specific types of item lines in the calculation: checking the *Quantity* box will show, in addition to the value, also the quantities of the individual lines; *Only codified items* will ensure that the print only considers lines of type *Codified Item*; *Also items-charges* and *Also items-giveaway* will include lines of type expense and/or gift in the calculations. The *Sort modality* combo box allows you to choose the order in which the data will be displayed between: customer description, customer code, or revenue amount. Finally, in the *Grouping* grid, it is possible to set the groupings, hierarchically, in which the print should be shown: to populate the table, simply select the desired grouping in the *Properties* table and drag it into the groupings table (if you wish to clear the groupings table, just press the *Clear Grouping* button on the toolbar).

## Sales Statistics

This section allows for analyzing sales by focusing on profit margins calculated on the cost of products or services sold.         
The print provides two possible views of the data, selectable from the combo box on the toolbar. The first view, *Margin of purchase price from pricelist*, makes a comparison between the sold value and the associated list price cost, with the indication of the margin value and the corresponding percentage. The second view, *Margin of goods entry price*, instead shows the comparison between the sold value and the cost indicated on the recorded goods receipt movements in the warehouse.
In the initial form, some filters related to the header of the documents to extract are shown, similar to those in the reports already analyzed, but there are some specific options for this report.
In the *Options* groupbox, there are some flags that allow you to show certain data and include or exclude specific types of item lines in the calculation: checking the *Quantity* box will show, in addition to the value, also the quantities of the individual lines; *Only codified items* will ensure that the print only considers lines of type *Codified Item*; *Also items-charges* and *Also items-giveaway* will include lines of type expense and/or gift in the calculations. The *Sort modality* combo box allows you to choose the order in which the data will be displayed between: customer description, customer code, or revenue amount. Finally, in the *Grouping* grid, it is possible to set the groupings, hierarchically, in which the print should be shown: to populate the table, simply select the desired grouping in the *Properties* table and drag it into the groupings table.        

## CONAI Reports 
The CONAI (Consortium for National Packaging) declaration document is a form that Italian companies must complete to declare data related to the packaging they place on the market. This document is essential for calculating the CONAI environmental contribution, which is a cost that companies must pay to support separate collection and recycling of packaging.        
Thanks to the available filters, it is possible to customize the print to include only the documents that meet specific criteria; it is also possible to group the results by Material, Customer, or Item.         
The document includes various sections:
- Reference Period
- Personal data
- Weight of packaging
- Environmental contribution
- Exemption

More details on this topic in the articles: [Preview and Print](/docs/guide/common/operations-with-data/reports)