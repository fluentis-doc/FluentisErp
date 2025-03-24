---
title: Contacts Register
sidebar_position: 2
---

Through this management system, it is possible to define the address book of all subjects with which the companies defined in the database can work, both as holders of active/passive/accounting cycle documents and as simple addresses and references for alternative locations.

:::danger[Attention]
The general section defined as **Contact** only contains the general data of the subject in question, such as the business name of a company or the name of a professional or private individual, their address, tax code, VAT number, etc. 

This data constitutes a reservoir, a sort of address book, available to all the companies managed in the database.

Each company has its own chart of accounts and therefore, in order to use the record effectively in the document cycle and accounting records and define the various details of interest, **it is necessary, within each individual company involved** (thus acting after selecting the active company) to [**associate the Contact with an Account Type**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in order to initialize the record in detail by associating it with an accounting account that will identify that specific Italian customer or, for example, that specific European supplier, that agent, or that bank for accounting purposes.
:::

### Search Records

The form opens via the path **Contacts Register** and is designed to allow the user to easily search within the contact address book with the aim of viewing, modifying, canceling, or potentially deleting them or proceeding to enter a new reference, provided that they have the necessary rights for these operations.

As with all search forms, this window consists of a filter area and a results grid. Once all desired filters are set, simply click the **Search** button to view the results within the results grid.

By positioning on the row of the record that you wish to view in detail and double-clicking, a detail window will open containing the **General** information and all **Accounting data** related to that record, which will be detailed in the following articles.

*Specific Button*:  
> **Duplicate**: allows you to duplicate the selected record. The button opens a form within which you must define the basic elements of the copy: business name, nickname (i.e., the record's own code), address, postal code, municipality, and province. Once the copy is confirmed, it will automatically open in edit mode. In the copy of the record, all the detail accounts of the chart of accounts associated with the record in the active company will also be recreated, assigning a new detail account according to the sequential number of each account.

### Create Record

A **New Record** can be inserted:

- through the path **Home > Contacts > Create Contact Record**

   or

- by clicking the **New** button within the **[Contacts Register](/docs/erp-home/registers/contacts/registers-management)** form.

The **Register** form consists of two tabs:
- **[General](/docs/erp-home/registers/contacts/create-new-contact/general)** where general information about the record can be found;
- **[Accounting Data](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)** which in turn will present a series of tabs where more specific information of an administrative, commercial, and logistical nature can be entered, which will be detailed in subsequent articles.

## Summary
:::tip[Operational Flow for Records]
1. Use the *New* command to insert a *Contact* that contains general registration data
2. Write the VAT number and use the **Propose data** command to automatically fill in the general data while also checking the validity of the VAT number 
3. Associate an **Account type** and the accounting account will be created automatically, activating the details
4. Fill in the details in the various tabs, particularly the **Terms of payment** (if Customer, Supplier, or Agent) or the IBAN if it's a Bank record.
:::