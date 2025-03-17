---
title: Currency Exchange
sidebar_position: 4
---

The Currency Exchange table, common to all companies in the same database, allows for the daily setting of official exchange rates to be used in various procedures of the management software: in particular, it should be noted that the program will retrieve from this table the last valid exchange rate backwards from the date of the document/registration being entered.

:::note Note
The table can be manually filled by directly entering the exchange rate related to the currency and the day set manually, or an automatic update can be performed by downloading the exchange rates via the appropriate button located in the ribbon bar **Download exchange rates***.

 Pressing the button will bring up a **popup** that requests the input of **dates From / To** within which to search for exchange rates and the **Automatic insertion flag** that directly populates the table (which is recommended to keep active).

**WARNING:** only the exchange rates related to the currencies with the Download rates flag in the table [**Currency**](/docs/configurations/tables/general-settings/currencies) will be downloaded.
:::


##### Specific Fields 

**Exchange**: normally the company's currency should be entered (euro).

**Description**: description of the currency.

**On the**: reference currency.

**Description**: description of the reference currency.

**Currency date**: date of reference for the exchange rate.

**Exchange value**: this is the 'certain for uncertain' exchange rate, actually used by the program in calculations of counter values. In the case of the euro, it is the inverse value of the official exchange rate of the day.

**Direct value**: this is the 'certain for uncertain' exchange rate. In the case of the euro, it is the value of the official exchange rate of the day.