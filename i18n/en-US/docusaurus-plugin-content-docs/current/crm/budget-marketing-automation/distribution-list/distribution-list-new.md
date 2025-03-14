---
title: New Distribution List (Nuova Lista di Distribuzione)
sidebar_position: 3
---

The procedure for creating a new **Distribution List** allows you to define the characteristics of the list that will later be used in the sending procedure for [Newsletters](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), as well as to define which **CRM contacts** will be part of that list. To create a new list, you need to click on the button ![](/img/neutral/common/new.png) New from the distribution list search mask.

The form is composed of two sections.

The upper section allows you to define the following information:

**First Name**: corresponds to the identification code of the distribution list;

**Creation date**: is the date when the list was created;

**Note**: alphanumeric field that allows you to insert free notes;

**Author**: indicates the user who generated the list;

**Type**: allows you to define the type of distribution list as either **Static (Statica)** or **Dynamic (Dinamica)**.


The lower form differs depending on whether the list is Static or Dynamic.

## ***STATIC LIST (LISTA STATICA)***

The section is divided into 2 tabs.

**Assigned Tab (Tab Assegnato)**

In the Assigned tab, the subjects that have already been assigned to the distribution list are shown.

![](/img/it-it/applications/crm/distribution-list/assigned.png)

**Unassigned Tab (Tab Non Assegnato)**

In the Unassigned tab, the contacts that have not yet been assigned to the list in question are displayed. The tab is divided into 2 sections. 
The first section is a Filter, where you can set a series of filters regarding the contacts to extract.

![](/img/it-it/applications/crm/distribution-list/not-assigned.png)

The second section, the results grid, shows the subjects extracted based on the filters set previously after pressing the Search button ![](/img/neutral/common/search.png). The Assign button ![](/img/neutral/common/assign-row.png) moves the contact from the **Unassigned** tab to the **Assigned** tab, thereby inserting the contact into the Distribution List.

**Group by contact**: allows you to group subjects (contacts and references) into a single row based on the contact they belong to.


## ***DYNAMIC LIST (LISTA DINAMICA)***

The section is divided into 2 tabs.

**Configuration Tab (Tab Configurazione)**

Initially, these 3 data points must be indicated:
**Area**: used to define the area of Fluentis from which the data should be retrieved;
**Module**: refers to the area selected previously;
**SQL Query**: the previously created SQL Query in Fluentis must be selected (for more information, refer to the Fluentis Query Studio section).
In the grid below, the properties and how they have been mapped are displayed.

![](/img/it-it/applications/crm/distribution-list/configuration.png)

**Mapping Tab (Tab Mapping)**

In this tab, the contacts processed and inserted into the distribution list based on the SQL Query indicated in the Configuration tab are displayed in real-time.

![](/img/it-it/applications/crm/distribution-list/mapping.png)