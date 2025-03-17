---
title: Bills Creation and Management
sidebar_position: 5
---

The form can be found at **Treasury > Bills > Create Bill** and allows for the *manual* creation and management, modification/viewing of the bill.

## How to Create a New Bill

:::tip[Attention]
We are about to outline the steps for the ***manual*** creation of a bill. However, **this method is rarely used. It is recommended to use the automated procedures:**

[**Bills from Maturity Value Issue**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)

[**Bills from Invoices Issue**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)
:::

From this mask:

1. Select the **Bill type**: the program will proceed to assign a **Number** according to the numerator linked to the type of bill and the **Year**, which it proposes as the year of the system date.
 
2. Fill in the **Debtor** field (with the accounting account of the bill's addressee) and **Due date** field (with the due date of the bill).

3. Save the bill header.

4. Fill in the **Currency amount** and **Bill amount** manually or manage automatically based on the selected mat. values/maturities from the **references mat. values/maturities** tabs. The stamp duty amount is in an unused field. In the mat. values or maturities reference tabs, you can use the **Insert maturity values or Insert maturities** commands to search for and insert mat. values/maturities into the bill.

The **Currency date** is the date for the exchange in the case of bills in foreign currency. It is proposed to be equal to the bill date.

The mandatory elements to indicate are the due date, split, and exchange rate, the debtor customer, and the location (filled in based on the registry linked to the customer).

The **Agent** is a simple reference field for the main agent of the original invoice.

The **Bill status** is proposed as *Issued* and will be updated automatically based on the operations performed for the bill.

The **Printed** flag is not managed, while the *Accounted* and *Credited* statuses depend on the procedures for accounting bills and credits performed.

The **References** field is a free notes field, which is recorded in the file as a reference for the transaction.

### The Presentation Tab 

This tab presents two sections:

**Bank**, where the details of the supporting bank are reported such as **ABI/CAB** (mandatory for entering the bill in a presentation list) along with *current account* (IBAN and SWIFT) and *CIN*, which are only necessary in case of RID bills.

**Presentation data**  
This section reports the details of the list with which it was presented to the bank (for example, for collection or for safe custody).

### The Reference Maturities Tab

In this section, you can view the references of the original invoice (in case of using the *acquisition of bills from maturities* procedure) or manually add due dates through the *Insert maturities* button. In this case, it is also possible to enter due dates not linked to payment types to be managed with bills (e.g., *Cash order*), as well as due dates linked to credit notes.

### The Maturity Values References Tab 

In this section, you can view the references of the original parties (in case of acquisition of bills from parties) or manually add parties through the *Insert maturity values* button.

In this case, it is also possible to enter parties not linked to payment types to be managed with bills (e.g., *Cash order*), as well as parties linked to credit notes.

### The Other Tab 

In this section, you can store references for endorser and guarantors.