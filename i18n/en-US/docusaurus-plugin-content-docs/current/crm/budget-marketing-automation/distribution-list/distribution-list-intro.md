---
title: Distribution Lists
sidebar_position: 1
---

The **Distribution Lists<!-- Liste di distribuzione -->** procedure allows you to create lists of:

- CRM contacts
- CRM contacts included in a campaign
- CRM contacts included in an opportunity
- ERP contacts<!-- contatti ERP --> (suppliers<!-- fornitori -->) included in a purchase request for quotation<!-- richiesta di offerta di acquisto -->
- ERP contacts<!-- contatti ERP --> (suppliers<!-- fornitori -->) included in a purchase order<!-- ordine di acquisto -->
- ERP contacts<!-- contatti ERP --> (customers<!-- clienti -->) included in a sales offer<!-- offerta di vendita -->
- ERP contacts<!-- contatti ERP --> (customers<!-- clienti -->) included in a sales order<!-- ordine di vendita -->
- ERP contacts<!-- contatti ERP --> (customers<!-- clienti -->) included in a sales delivery note<!-- ddt di vendita -->
- ERP contacts<!-- contatti ERP --> (customers<!-- clienti -->) included in a sales invoice<!-- fattura di vendita -->
- ERP contacts<!-- contatti ERP --> (customers<!-- clienti -->) included in a service intervention<!-- intervento -->

to whom the **Newsletters<!-- Newsletter -->** must be sent.

For CRM contacts, the address search is structured as follows: 
- generic email of the contact, only if the "newsletter" flag is also enabled in the "email scope<!-- ambito email -->" section.
- email of the contact's references, only if the "newsletter" entry is also present in the "email scope<!-- ambito email -->" tab.

For ERP contacts<!-- contatti ERP --> (customers<!-- clienti --> and suppliers<!-- fornitori -->), the address search is structured as follows: 
- register<!-- anagrafica -->, alternative addresses<!-- indirizzi alternativi -->, all address types enabled for the relevant document (order<!-- ordine -->, delivery note<!-- ddt -->, invoice<!-- fattura -->, etc.) will be considered.

Distribution lists<!-- liste di distribuzione --> are divided into two types:
-	**Static Lists<!-- Liste Statiche -->**: require the user to manually add newly created CRM contacts to the list;
-	**Dynamic Lists<!-- Liste Dinamiche -->**: calculate in real time, based on the filters set on the SQL query associated with the list, the contacts that should be included at the time of sending the Newsletter<!-- Newsletter -->.