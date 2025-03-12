---
title: Purchase DDT Parameters (Parametri DDT acquisto)
sidebar_position: 3
---

The parameters of purchase DDT (Delivery Documents) allow for basic settings to properly manage purchase slips according to the specific requests of each individual company.

The window consists of buttons and three different tabs: *General*, *Load*, and *Analytic*.

### General

**Management of double measurement unit**: only if this flag is activated can the system manage the alternative unit of measure in the purchase DDT.

**Automatic proposal of alternative UM (Proposta automatica UM alternativa):** if activated, the quantity related to the alternative unit of measure is proposed, provided that a default one has been set in the item registry. This flag can only be activated if the previous flag is enabled.

**Cost zero if price lists are missing**: if active, in the absence of a valid price list, it populates the price with a value of zero. If this option is not checked, the field would be populated with the last cost of the item, if available.

**Allow DDT with same number and supplier (Permetti DDT con stesso numero e fornitore):** if active, it allows the entry of two DDTs for the same supplier with the same number. It is advisable to keep this flag deactivated to allow the system to perform the uniqueness check.

**Lots and S.N. (Serial Number) required (Lotti e S.N. (Serial Number) obbligatori):** if active, it forces the user to enter the lot and serial number at the item line level for all items for which this management is provided. If not active, the lot and serial number are not mandatory, and it will be possible to save the document even without entering them. It is recommended to activate this flag if you are using item management with lots.

**Search item prices in all predefined price lists (Ricerca prezzi articoli in tutti i listini predefiniti):** if active, the price of the item entered in the supplier order line will be searched in all predefined price lists of the supplier registry, in addition to the default price list. If not active, the price of the item will be searched only in the default price list present in the order header, but not in other price lists for the same supplier with different validity dates.

**Allow discounts for free items (Consentire sconti per articoli omaggio):** if active, it allows the insertion of discounts on lines of free type items.

**Use supplier item (Uso articolo fornitore):** if active, the grid of items in the DDT will also propose the field to enter the supplier item code.

**Check items in stock (Verifica articoli in esaurimento):** if activated, the system checks the availability of the items entered in the DDT and warns if the item is running out, that is, if in the [item registry](/docs/erp-home/registers/items/create-new-items/item-registry/generality) the flag *In exhaustion* is active.

**Accounting for packaging (Contabilizzazione imballi):** allows for accounting in general ledger for lines with items of packaging nature, which are usually managed to verify the stock of [Returnable Packaging (Imballi a rendere)](/docs/configurations/tables/logistics/package-to-be-returned).

**Maintain prices from orders for tiers (Mantieni prezzi da ordini per gli scaglioni):** used in the order fulfillment procedure in DDT when the fulfilled quantity is different (usually partial) from the ordered quantity for which a price or a discount at quantity tiers has been entered. If the price or discount does not depend on the delivered quantity but only on the ordered quantity, this flag should be activated; if the tier price or discount should not be included in the delivery document in case fulfillment does not occur for the total quantity of the order, the flag should not be activated.

**Activate Quality Control (Attiva il Controllo Qualità):** work in progress.

**Recalculate transport (Ricalcola trasporto):** if active, it calculates the weight and volume from the item registry values on the document, automatically setting the transport value. If not active, the transport cost of the DDT must be calculated manually as it will not be proposed.

**Def U.M. volume (Def U.M. volume):** indicates the default unit of measure for volume when calculating the transport of the DDT.

**Def. U.M. weights (Def. U.M. pesi):** indicates the default unit of measure for weight when calculating the transport of the DDT.

### Loading

**Create registration with the document date (Crea registrazione con la data del documento):** if active, the warehouse registration is made with the same date as the DDT. If not active, the registration is done with the *Load date* indicated in the DDT header, if present, otherwise with the *Warehouse posting date* indicated in the procedure of [Registering Purchase DDT in warehouse](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). If registration is done from within the DDT using the button *Automatic load on warehouse* and the *Loading Date* is not entered, today’s date will be used.

**Priority warehouse and loading reason (Priorità magazzino e causale di carico):** if active, at the time of DDT registration in the warehouse, the values set in the following fields: **Warehouse** and **Warehouse template** will be used. If the flag is not active, the warehouse and loading reason are read from the lines of the DDT. If they are not present on the DDT lines, it will not be possible to perform automatic loading from within the purchase slip, but the registration of the DDT can be done through a specific procedure (see [Registering Purchase DDT in warehouse](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)) by selecting in the *Parameters* tab the flag "*Accept the following data as warehouse and reason:*" and indicating *Warehouse* and *Reason* to use.

**Automatic loading/unloading (Carico/Scarico automatico):** if active, upon activating the *Controlled* flag in the document header, a message will be displayed reminding that the automatic loading/unloading parameter is active and asking if you want to proceed. Pressing "*yes*" will load the DDT to the warehouse; otherwise, it will be possible to load it later by pressing the *Automatic loading in the warehouse* button located in the ribbon bar.

**Notice of fictitious items (Avviso articoli fittizi):** if active, during the loading of the DDT, it checks if there are any fictitious items. If present, a message will be given for completing the procedure; if the answer is affirmative, the entire DDT will be loaded (except for the fictitious items, obviously). If the answer is negative, the DDT will not be loaded. A fictitious item can be without a first-level bill of materials if in the MRP parameters it is declared with a procurement type of purchase; otherwise, the loading registration will give an error message if there are any fictitious items in the document to be loaded.

### Analytical

In this tab, the priority for retrieving the cost center (CdC) or profit center (CdP) in the DDT line is specified.

It is possible to modify the priorities using the following buttons in the ribbon bar:

> **Move Up**       
> **Move Down**.

*Default values (Valori di default)*: the CDC or CDP is retrieved from the invoiced type if present. For further details, refer to the table [Invoiced Type for Purchases (Tipo Fatturato Acquisti)](/docs/configurations/tables/purchase/purchase-invoices-type). If it is not present in the invoiced type, the system will look for it in the *Supplier Registry (Anagrafica fornitore)*. If not present, it will be searched in the *Item registry* and subsequently at the *Warehouse* level.

**Recalculation (Ricalcolo):** if active, it recalculates cost/profit centers according to the chosen priority.

**Evaluate priority on each dimension (Valuta la priorità su ogni dimensione):** if active, this flag allows evaluating each priority entered at the top to see if there are further dimensions not yet assigned. For example, suppose we have in the Item Registry the cost center of the dimension *Business unit* and in the Purchases Invoiced Type the dimension *Management*. If the flag is not active, the system only evaluates the CdC present in the Item Registry; if the flag is active, after loading the CdC from the Item Registry, the system also evaluates the dimension in the Purchases Invoiced Type (in our example, the dimension *Management*) and if it is different from the ones that have already been managed (*Business Unit*), it loads the center and continues with the verification of the other priorities.