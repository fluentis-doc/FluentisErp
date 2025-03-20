---
title: Calendar
sidebar_position: 7
---

:::important What it’s for
The **planning** of shipments is a fundamental tool for optimizing logistics management within a company. It allows for the planning, monitoring, and coordination of all activities related to the shipment of goods, ensuring efficient distribution of resources and optimization of time. Therefore, by visualizing crucial data such as schedules, carriers, vehicles, and customers, the **planning** facilitates the scheduling of daily activities, reducing delays and improving delivery punctuality. Additionally, by integrating functionalities such as managing inactivity periods and updating the status of shipments, it provides a comprehensive and updated overview of logistics operations, promoting better decision-making and greater operational efficiency.
:::

The shipment calendar can be found at: Logistics > Shipments > Calendar

The **shipment calendar** displays all shipments entered into the system, grouped in a timeline view based on driver/carrier/vehicle/customer/no grouping.              
Upon opening, the displayed range will be today's date + 7 days if there are shipments in that period, otherwise, it will show the first subsequent interval where shipments are present. 

In addition to shipments, the calendar also shows periods of inactivity for vehicles and carriers. 

In the left column, there are data related to **driver/carrier/vehicle/customer based on the chosen grouping**, and the various shipments are positioned in the calendar grid.            
Even if the duration of the shipment is only one hour, in the calendar it will be shown as a full day for easier visibility. If a more precise view is desired, click on **Hourly timeline view** from the ribbon bar.                    
This way, the shipment will be displayed with the size actually corresponding to its duration. This option can be useful if zooming in/out (ctrl + mouse scroll) to go into maximum hourly detail of the day.               
To return to viewing shipments in daily mode, click the **Daily timeline view** button on the ribbon bar.

In the ribbon, the following buttons are also present: 

- Search: refreshes the display

- View by carrier: the left column will show all carriers and their respective shipments first; if the carrier is not present in the groupage rows, the carrier in the header of the shipment will be considered. 
>> If the carrier is not indicated anywhere, the respective drivers will be listed at the end of the list of displayed carriers; if no drivers are present in the groupage rows, the driver in the shipment header will be considered. 
>> If the driver is not indicated anywhere, customers will be listed at the end of the displayed drivers.

- View by driver: the left column will show all drivers and their respective shipments first; if the driver is not present in the groupage rows, the driver in the header of the shipment will be considered. 
>> If the driver is not indicated anywhere, the respective carriers will be listed at the end of the displayed drivers; if no carriers are present in the groupage rows, the carrier in the shipment header will be considered. 
>> If the carrier is not indicated anywhere, customers will be listed at the end of the displayed drivers.

- View by customer: the left column will show all customers; if none are present, there will be an "other" entry that groups all shipments without an assigned customer. 

- View by vehicle: the left column will show all vehicles; if the vehicle is not present in the groupage rows, the vehicle in the header of the shipment will be considered. 
>> If not present, there will be an "other" entry that groups all shipments without an assigned vehicle. 

- No grouping: a calendar will be displayed by shipment type.

By right-clicking, it is possible to insert a new shipment or a period of inactivity for a driver or vehicle. 

On the left side, there are filters for: 
- transport type: sender, recipient, carrier
- vehicle
- license plate
- tracking number
- customer
- carrier
- driver
- Customer order reference 
- Production site 

The colors of the shipments represent the [Shipment Status](/docs/configurations/tables/logistics/shipping-states).       
By right-clicking on the shipment, it is possible to advance the status. 

The colors assigned to the list of drivers/vehicles/carriers/customers are random and are assigned upon opening the calendar until the next view change.