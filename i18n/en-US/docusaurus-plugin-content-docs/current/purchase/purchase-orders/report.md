---
title: Reports
sidebar_position: 5
---

Several **Reports** are available. To view a preview of each print, it is necessary to set the desired filters and press the *Preview* button on the toolbar. This action will display the print on screen without changing the status of the document. If you need to proceed with a paper print or save it to a file, you instead need to click the *Print Report* button.

### Purchase Order Confirmation 

This print allows you to print Orders as Order Confirmations to send directly to the supplier.          
The first choice requested is between *temporary* and *Definitive* printing: the difference between the two types is that the temporary one has no effect on the status of the order, while the printed or digital document created in definitive state sets the document to *Printed*.     
The first filters that are shown are those related to the header information of the documents, such as *Order Type*, *Document Number*, *Supplier*, and *Project*.   
In the *Advance search* group box, you can check the order states to filter; for example, you can print fulfilled/unfulfilled orders, printed, canceled, etc.   
In the *ITEM* group box, it is possible to filter not only by the item code, but also by other information related to the body lines of the document, such as *barcode*, *Item description*, *Preferential vendor*, or *Production job order*.    

With this print, each order is paginated separately, each with the following sections:
- Header with Logo and company information
- Order information (type, number, date, etc.)
- Supplier information (tax ID, payment terms, bank, etc.)
- Order details (item code, quantity, price, etc.)
- Order summary (total goods, expenses, total tax, etc.)


### Supplier Order Labels

The function of this print is to generate physical labels for the identification and management of products or items that are part of an order.      
With the filters provided, similar to those of the previous print, you can filter the documents for a more targeted search; for example, I can print confirmed orders only from a certain date, those not delivered, unfulfilled, etc.       

The print creates labels with the following information: 
- Header with Logo and company information
- Item label with barcode, unit of measure, quantity, and item description
- Supplier and order information containing the item


### Supplier Order List 

With this report, it is possible to print a detailed summary of the supplier orders entered in the system, in list form.     
With the filters provided (the same as the previous print), you can filter the documents for a more targeted search; in this print, it is also possible to set sorting by Supplier (default), Number, or Order Type.       
In the print, under the same supplier/number/order type (based on the chosen sorting), orders are listed with the following data: divided, amount, item, VAT, etc.         

Each line of the list is occupied by an order item. 


### Order Quantity Portfolio 

This print provides a detailed and up-to-date overview of orders. It reports a list of supplier orders highlighting the quantities already delivered and the remaining ones, that is, ordered but not yet delivered; it is particularly useful for logistical coordination, as it allows you to clearly see which and how many units of products still need to be delivered.       
In the initial form, some filters related to the header of the documents to be extracted, similar to those of the reports already analyzed, are shown. Additionally, you can perform a *sorting* by *Number*, *Item*, *Date*, *Supplier*, or *Ready goods date*.   

The result is a list of orders, indicating any fulfillment documents, if they exist, and for each item, showing the ordered, delivered, and remaining quantities.      


### Order Value Portfolio 

This print provides a summary of orders received but not yet fully fulfilled, based on the monetary value of each order. This document is particularly useful for sales, finance, and strategic management departments, as it offers a clear view of the potential revenue linked to ongoing orders.      
In the initial form, some filters related to the header of the documents to be extracted, similar to those of the reports already analyzed, are shown. Additionally, you can perform a *sorting* by *Number*, *Item*, *Date*, *Supplier*, or *Ready goods date*.   

The result is a list of orders in which, for each item, the ordered, delivered, and remaining values are indicated.       


### Order Due Date Report 

This print provides a detailed overview of the due dates and delivery terms related to orders that have not been fully fulfilled.      
With the filters provided, you can filter the documents for a more targeted search; it is also possible to set a sorting by *Delivery date* or *Supplier*.       

In the print, under the same supplier/delivery date (based on the chosen sorting), orders are listed for each item with the following data: number, entry date, fulfillment status, remaining quantity, etc.      


More details on this topic can be found in the articles: [Preview and Print](/docs/guide/common/operations-with-data/reports)