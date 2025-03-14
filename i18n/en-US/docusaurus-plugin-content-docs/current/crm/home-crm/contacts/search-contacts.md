---
title: CRM Contacts Search (Ricerca Contatti CRM)
sidebar_position: 1
---

The Contacts module allows the operator to manage the CRM contact registry. It is located within the CRM area and enables the management of activities related to the contact, the operational workflow for managing the contact, their references, the agents connected to them, and the offers presented to them. CRM contacts have their own registry, different from that of Fluentis contacts, but can be linked when a CRM contact becomes a customer in every respect.

The **Contacts Search (Ricerca Contatti)** procedure has been designed to allow users to easily search for already entered CRM contacts, with the aim of viewing, modifying, and possibly deleting them. 
With the help of filters, it is possible to view: a single contact (**First Name**), multiple contacts belonging to the same type ([**Contact Type**](/docs/configurations/tables/crm/contacts/contact-type/)), or multiple contacts belonging to the same commercial category ([**Commercial category**](/docs/configurations/tables/crm/contacts/commercial-category/)). It is also possible to filter by the **Main Agent** indicated on the Contact, to which the filters related to **Competitors** and **Usage Sector (Settore d’Uso)** are also linked, or by other filters.

By clicking **Search** in the ribbon bar, the contacts imported or manually entered can be viewed, along with their respective characteristics. The icon on the left representing a person is gray if the subject is still a contact but will turn green when they become a customer. At the top, it is possible to filter the search according to preferred characteristics. By clicking on the **+** to the left of the row, additional information about the contact can be displayed. 
To open the details of a contact, simply select it and double-click with the mouse.       

On the right side of the grid, there are two labels:
- **Map (Map)**: this function allows viewing the Contacts on the map. For viewing CRM Contacts on the Map, it first checks for the presence of an Address, then the presence of Latitude and Longitude. In the first case, clicking on the pin on the Map will display the Company Name and Address; in the second case, only the Company Name will be shown.     
- **Funnel by Contact Quality**: in this section, the graphical trend of contact management is displayed based on [Quality (Qualità)](/docs/configurations/tables/crm/contacts/contact-quality).

The buttons available in the toolbar are:       
**Convert To Customer**: with this button, it is possible to convert a CRM contact into a [Customer (Cliente)](/docs/erp-home/registers/contacts/create-new-contact/general); the data entered in the contact will be copied to the new registry; the button is active for [Contact Types (Tipi contatto)](/docs/configurations/tables/crm/contacts/contact-type) that do not have the *Client* flag active.