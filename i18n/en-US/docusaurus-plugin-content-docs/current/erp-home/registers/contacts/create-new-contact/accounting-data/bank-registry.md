---
title: Anagrafiche banche
sidebar_position: 1
---

## **1. References**

The bank registry presents in the **References** tab the fundamental data related to the bank account to indicate:

**ISO**: indicate the first 4 characters of the IBAN, then 2 characters for the country code (e.g., IT) + 2 for the institution code;

The **ABI**, **CAB** codes, the **C/C** number (for Italian banks, you must indicate 5 characters for abi and cab - including the leading zero - and all 12 characters of the Italian current account), the international **Swift** code, the **CIN**;

**Currency**: specify the currency in which the bank account is expressed;

It is possible to enter some useful data for the interaction with **DocFinance®** (external treasury program to the system):

**R.B.N.:** represents the type of relationship (e.g., Current account, currency account...);

**Doc Finance Bank**: the name of the bank to be used for bank flow analysis and other functions permitted by DocFinance;

**Bank code**: any free bank code;

**SIA**: code for sending Italian telematic files, e.g., for Bank Receipts (if not indicated, the default one entered in the Company table is used, Home>Tables>General);

**Presentation bank** allows linking the bank registry to the related code of the generic [**supporting bank**](/docs/configurations/tables/general-settings/reference-bank). This can be useful for automatically channeling financial movements of debtors and evaluating them in cash flow analyses.

The section related to *Electronic invoicing* is currently not in use.

## **2. Detail**

In the first section **Commissions amount***, the following can be indicated: 

**By operation**: used for the crediting of effects  
**For maximum overdraft** (not used automatically), 
**Various** (not used automatically),
**For unpaid**: Used as expense recovery and accounting as a cost in the default creation process, and entered in the header of the new default in the appropriate field.
**Invoice Advance** used to automatically insert a commission in the [Advances & Collections](/docs/treasury/advance/advances-collections) module.

In the grids **Active**/**Passive**, there are the brackets of active/passive interest rates to be applied.

**Date**: entry into force of the bracket;

**Bracket**: value up to which the rate is valid;

**Rate**: percentage value;

**Rate Code**: combo box that allows the selection of types entered in the linked table *Type bank rate* (*Configuration > Tables > General settings > Bank Rate Type*). The table allows the coding of types of bank rates and defines whether they are valid for active or passive interest.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail/image04.png)

#### Specific buttons    
> **Delete Active**: to delete the selected active rates.  
> **Delete Passive**: to delete the selected passive rates. 

## **3. Credit line**

In this tab, the Credit line for bank effect presentations are indicated, distinctly for the types "**Subject to collection**," "**For discount**," and for the **Advance** on invoices (selecting the **Differentiated** mode) or a single global credit line (selecting the **Global** mode).

The value of the granted credit line is entered by the user based on the existing banking conditions, while the value of the used credit line, and therefore the remainder, will be automatically updated by Fluentis based on the effect presentation manifests related to the bank of the registry in use and managed in the *Treasury* module.

#### Specific button  
> **Refresh**: to update the values displayed in the tab.

## **4. Cheques**

This tab is a manual registry where details of check matrices and references for each issued check are indicated.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/cheques/image01.png)

#### Specific buttons  
> **Delete matrix**: to delete the selected matrix.  
> **Delete matrix detail**: to delete the details of the selected checks.

## **5. Bank days**

In this form, you can associate the currency days with the related accounting reasons, in order to automate the calculation of the bank value date in accounting movements (if the accounting reasons themselves involve the management of bank days).

The **Working** option requires assessing whether the day is a working day or a holiday (also taking into account the Holiday table defined for the company in Home>Utilities>Annual Holidays).

:::note Note
The selected reason must be enabled to display the data related to the Bank value date.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image02.png)

In this way, the data can be viewed within the accounting entry that uses the reason in question and refers to the bank that has the active setting.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image03.png)

#### Specific buttons    
> **New**: to set the cursor for entering a new detail of days.  
> **Cancel**: to delete the details of selected bank days.