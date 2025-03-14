---
title: Summaries (Riepiloghi)
sidebar_position: 5
---

In the Summaries, the main information of the entire document is presented.

## Final Discounts (Sconti finali)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Expenses/Discounts/Final Increases (Spese/Sconti/Maggiorazioni finali)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

## Other Fields (Altri campi)

**Volume**: the cumulative volume is proposed, resulting from the sum of the volumes of the items (the value is taken from *Item Registry > Weights/Dimensions tab (Anagrafica articolo > tab Pesi/Dimensioni)*), when the unit of measure of the item volumes corresponds to that entered in the invoice parameters. Only items with this field filled will be taken into account;  
**Net weight**: the cumulative net weight is proposed, resulting from the sum of the weights of the items (the value is taken from *Item Registry > Weights/Dimensions tab (Anagrafica articolo > tab Pesi/Dimensioni)*), when the unit of measure of the item weights corresponds to that entered in the invoice parameters. Only items with this field filled will be taken into account;  
**Gross Weight**: the cumulative gross weight is proposed, resulting from the sum of the weights of the items (the value is taken from *Item Registry > Weights/Dimensions tab (Anagrafica articolo > tab Pesi/Dimensioni)*), when the unit of measure of the item weights corresponds to that entered in the invoice parameters. Only items with this field filled will be taken into account;  
**Packages**: the number of packages is proposed, based on the data entered in the *Item Registry > Weights/Dimensions tab (Anagrafica articolo > tab Pesi/Dimensioni)*, in the fields *Items present in one package* or *Packages for item*. Only items with this field filled will be taken into account.  

## Transport (Trasporto)

The *Transport made by* present in *Contact Registry > Delivery tab (Anagrafica del contatto > tab [Consegna](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery))* (radio button: Sender/Recipient/Carrier) is proposed automatically, but the data can be modified.

## Document Totals (Totali documento)

**Items gross amount**: represents the sum of the values of all items;  
**On-account**: represents the value of any deposit received for the document;  
**Amount giveaway**: represents the amount of gift-type items entered in the *Items tab (tab Articoli)*;  
**Total discounts applied**: represents the total value of discounts applied to the items, but excluding final discounts;  
**Items net amount**: *Items gross amount* – *Total discounts applied*;  
**Total final discounts**: represents the value of final discounts expressed as a percentage of the gross amount of items;  
**Net amount of final discounts (Importo netto sconti finali)**: *Items net amount* - *Total final discounts*;  
**Collection charges**: represents the sum of the collection fees entered in the *Expenses grid (griglia delle Spese)*;  
**Stamp charges**: represents the sum of the stamp duty fees entered in the *Expenses grid (griglia delle Spese)*;   
**Origin amount**: *Items net amount* – *Final discounts* + *Total undocumented expenses (Totale spese non documentati)* + *Total documented expenses (Totale spese documentati)*;  
**VAT**: represents the sum of the values contained in the VAT summaries;  
**Total**: *Origin amount* + *VAT*.