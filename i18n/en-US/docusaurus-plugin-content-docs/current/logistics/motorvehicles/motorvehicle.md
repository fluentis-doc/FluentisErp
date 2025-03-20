---
title: New Motorvehicle 
sidebar_position: 2
---

The table is located at the path **Logistics > Motorvehicle > New Motorvehicle**.

In this table, it is possible to code the various *Motorvehicles* used and the dimensions of each of them.

An example of the use of the motorvehicles coded in this table can be found in the [Loading Plans](/docs/logistics/load-plans/create-plan/), in the *Load Plan Preparation* tab.

The table allows you to insert new records or search for existing ones to view, edit, or delete them.

**Search Motorvehicle**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

**Insert Motorvehicle**

To insert new *Motorvehicles*, you must click on the first empty row in the grid or press the **New** button. For the new record, at least the mandatory fields required by the program must be entered:

- **Motorvehicle type**: indicates the type of motorvehicle entered in the table [Motorvehicle Type](/docs/configurations/tables/logistics/motorvehicle-Type);          
- **Code**: indicates the motorvehicle code;       
- **Number plate**: indicates the motorvehicle's license plate number;      
- **Posting date**: indicates the motorvehicle registration date;          
- **Motorvehicle Fuel Type**: indicates the [Fuel Type](/docs/configurations/tables/logistics/motorvehicle-gas-type) used by the motorvehicle.

Additionally, it is possible to insert non-mandatory fields, including:

- **Brand**: indicates the brand of the motorvehicle present in the table [Motorvehicle Brands](/docs/configurations/tables/logistics/motorvehicle-brands);             
- **Model**: indicates the model of the motorvehicle present in the table [Motorvehicle Brands](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Start date**: indicates the start date of the motorvehicle's use;     
- **Contract Expiration Date**: indicates the contract expiration date of the motorvehicle;     
- **Closing date**: indicates the date from which the motorvehicle can no longer be used;     
- **Description**: allows the insertion of a free description of the motorvehicle;       
- **Account**: allows the insertion of the customer's account for the motorvehicle;        
- **Motorvehicle Ownership**: allows indicating the type of [Motorvehicle Ownership](/docs/configurations/tables/logistics/motorvehicle-ownership);        
- **Assigned Driver**: allows indicating the [Assigned Driver](/docs/logistics/motorvehicles/motorvehicle-drivers) for the motorvehicle;        
- **Company branch**: allows indicating the company branch;        
- **Project**: allows indicating the project assigned to the motorvehicle.        

Once the header values have been entered, the bottom of the form contains the following tabs:

**Details**, which contain the following values:

- **Space**: indicates the compartment of the motorvehicle;                  
- **Number plate**: indicates the motorvehicle's license plate;             
- **Payload Unit of Measure**: indicates the maximum capacity of the motorvehicle expressed in **Payload Unit of Measure**;         
- **Maximum capacity**: indicates the maximum capacity of the motorvehicle expressed in **Payload Unit of Measure**;                  
- **Dimensions Unit of Measure**: indicates the unit of measure for **Height**, **Width**, **Depth**, and their respective tolerances;      
- **Height**: indicates the height of the motorvehicle expressed in **Dimensions Unit of Measure**;         
- **Width**: indicates the width of the motorvehicle expressed in **Dimensions Unit of Measure**;                 
- **Depth**: indicates the depth of the motorvehicle expressed in **Dimensions Unit of Measure**;                 
- **Allowance on the height**: indicates the height tolerance of the motorvehicle expressed in **Dimensions Unit of Measure**;           
- **Allowance on the width**: indicates the width tolerance of the motorvehicle expressed in **Dimensions Unit of Measure**;       
- **Volume MU**: indicates the unit of measure in which **Volume** is expressed;                    
- **Volume**: indicates the volume of the motorvehicle expressed in **Volume Unit of Measure**;                 
- **Number of Load Units Containable**: indicates the maximum number of load units that can be contained in the motorvehicle;
- **Layers number**: indicates the number of layers that can be loaded in the motorvehicle.

**Motorvehicle Inactivity Period** allows you to enter the periods of inactivity of the motorvehicle, which will be reported in the [Planning](/docs/logistics/shipping/calendar).
You can enter the following values:

- **Description**: allows indicating the description of the motorvehicle's inactivity period;          
- **From date**: allows indicating the start date of the motorvehicle's inactivity period;          
- **A date**: allows indicating the end date of the motorvehicle's inactivity period;          
- **Reason**: allows inserting the coded reason in [Driver Off Time Reasons](/docs/configurations/tables/logistics/driver-off-time-reasons/).

For everything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).