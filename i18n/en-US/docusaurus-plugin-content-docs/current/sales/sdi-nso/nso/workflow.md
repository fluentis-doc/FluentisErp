---
title: Ordering Types and State Changes (Tipi ordinazione e cambio stati)
sidebar_position: 6
---

The status **Received** is the status of an order that has been received by Fluentis without errors but has not yet been entered as a customer order. The order can be received with the status “In error (In errore),” meaning the order has been received and entered but contains incorrect data, such as a line price of 0, or missing data, such as the customer's NSO code. It must therefore be corrected by the user before further state changes can be made.  
From the Received status, two different commands can be executed:        
- **Order Import** moves the order to the *Inserted* status, meaning the order is generated in Fluentis documents;  
- **Cancel document** ensures that the order is not created in Fluentis and changes to the *Cancelled* status, as it has been rejected by the supplier.  

## Simple Ordering (Ordinazione semplice)

In the simple ordering process, where only the customer sends orders and the supplier cannot respond within the flow but must do so through other alternative channels (email, fax, etc.), the following state transitions can be made from the *Inserted* status:
- *Pending Cancellation*, meaning the order is placed in a suspended state awaiting a cancellation from the customer, who has likely communicated the cancellation previously through other channels (email, phone, etc.);  
- *Pending Change*, meaning the order is placed in a suspended state awaiting the receipt of a replacement order from the customer, who has likely communicated the replacement previously through other channels (email, phone, etc.).        

The customer can request a replacement for the order. In this case, the original order will move to the status “In request for replacement (In richiesta di sostituzione).” From here, two state changes can be selected:
- *Back to Inserted* if the replacement is not accepted and the order is to be returned to the “Inserted (Inserito)” status so it can be fulfilled with the original values;  
- *Buyer Replace* if the replacement of the order is to be accepted.       

Upon receipt of the replacement order, an additional line will be generated with the status *Accept Waiting*, which refers to the new order. In the case of acceptance of the replacement of the new order to the initial order, the *Accept Waiting* line will change to *Inserted* status, while the original order line *Pending Replacement Request* will move to the status *Buyer Replace*.  

## Complete Ordering (Ordinazione completa)

In the complete ordering process, where the customer and the supplier can send orders via NSO, the following state transitions can occur from the *Inserted* status:
- *Send Accept order response* sends a notification to the customer confirming the acceptance of the order by the supplier (IBSA). The order moves to the status “Confirmed by supplier (Confermato da fornitore)” and an additional line will be created for the confirmation response file.  
- *Send Cancel order response* sends a notification of non-acceptance of the order to the customer, with the order moving to the status *Seller Cancel Confirmation*.  
- *Order response Creation* allows for modifications to the document regarding item code, quantity, and price of individual lines, and sends it to the customer, who can then accept or reject the modified order. A warning message will be shown regarding the closure of the original order and the creation of a new order on which the modifications will be made. Once modifications are made to the order, it can be sent using the state change *Order response*. The new modification order will move to the status “Awaiting feedback (In attesa di riscontro).” A new notification line will also be created.  
- *Send Received order response* sends a simple notification of receipt of the order to the customer, and the order moves to the *Seller Received* status.  

## Pre-Agreed Ordering (Ordinazione pre-concordata)

In pre-agreed ordering, the flow begins with the supplier, who, as previously agreed with the customer through other channels (email, fax, etc.), issues the NSO order.        

The initial status of a pre-agreed order is *New Agreement Order*, from which the *Agreement Order Control* state transition can occur, moving the order to the *Controled* status. From the *Controled* status, two state transitions can be made:       
- *Return to Pre-Agreed status (Riporta in stato Pre-Concordato)* returns the order to the *New Agreement Order* status;       
- *Agreement Order Generation* generates the pre-agreed order file, changing its status to *Generated*, which can then undergo two state changes:       
> - *Agreement Order Deliver*, which moves the order to the *To deliver* status, meaning the order is sent to the customer and is ready to be physically fulfilled;  
> - *Go Back to controlled* which returns the order to the *Controled* status.