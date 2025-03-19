---
title: Introduction
sidebar_position: 1
---

The module is located in the purchasing area **Purchases > Goods Receipt** and represents an intermediate step that allows you to register the arrival of goods sent by a supplier, thus updating warehouse stocks without having to first create the Transport Document or the Purchase Invoice. 

### Operational Flow

- Creation: The goods receipt can be manually entered by the operator when the goods arrive or it can be generated from a supplier order using the *Get from Orders* button. 
- Warehouse registration: The goods receipt can be loaded into the warehouse using the appropriate [procedure](/docs/purchase/goods-reception/procedures/good-receipt-load).
- Linked Documents: From a goods receipt, it is possible to [Create a Purchase DDT](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) or a [Purchase Invoice](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).

### Operational Benefits

- Immediate stock updates: The module allows for real-time registration and updating of incoming goods quantities, ensuring that the warehouse is always aligned with actual stock and preventing errors or discrepancies in inventory data.
- Seamless integration with other business processes: The goods receipt is closely linked to purchase orders and the warehouse and allows for the automatic creation of related documents such as DDT and purchase invoices.
- Traceability: Each receipt is tracked in the system, providing complete visibility of the flow of goods. 

### Settings

Before using the module, it is necessary to fill in the following parameters and tables:     
> - [Numbering](/docs/configurations/tables/fluentis-numerations)
> - [Goods Receipt Types](/docs/configurations/tables/purchase/goods-receipt-types)
> - [Supplier Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters): in the *Load* tab, the parameters to be used for the *Goods Receipt Loading* must be specified.