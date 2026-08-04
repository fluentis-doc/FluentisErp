---
title: New Distribution List 
sidebar_position: 3
---

The procedure for creating a new **Distribution List** allows you to define the characteristics of the list that will later be used in the sending procedure for [Newsletters](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), as well as to define which **CRM contacts** or **ERP contacts** will be part of that list. To create a new list, you need to click on the button ![](/img/neutral/common/new.png) New from the distribution list search mask.

The form is composed of two sections.

The upper section allows you to define the following information:

**First Name**: corresponds to the identification code of the distribution list;

**Creation date**: is the date when the list was created;

**Note**: alphanumeric field that allows you to insert free notes;

**Author**: indicates the user who generated the list;

**Business Object<!-- Oggetto Business -->**: indicates the type of document or master data involved in the sending process. The following values are allowed:  
- CRM contacts<!-- contatti CRM -->  
- marketing campaign<!-- campagna marketing -->  
- opportunity<!-- opportunità -->  
- purchase request for quotation<!-- richiesta di offerta di acquisto -->  
- purchase order<!-- ordine di acquisto -->  
- sales offer<!-- offerta di vendita -->  
- sales order<!-- ordine di vendita -->  
- sales delivery note<!-- ddt di vendita -->  
- sales invoice<!-- fattura di vendita -->  
- project area intervention<!-- intervento area progetti -->

**Type**: allows you to define the type of distribution list as either **Static** or **Dynamic**.

The lower form differs depending on whether the list is Static or Dynamic.

### Static list<!-- Lista statica -->

The section is divided into 2 tabs.

#### Assigned

In the Assigned tab, the subjects that have already been assigned to the distribution list are shown.

#### Unassigned

In the Unassigned tab, the contacts that have not yet been assigned to the list in question are displayed. 
The tab is divided into 2 sections. 
The first section is a Filter, where you can set a series of filters regarding the contacts to extract.

The second section, the results grid<!-- griglia risultato -->, displays the entities extracted based on the filters set previously after pressing the **Search<!-- Ricerca -->** button.  
The **Assign<!-- Assegna -->** button moves the contact from the **Unassigned<!-- Non assegnato -->** tab to the **Assigned<!-- Assegnato -->** tab, thus adding the contact to the Distribution List<!-- Lista di distribuzione -->.

**Group by contact**: allows you to group subjects (contacts and references) into a single row based on the contact they belong to.


### Dynamic List<!-- Lista Dinamica -->

The section is divided into 2 tabs.

#### Configuration

Initially, these 3 data points must be indicated:
**Area**: used to define the area of Fluentis from which the data should be retrieved;
**Module**: refers to the area selected previously;
**SQL Query**: the previously created SQL Query in Fluentis must be selected (for more information, refer to the Fluentis Query Studio section).
In the grid below, the mandatory properties are shown in bold, and you must associate each with a corresponding value from the query to achieve correct mapping.<!-- Nella griglia sottostante vengono mostrate le proprietà obbligatorie in grassetto, a cui è necessario associare un valore corrispondente della query, per ottenere una mappatura corretta. --> 


#### Mapping

In this tab, the contacts processed and inserted into the distribution list based on the SQL Query indicated in the Configuration tab are displayed in real-time.
