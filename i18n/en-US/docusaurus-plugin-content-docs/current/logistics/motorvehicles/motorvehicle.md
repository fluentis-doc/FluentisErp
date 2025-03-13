---
title: New Vehicle (Nuovo automezzo)
sidebar_position: 2
---

The table is located at the path **Logistics > Vehicles > New Vehicle (Logistica > Automezzi > Nuovo automezzo)**.

In this table, it is possible to code the various *Motorvehicles* used and the dimensions of each of them.

An example of the use of the vehicles coded in this table can be found in the [Loading Plans](/docs/logistics/load-plans/create-plan/), in the *Load Plan Preparation* tab.

The table allows you to insert new records or search for existing ones to view, edit, or delete them.

**Search Vehicles (Ricerca Automezzi)**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

**Inserting Vehicles (Inserimento Automezzi)**

To insert new *Motorvehicles*, you must click on the first empty row in the grid or press the **New** button. For the new record, at least the mandatory fields required by the program must be entered:

- **Motorvehicle type**: indicates the type of vehicle entered in the table [Vehicle Type](/docs/configurations/tables/logistics/motorvehicle-Type);          
- **Code**: indicates the vehicle code;       
- **Number plate**: indicates the vehicle's license plate number;      
- **Posting date**: indicates the vehicle registration date;          
- **Vehicle Fuel Type (Tipo carburanti autoveicolo)**: indicates the [Fuel Type](/docs/configurations/tables/logistics/motorvehicle-gas-type) used by the vehicle.

Additionally, it is possible to insert non-mandatory fields, including:

- **Brand**: indicates the brand of the vehicle present in the table [Vehicle Brands](/docs/configurations/tables/logistics/motorvehicle-brands);             
- **Model**: indicates the model of the vehicle present in the table [Vehicle Brands](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Start date**: indicates the start date of the vehicle's use;     
- **Contract Expiration Date (Data scadenza contratto)**: indicates the contract expiration date of the vehicle;     
- **Closing date**: indicates the date from which the vehicle can no longer be used;     
- **Description**: allows the insertion of a free description of the vehicle;       
- **Account**: allows the insertion of the customer's account for the vehicle;        
- **Vehicle Ownership (Proprietà autoveicolo)**: allows indicating the type of [Vehicle Ownership](/docs/configurations/tables/logistics/motorvehicle-ownership);        
- **Assigned Driver (Autista assegnato)**: allows indicating the [Assigned Driver](/docs/logistics/motorvehicles/motorvehicle-drivers) for the vehicle;        
- **Company branch**: allows indicating the company branch;        
- **Project**: allows indicating the project assigned to the vehicle.        

Once the header values have been entered, the bottom of the form contains the following tabs:

**Details**, which contain the following values:

- **Space**: indicates the compartment of the vehicle;                  
- **Number plate**: indicates the vehicle's license plate;             
- **Payload Unit of Measure (Unità di misura portata)**: indicates the maximum capacity of the vehicle expressed in **Payload Unit of Measure (Unità di misura portata)**;         
- **Maximum capacity**: indicates the maximum capacity of the vehicle expressed in **Payload Unit of Measure (Unità di misura portata)**;                  
- **Dimensions Unit of Measure (Unità di misura dimensioni)**: indicates the unit of measure for **Height**, **Width**, **Depth**, and their respective tolerances;      
- **Height**: indicates the height of the vehicle expressed in **Dimensions Unit of Measure (Unità di misura dimensioni)**;         
- **Width**: indicates the width of the vehicle expressed in **Dimensions Unit of Measure (Unità di misura dimensioni)**;                 
- **Depth**: indicates the depth of the vehicle expressed in **Dimensions Unit of Measure (Unità di misura dimensioni)**;                 
- **Allowance on the height**: indicates the height tolerance of the vehicle expressed in **Dimensions Unit of Measure (Unità di misura dimensioni)**;           
- **Allowance on the width**: indicates the width tolerance of the vehicle expressed in **Dimensions Unit of Measure (Unità di misura dimensioni)**;       
- **Volume MU**: indicates the unit of measure in which **Volume** is expressed;                    
- **Volume**: indicates the volume of the vehicle expressed in **Volume Unit of Measure (Unità di misura volume)**;                 
- **Number of Load Units Containable (Numero unità di carico contenibili)**: indicates the maximum number of load units that can be contained in the vehicle;
- **Layers number**: indicates the number of layers that can be loaded in the vehicle.

**Vehicle Inactivity Period (Periodo inattività automezzo)** allows you to enter the periods of inactivity of the vehicle, which will be reported in the [Planning](/docs/logistics/shipping/calendar).
You can enter the following values:

- **Description**: allows indicating the description of the vehicle's inactivity period;          
- **From date**: allows indicating the start date of the vehicle's inactivity period;          
- **A date**: allows indicating the end date of the vehicle's inactivity period;          
- **Reason**: allows inserting the coded reason in [Driver Absence Reasons](/docs/configurations/tables/logistics/driver-off-time-reasons/).

For everything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).