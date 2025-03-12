---
title: Generality
sidebar_position: 1
---

:::important What it is for (A cosa serve)
The Generality tab contains the main logistical information of the items, such as the code, description, unit of measure, and other optional classifications, including merchandise category and nature of the item.     
This tab allows for defining additional details useful for the management and traceability of the items within business processes, facilitating organization and reporting.
:::

Within this tab, the following general data can be defined:

**Insert date**: a field that is automatically filled in upon the creation of the item, indicating the creation date of the item;

**VAT rate**: a combo used to select and input the VAT rate related to that item; this field takes priority over the VAT rate assigned to the customer/supplier in the contact registry;

**VAT on agricultural purchases / VAT on agricultural sales (IVA acquisti agricoli / IVA vendite agricole)**: which have a different management method;

**Characteristic and Model (Caratteristica e Modello)**: two optional fields that provide further definition of the item based on a series of groupings established within the company’s product management; 

**Purchase turnover**: combo linked to a type of *Sales Turnover* defined in the chart of accounts for the accounting of purchase invoices;

**Part type**: an optional table where an additional description of the item can be provided based on other internal groupings;

**Nomenclature**: in these fields, the nomenclature (i.e., the customs code of the item) is selected through help, which is useful for Intrastat purposes for the declaration of goods for import or export, as well as for statistical purposes for the trade of items within the EU;

**Days for perishable goods payment (Giorni di pagamento merce deperibile)**: is linked to Article 62; for perishable goods, the invoice must be created and paid within a deadline of 30/60 days based on the type of item. In this case, this control is performed on both the item and the type of payment entered so that invoices cannot be issued with a start date greater than that indicated;
	
**Last edit date**: indicates the date of the last modification of the item;

**Fiscal category**: through this combo, the tax category to which the item belongs can be selected, which is necessary for inventory tax prints to group inventories by tax category;

**Product category**: a statistical data similar to the characteristic, used in certain specific reports; 

**Sales Turnover**: like the purchases turnover, this combo is used for the management of revenue subaccounts for the sale of the item; 

**Item nature**: a field used to attribute specific characteristics to the item for use in certain particular procedures. In the combo, we find a list of various natures that can be assigned to the item (click for the [glossary](/docs/guide/common/glossary/glossary-intro#item-nature));

> **Equipment/Tool (Attrezzatura/Utensile)**: items of this nature are associated with the registry of measuring instruments and equipment present in the processing cycles.
> **Machine/Plant (Macchina/Impianto)**: this nature is associated with the registry of machines;
> **Article family (Famiglia articoli)**: which defines the item as a family of articles/products of sales forecasts;
> **Packing**: used for managing returnable packaging for accounting (to understand how many packages I have at home and how many I have given to the customer or supplier, and thus understand how many they have to return to me);
> **Services**: for managing post-sale interventions;
> **Loan for use/Plant component (Prestito d’uso/Componente impianto)**: used for maintenance management;

Finally, we find a series of flags:	

**Quality control**: if this flag is active, it triggers the quality control process, meaning that the item will enter the quality flow;

**Phantom**: if active, this flag serves to declare that the item should not be moved;

**Fiscal interest**: if active, this flag serves to report the item in the warehouse's tax prints;

**ABC:** for ABC, in inventory management for logistics purposes, a method of categorizing inventory is understood, which involves dividing items into three classes, labeled A, B, and C, where A contains the most essential items and C the least important items. This method is useful to focus attention on the few essential products rather than on many products of little importance. If this method is used by the company, this field will contain the letter that defines the category to which the item belongs;

**In exhaustion**: if active, this flag indicates that the item is in depletion.         
The conditions to receive the alert that the item is about to run out, in documents, for example in Customer Orders, are:
- in the [Customer Order parameters](/docs/configurations/parameters/sales/sales-orders-parameters), the flag "Check items in depletion" must be set;             
- in the item registry, the flag "In depletion" must be set, and additionally, the "Depletion date" must be less than or equal to the order date;          

**Date in exhaustion**: indicates since when the item has been placed in depletion;

**Item without availability calculation (Articolo senza calcolo della disponibilità)**: if the flag is active, the system will not consider the availability to use the item;

**Archived**: if active, the item will no longer appear in the list of items that can be used, as it has become obsolete;

**Copyright (Diritti d'autore)**: if active, indicates that the item is subject to copyright/royalties and will be considered in the [Royalty Management](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/).       

For more information on how to enter and select data within forms, please refer to the article [Data entry and selection]( /docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).