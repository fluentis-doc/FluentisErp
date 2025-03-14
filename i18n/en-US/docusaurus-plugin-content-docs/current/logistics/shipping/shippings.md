---
title: Shipments (Spedizioni)
sidebar_position: 3
---

:::important What It's For (A cosa serve)
The management of **Shipments** in Fluentis represents a significant advancement in logistical and operational management for companies using this ERP platform. It has been designed to optimize and simplify the shipping process, offering more efficient and integrated control of all logistical activities. The shipment management system in Fluentis also introduces the possibility of creating groupage, a logistical process through which shipments from different customers or suppliers are consolidated into a single transport unit.

This consolidation method offers various benefits:

- **Cost Reduction (Riduzione dei Costi)**: The creation of groupage allows for the optimization of loading space use and reduces transportation costs per unit of shipped goods. It is particularly advantageous for companies that ship goods in quantities lower than a full load.
- **Operational Efficiency (Efficienza Operativa)**: Consolidating multiple shipments into a single load simplifies the management of operations and reduces transit times, enhancing the overall efficiency of the logistical process.
- **Flexibility and Scalability (Flessibilità e Scalabilità)**: Companies can easily adapt their shipping strategy based on demand and market changes, leveraging the flexibility offered by groupage to manage shipping peaks or have more control over delivery times.

In summary, this shipment management functionality in Fluentis provides companies with a powerful tool to optimize logistics, improve efficiency, and reduce costs while maintaining a high level of service and customer satisfaction.
:::

The **New Shipment (Nuova Spedizione)** form opens through the path **Logistics > Shipments > New Shipment (Logistica > Spedizioni > Nuova Spedizione)** or via the **New** button found in the [Shipment Search (Ricerca Spedizioni)](/docs/logistics/shipping/search-shippings) form.

In the input form, the **Date** and **Year** are automatically proposed, but they can be modified.

To continue the creation of the shipment, the user must enter the mandatory fields:
- **Type of shipment (Tipo di spedizione)**: indicates the type of shipment and automatically the *number* of the shipment is also entered. This is predefined in *Configuration > Tables > Logistics > [Shipping Types (Tipi di spedizione)](/docs/configurations/tables/logistics/shipping-type)*.       
- **Shipping status (Stato di spedizione)**: predefined in *Configuration > Tables > Logistics > [Shipping States (Stati di spedizione)](/docs/configurations/tables/logistics/shipping-states)*.        
- **Transported by (Trasporto tramite)**: the user can choose from the following options: *Sender*, *Recipient*, and *Carrier*.
- **Number**: each document is assigned a number according to the numbering specified by the user and the type of shipment that contains the numbering.       
- **Carrier**: allows indicating the carrier who will make the shipment.
- **Client**: allows indicating the customer for the shipment.

The form contains a series of tabs:    

- [Header (Testata)](/docs/logistics/shipping/header)

- [Groupage (Groupage)](/docs/logistics/shipping/groupage)

- [Summaries (Riepiloghi)](/docs/logistics/shipping/summary)