---
title: Valorized Inventory with Quantity
sidebar_position: 1
---

:::important What It Is For
The report "Valorized Inventory with Quantity" of Fluentis represents a key tool for the management and monitoring of warehouse stocks, allowing companies to have a clear and detailed view of their inventories. Through this report, users can access complete information not only about the physical quantities of items present in the warehouse but also about their value, obtained through various valuation methods such as average cost, last cost, FIFO, and LIFO.

The generation of the report occurs through customizable filters, which allow for viewing specific data for warehouse, item, merchandise category, and more, facilitating analysis and management of stocks. Users can also group and sort data based on meaningful parameters, making the entire inventory control process more efficient and informed.

This report not only supports daily operational decisions but is also crucial to ensure compliance with regulations and to conduct financial and performance analyses within the organization.
:::

The print function allows the user to view a report containing information related to the inventory.
The form consists of an upper part containing a series of filters (warehouse, reason, item/variant, item type, tax category, merchandise category,...) that allow for viewing the desired data.

Additionally, through a series of dedicated boxes, it is possible to:

- group the data by item or warehouse;      
- sort them by item, characteristic, description, and merchandise category;     
- obtain details by variant, location, job order, lot, or customer/supplier;       
- view items with positive, zero, or negative stock.

By activating the box **With valorization at**, the report will also include the value of the single item based on the following flags:

- **Average cost**: if active, items are valued with the average cost calculated based on warehouse movements (if the flag **From item registry (Da anagrafica articolo)** is disabled);    
- **Latest cost**: if active, items are valued with the last cost calculated based on warehouse movements (if the flag **From item registry (Da anagrafica articolo)** is disabled);    
- **FIFO yearly rise**: if active, items are valued using the FIFO logic in annual increments;        
- **LIFO yearly rise**: if active, items are valued using the LIFO logic in annual increments;        
- **Management area**: if active, items are valued based on the management area indicated for that warehouse within the [Warehouses table](/docs/configurations/tables/logistics/warehouses/);          
- **By effective cost batches**: if active, items are valued with the value indicated in lot registry;      
- **From item registry (Da anagrafica articolo)**: if active, in conjunction with the **Average cost** or **Latest cost** flags, items are valued at average or last cost respectively, but based on the respective costs entered in the item registry;         
- **Inventory historicization**: if active, the processing data will be saved in the [Warehouse History](/docs/logistics/physical-inventory/warehouse-history);      
- **From historicizing**: if active, items are valued with the values present in the [Warehouse History](/docs/logistics/physical-inventory/warehouse-history) for the date specified in the **History cost date** field;      
- **History cost date**: enabled only if the **From historicizing** flag is active, allows the entry of the historical cost date to be used for valuation.

After entering the desired parameters, it is possible to print standard or customized reports (subject to mapping in print management). If you want to print a customized report, it must be selected from the list in the print parameters.

The following standard reports are available:

- **FIFO printing**: this is a report with FIFO logic for inventories (to be used in conjunction with the use of the **FIFO yearly rise** flag);              
- **Print Inventory**: this is a standard report for inventories;       
- **Print LIFO**: this is a report with LIFO logic for inventories (to be used in conjunction with the use of the **LIFO yearly rise** flag).


**LIFO in Annual Increments**

The LIFO in annual increments executed without considering the *From items nomenclature* or *Management area* flag works as follows: 

In the current year, from the last closing date to the *Inventory at* date, the stock and average cost are calculated. 

For the calculation of the weighted average cost, all movements of items with the active tax interest flag from the warehouse records with the reason that updates the average cost and with tax interest are considered.

For the calculation of stock, all movements of items with the active tax interest flag from warehouse records with tax interest are considered. 

Once the stock at the end of the period is obtained, the LIFO stratifications in the *Warehouse History (Storico di magazzino)* are verified, calculating backwards the balances of each year; then, for each year, the balance of the year is multiplied by the average cost of the year, and by summing the values of each year of the stratification, the FIFO cost of each item is obtained. 
If in the *Warehouse History (Storico di magazzino)* there are years with a balance of 0, the search for LIFO stratifications stops and the valuation is done from the next stratified year.

:::note Note
For all years prior to the last warehouse closing, the stock at the end of the year is considered, without splitting it by warehouse.   
Consequently, for LIFO and FIFO prints, it is possible to apply the *grouping by warehouse* filter only for the current year, that is, for all records made after the date of the last warehouse closing.
:::

Let’s make an example:

the warehouse closing is dated 12/31/2023
today we print the valued inventory for item A which has a stock on 05/23/2024 of 170 and an average cost on 05/23/2024 of 3 euros
In the history for item A we find:

| Year | Balance | Average Cost |
| :-- | :-: | :-: |
| 2020 | 100 | 2 |
| 2021 |   0 | 0 |
| 2022 |  60 | 1.5 |
| 2023 | 100 | 2.5 |         

The calculation is done as follows:
170 today is surely 100 from 2023, and from the 100 of 2023, 60 are surely from 2022 and they cannot be from 2021 because the stock was 0.
Therefore, the LIFO cost on 05/23/2024 is:
((60 * 1.5) + (40 * 2.5) +(70 * 3)) /170 = 2.35

For everything not detailed in this document regarding the common functioning of the print forms, please refer to the following link [Preview and Printing](/docs/guide/common/operations-with-data/reports).