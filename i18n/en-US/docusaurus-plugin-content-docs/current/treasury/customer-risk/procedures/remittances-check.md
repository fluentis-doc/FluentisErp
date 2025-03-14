---
title: Remittances Control
sidebar_position: 1
---
The form can be found in Treasury > Customer Risk > Procedures > Remittances Control (Controllo rimesse).

The interface presents a detailed view of the payment records recorded for the customer, within the specified date ranges and filters entered in the header. 

## How to Check the Remittance Situation of a Customer

1. Expand, if necessary, the filter section to enter (mandatory) the account of the customer to be verified.
2. Use the other filters to search for the relevant payment records.
3. Press the Search button and read the results in the central grid and the results, for the average concerning the customer as a whole, in the lower area of the form.

## How to Read and Interpret the Results

- The payment records for the selected customer within the set date range are displayed in order of date from the first to the last. In the form, they are represented from the most recent at the top to the least recent at the bottom and the **Expiry date** present in the open transaction that has been collected is indicated.

- The calculation is of **scalar** type, so the rows are compared to calculate the differences in days from the first to the subsequent rows.  **Numbers (Numeri)** are calculated, which is the amount multiplied by the number of days (as occurs in scalar statements sent by banks related to current accounts).

- A **Bank Currency (Valuta banca)** is also considered, meaning that in the accounting movement of collection, some bank value days may have been added between the payment order from the customer and the actual collection. These value days are visible in the accounting entry by activating the appropriate flag *Bank days* in the [accounting reason (causale contabile)](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) and can be proposed through [the registry (anagrafica)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days) (Tab *Bank days*) of the collecting bank, or manually specified in the entry.

If this value date is not filled in, by default, the accounting date of the collection is considered, and therefore the number of **Currency Days (Giorni Valuta)** added with respect to the date of collection will be zero.

Thus, the **Collection Currency (Valuta incasso)** field will be equal to the registration date, and the **Currency Days (Giorni Valuta)** and **Currency Numbers (Numeri valuta)** fields will be equal to zero.

- The calculation involves counting the **Due Days (Giorni Scadenza)** as a comparison between the first row (where the calculation will always be zero) and the subsequent rows. For example, if the first due date fell on February 9 and the next on February 20, the due days with respect to the second row will be 11. 

- The calculation of **Due Numbers (Numeri Scadenza)** is given by the product of the Due Days by the amount of the remittance.


<details>

  <summary>**The other fields in the detail grid**: Click to expand!</summary>
 
 - **Date / Registration Number (Data / Numero Registrazione)**: Taken from the header of the payment record of the customer transaction
 - **Template description**: accounting reason used in the collection entry
 - **Document type**: taken from the open transaction that was collected and usually refers to the type of invoice
 - **Document Number**: referred to the invoice that opened the collected transaction
 - **Document date**: referred to the invoice that opened the collected transaction
 - **Currency**: referred to the collected transaction
 - **Original Amount in Currency (Importo originario in divisa)**: referred to the collected transaction, if different from the company currency (i.e., different from Euro)
 - **Original Amount in Company Currency (Importo originario in divisa della Società)**: referred to the collected transaction, in the company currency (i.e., usually Euro)
 - **Residual Amount in Currency / in Company Currency (Importo residuo in divisa / in divisa della società)**: referred to the transaction, in case it is partially collected, (value expressed in the original currency if different from the company currency, i.e., different from Euro, or in Euro)
 - **Remittance Amount in Currency (Importo rimessa in divisa)**: amount of the collection referred to the collected transaction, if different from the company currency (i.e., different from Euro, or in Euro)

</details>


### In the lower part of the form, the final calculation of the <u>average values</u> is performed.

The average data calculated by the form are:

- **Average value date of collection (Data valuta media di incasso)**: calculated by summing all the amounts of the remittances (i.e., collections) visible in the form and summing all the *Currency Numbers (numeri Valuta)* visible in the form and making the ratio between the two sums (Sum of Currency Numbers / Sum of Remittance Amounts) to find the **average number of currency days (numero di giorni medi valuta).** Finally, adding the average number of currency days to the first collection value date (i.e., the least recent).

- **Average due date (Data scadenza media)**: calculated by summing all the amounts of the remittances (i.e., collections) visible in the form and summing all the *Due Numbers (numeri Scadenza)* visible in the form and making the ratio between the two sums (Sum of Due Numbers / Sum of Remittance Amounts) to find the **average number of due days (numero di giorni medi scadenza).** Finally, adding the average number of due days to the first due date (i.e., the least recent).

:::note[Note]
In the case of effects, the currency date is set to be equal to the due date, regardless of the accounting date of the effect.
:::

<details>

  <summary>**The calculation of the average in practice**: Click to expand!</summary>
 
 From the ratio between the sum of amounts and the sum of days*amounts, an average number of days is obtained to be added to the first date to find the average date.

</details>


- **Variance**, or the difference between the average due date and the average collection value date, which represents the average delay in collection between due date and value date: this number of days can be stored, through the **Update Days of Delay** button, in the customer registry in the *Average Delay Days (Giorni medi ritardo)* field, a field used in cash flow simulations to obtain the expected due date of the financial flow.

<details>

  <summary>**The other calculated fields in the summary area**: Click to expand!</summary>
 
 - **Total initial amount currency**: Sum of the amounts in currency of the collected transactions
 - **Total Original Amount in Euro (Totale Importo Originario in Euro)**: Equivalent in euros of the previous field
 - **Total reminder amount currency**: sum of the residual values of the collected transactions, if the transactions have been fully collected the value will be zero, otherwise, it will be useful for partially collected transactions
 - **Total reminder amount euro**: Equivalent in euros of the previous field
 - **Total remittance currency**: sum of the value in currency of the collections made
 - **Total remittance euro**: Equivalent in euros of the previous field
 - **Total number valuta**: sum of the *Currency Numbers (Numeri Valuta)* field of the grid rows, used in the final average calculations
 - **Total numero maturity**: sum of the *Due Numbers (Numeri Scadenza)* field of the grid rows, used in the final average calculations

</details>

The interface includes a printout of the calculation details.