---
title: Import maturity values
sidebar_position: 2
---

The Excel sheet (template) for importing open items in the Administration module needs to be filled out in both sections:

## **Bizlink parameters:**

**Section visible by double-clicking on one of the combo fields, or requested by the software before confirming and executing the import**

Fields to fill in (not automatically populated)

- In payment: flag indicating whether the item is already included in a supplier payment list. Generally set to 0 (FALSE) for regular open items.
- Item status: corresponds to the statuses present in the interface, generally using Open, or partially open (residual different from zero) or overdue (a subset of open with an expiration date already passed)


## **Data:**

CUSTOMER / SUPPLIER
    
- Account / Detail account: enter an account and detail account code for customers or suppliers that already exists in Fluentis (MANDATORY)

DOCUMENT REFERENCES
- Code type: e.g., FA for purchase invoice, FV for sales invoice. Use the coding already present in Fluentis and already populated by FastStart. In case of issues or absence of the desired types, check the SQL table Fluentis.SH_DocumentTypes regarding the field (not visible in the interface) SHDT_Country_SHCNTR_Id by setting it with the ID corresponding to the IT code from the Fluentis.SH_Countries table.
- Invoice number / date: optional; in the case of a generic item, they can be omitted by indicating the document type as GEN.

PAYMENT DATA
- Payment type: must already be present in Fluentis (refer to the codes of existing payment types) - MANDATORY. WARNING: in the Payment Types table (also from the interface), ensure that the Country field is filled with the IT code to enable the desired types and allow for correct importation (invalid types that are not enabled can be guessed as they are not visible when using the combo box with a double click in the Excel trace).
- Expiration: it is the expiration date of the item - MANDATORY
- Account / Detail account bank: this refers to the bank associated with the item (optional).

ITEM DATA
- Residual (Debit / Credit): the amount of the open item, if the item is not partially paid it corresponds to the countervalue. 
DATA EXPRESSED IN THE CURRENCY ENTERED IN THE APPROPRIATE COLUMN. WARNING, fill in either the Debit or Credit section (depending on the sign of the item) and always insert the value 0.00 in the adjacent column. (if I populate Debit e.g., 100.00, I put 0.00 in Credit) MANDATORY
- Countervalue (Debit / Credit): this is the value of the item in the company's accounting currency (e.g., Euro). WARNING, fill in either the Debit or Credit section (depending on the sign of the item) and always insert the value 0.00 in the adjacent column. (if I populate Debit e.g. 100.00, I put 0.00 in Credit). MANDATORY
- Currency: fill in with a code already present in Fluentis (e.g., Eur for Euro, Usd for dollar) MANDATORY
- Non-payable: flag indicating whether the item is blocked and non-payable (1) or free (0). MANDATORY
- Block notes: optional notes field for the item.

REGISTRATION DATA
Date and reference number of the accounting entry linked to the item.
Optional section.

WARNING: if filled, the registration must already be present in Fluentis and will be searched for by the import; if not found, the import will return an error.

---

Check that in the currencies (currencies table) the isocode is filled everywhere (sometimes it is missing for the euro).


**WARNING**: ensure that the numerator of the items includes also the previous years if the Excel sheet contains items with due dates from previous years; otherwise, it will result in an error. This is because, typically, a new DB has a numerator that starts from the current year.