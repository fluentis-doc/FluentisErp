---
title: Warehouse Valorization
sidebar_position: 6
---

:::important What it is for (A cosa serve)
The introduction to the warehouse valuation of Fluentis is a fundamental element in inventory management and in determining the value of stored goods. This functionality allows operators to perform warehouse closures on a specified date, recording the remaining stocks and enabling the alignment of logistical information with accounting data, thus ensuring accurate management of resources and associated costs.

The valuation procedure allows for the configuration of various parameters, such as the reason for movement for the inventories, and offers the flexibility to select appropriate valuation criteria, such as the last cost or the average cost. In this way, it is possible to take into account the movements made throughout the year for each warehouse, thus obtaining a detailed and updated overview of the value of the stocks.

Moreover, the procedure not only performs the warehouse closure, but also automatically creates an opening entry for the next day, ensuring continuity in logistical operations. Users can also monitor the closures made through a history, which reports data related to the costs and quantities valued, thus facilitating analysis and strategic decisions for improving corporate performance.
:::

The procedure allows for the closure of the warehouse on a certain date that must be entered by the user in the **Closing date** field.
By default, today's date is proposed as the **Closing date**.
Additionally, the procedure will create an opening movement with all the remaining stocks with a date equal to **Closing date** plus one day, using the cause present in the [Warehouse Reasons (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates) with the **Oddments** flag active.

*Specific buttons (Pulsanti specifici)*  
> **Closing**: allows launching the closure procedure which performs a series of checks on the consistency of the warehouse data, signaling any errors that must then be manually corrected by the operator before proceeding again; in case there are no errors, the procedure will perform the warehouse closure on the **Closing date** and the opening the following day with the remaining stocks;             
> **Create Valorization**: is used in foreign localizations such as Romania/Croatia where warehouse movements must also be recorded in accounting (see below documentation);      
> **Restore closing**: allows restoring the last closure made;     
> **Align with Accounting**: is used in foreign localizations such as Romania/Croatia where warehouse movements must also be recorded in accounting (see below documentation).

:::note RECOMMENDED (CONSIGLIATO)
The activity of closing the warehouse is particularly recommended when there is a high number of movements, because this allows maintaining the movements in the archive for consultation, while at the same time the calculations for inventory, availability, and costs are streamlined since calculations will start from the day following the last closure made.
:::

<u>The following procedures are specific for foreign localizations such as Romania and Croatia.</u> 

## Create Valuation

The **Create Valorization** procedure calculates prices and modifies values in the warehouse movements.        
It is used in cases of incomplete, unfinalized, or unbalanced warehouse documents.     
This mainly occurs due to insufficient data (price and quantity) during the entry of warehouse documents, supplier errors, or incorrect user entries, delays in the delivery of warehouse documents, or subsequent modifications to existing documents.     
By initiating this procedure, the application recalculates the new item values (FIFO) and inserts them directly into the existing document.      
In summary, the procedure modifies values in existing documents; it does not create new documents that remove/increase the value. Consequently, the procedure is irreversible and it is not possible to restore existing data before executing the procedure.      
This functionality mainly applies during the period in which the valuation is executed.      
The recalculation (FIFO) and modification of values in documents start from the warehouse closure date.     

:::danger WARNING (ATTENZIONE)
It is very important to pay close attention to the settings in the [Initial Warehouse Parameters (Parametri iniziali magazzino)](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), especially if the warehouse closure date is in the previous year.       
:::

For example, if the Start Date is 01.10.2023, while today's date could be, for example, 28.3.2024.       
By launching the **Create Valorization** procedure, the values in the warehouse documents would be modified from 01.10.2023 until today's date. Therefore, since 2023 has passed and is likely already financially closed, the values in the warehouse documents from 01.10.2023 to 31.12.2023 would be modified, significantly altering already concluded reports for 2023.      

## Alignment with Accounting

The **Align with Accounting** procedure is executed after the **Create Valorization** procedure.        
After the **Create Valorization** procedure has been completed and the values in the warehouse documents have been modified, it is also necessary to make adjustments to the related accounting documents.        
At this stage, the **Align with Accounting** procedure aligns the changes made by the warehouse valuation and modifies the values in the accounting records to ensure financial alignment with the values in the warehouse documents.       

:::danger WARNING (ATTENZIONE)
This procedure is also irreversible and modifies the amounts in existing documents.        
:::

For everything not detailed in this document regarding the common operation of forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).