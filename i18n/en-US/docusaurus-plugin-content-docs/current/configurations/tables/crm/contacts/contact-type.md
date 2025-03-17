---
title: Contact Type 
sidebar_position: 1
---

It is a table that allows the definition of **Contact Types** regarding CRM contacts, so that they can be categorized. It consists of a filter section where you can search by the code or description of the type, and a grid where all the entered contact types will be listed. Also within this form, it is possible to add new contact types to the grid by clicking on the button ![](/img/neutral/common/new.png) New: in this way, a new row will be added to the grid where you will enter the code and description of the new type. For each contact, it is also possible to define:
- The type, by selecting from the grid an option among Contact, Prospect, Lead, Opportunity, Customer, Supplier;
- The tabs that should be displayed for that type of contact among: Activities, References, Addresses, Notes, Document Management, Visit Reports, Commercial Category, Area, Agents, Newsletter, Payments, Offers, Customer Orders, Sales DDT, Interventions, Extra Data, Opening Hours, Competitors, Phone Calls, Marketing Campaigns, Price Lists.

For each type of contact, it is also possible to define 

## Contact Type Role

that is, for individual Fluentis users (or groups of users defined by Roles), it is possible to define which tabs can be displayed. For each Contact Type Role, it is necessary to define:
**Creation date**: this is the creation date of the Contact Type Role;
**Role**: refers to the user roles table of Fluentis;
**User**: refers to the user table of Fluentis.
**Tabs enabled for Role/Operator**: which tabs can be viewed and managed among those present, such as: Activities, Address, Agents, Commercial Category, etc.

## Extra Data

It is also possible to define [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata/) for each contact type, which must be proposed for contacts that have that type (for further information regarding Extra Data, refer to the specific section of this guide).

## Contact Pipeline 

List of available states for the contact type, configured by the user. If the contact has an associated workflow, and the state of the workflow corresponds to one of the available states for the Contact Type, the "Contact Pipeline" field in the contact record will be automatically updated. Therefore, with each change in the workflow state, if a match is found, the "Contact Pipeline" field will be automatically updated. This way, the workflow and the Contact Pipeline field in the contact record will always be aligned.