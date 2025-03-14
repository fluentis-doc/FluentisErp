---
title: CRM Parameters 
sidebar_position: 1
---

The CRM parameters can be found under **CRM Parameters**, and through the setup of these parameters, certain functionalities of the module are defined, particularly concerning the automatic status change of the activity following specific operations.

- **WON probability progress**: this field refers to the table [Probability of Success](/docs/configurations/tables/crm/opportunities/probability-progress) and allows defining the % of probability of success that Fluentis should set on the opportunity when moving the opportunity to the won opportunities section in the Opportunity Progress Kan Ban board;

- **LOST probability progress**: this field refers to the table [Probability of Success](/docs/configurations/tables/crm/opportunities/probability-progress) and allows defining the % of probability of success that Fluentis should set on the opportunity when moving the opportunity to the lost opportunities section in the Opportunity Progress Kan Ban board;

- **Max emails number**: this field must define the maximum number of emails that Fluentis can send when sending a Newsletter;

- **Email sending interval (seconds)**: this field must set the seconds that Fluentis should wait between sending one email and another when sending a Newsletter.

- **Days measurement unit**: it is necessary to indicate the unit of measure that Fluentis must use for days.

- **Measurement unit for hours**: it is necessary to indicate the default unit of measure that Fluentis must use for hours.

- **Ticket references**: in this field, it is possible to specify the coding to use for the Ticket Reference to be reported in the Offer linked to the ticket and created through the *Creating offers from ticket* procedure (present in the Tickets module).

- **Search CRM contact also as parent contact**: if enabled, it defaults to enabling the same flag in all search screens where applicable: Offer Search, Contact Search, Visit Report Search, offer and visit report tabs in the CRM contact registry.

- **Create CRM contact from new customer registry**: if enabled, when entering a new Customer account within a contact, it automatically generates a new CRM contact if not already present.