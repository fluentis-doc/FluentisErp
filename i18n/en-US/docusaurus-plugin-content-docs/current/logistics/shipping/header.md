---
title: Header (Testata)
sidebar_position: 4
---

After selecting the mandatory data in the upper section, the user can continue entering the following data:  
- **Start date**: allows you to indicate the start date of the shipment;      
- **End date**: allows you to indicate the end date of the shipment;    
- **Planned hours**: indicates the total hours needed for the shipment. It is calculated automatically based on the start and end dates;

Information regarding the vehicle and driver:  
- **Motorvehicle**: allows you to select the vehicle that will be used for the shipment from those listed in the [Vehicles](/docs/logistics/motorvehicles/motorvehicle) table;  
- **Assigned driver (Autista assegnato)**: allows you to select the driver who will carry out the shipment from those indicated in the [Drivers](/docs/logistics/motorvehicles/motorvehicle-drivers) table;       
- **Volume**: allows you to indicate the volume of the shipment and the related unit of measure;  
- **Net weight**: allows you to indicate the net weight of the shipment and the related unit of measure;  
- **Gross Weight**: allows you to indicate the gross weight of the shipment and the related unit of measure;  

Information regarding the goods:  
- **Type of packaging**: allows you to select the appearance of the shipped goods from those listed in the [Goods Appearance](/docs/configurations/tables/logistics/type-of-packaging/) table;  
- **Tracking number (Numero tracking)**: allows you to indicate the tracking number of the shipment. This will be proposed by default for all shipments entered in the **groupage** tab;  
- **Total number of packages (Numero totale di colli)**: allows you to indicate the number of packages in the shipment.  

Information related to the currency:  
- **Currency**: section containing data related to the [Currency](/docs/guide/common/glossary/glossary-intro#currency)  
- **Currency date**: indicates the [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date)  

Information regarding the recipient and destination:  
- **Production site**: allows you to choose the production site from which the shipment will be made and automatically populates the address associated with the *Contact* (inserted in the *Production Site*) in the Address of the loading location of the shipment;  
- **Loading location address (Indirizzo del luogo di carico)**: upon opening the form, this field is default populated with the address of the company, from which the goods should typically leave. It is also possible to modify it manually;  
- **Destination address (Indirizzo del luogo di destinazione)**: allows you to indicate the destination location of the shipment.  

Information related to the shipment:  
- **Delivery**: allows you to indicate data related to the [Shipment](/docs/guide/common/glossary/glossary-intro#shipment);  
- **Carriage**: allows you to indicate data related to the [Port](/docs/guide/common/glossary/glossary-intro#carriage);  
- **Packing**: allows you to indicate data related to the [Packing](/docs/guide/common/glossary/glossary-intro#packing).  

Any notes:  
- **Note**: allows you to insert a free note;         
- **Initial note (Nota iniziale)**: allows you to insert an additional free note.     

And finally, the information related to the status of shipment fulfillment:  
- **Execution status**: when the shipment is fulfilled through DDT documents or invoices, its fulfillment status automatically changes from *Not executed* to *Partially executed* or *Closed*; the user can force the fulfillment of an order that is not fully fulfilled by indicating the status *Forced fulfilled (Evaso forzatamente)*;  
- **Closing date**: indicates the fulfillment date of the document.