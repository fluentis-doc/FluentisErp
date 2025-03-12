---
title: Declaration of exemption
sidebar_position: 5
---

From this form, it is possible to enter the records for the statements of intent received or issued for the reference year, or to search for and edit those already present.

Press the **New** button in the ribbon bar to enter a new record, or, after pressing the **Search** button, double-click on the desired record (or press the **Modify** button in the ribbon bar) to enter new statements of intent within the selected record.

### Record Header (Testata Registro)
The upper area of the form corresponding to the record displays the data of the record itself, while the lower area accommodates the details of each statement of intent related to the record.

**Declaration register**: name of the record that can be freely assigned;

**Type**: indicates whether the record is of type customer (statements of intent received from customers) or supplier (statements issued to suppliers based on the habitual exporter status of the company in use);

**Start Date / End Date / Year (Data inizio / Data fine / Anno)**: validity extremes of the record.


---
### VAT GROUP MANAGEMENT (GESTIONE DEL GRUPPO IVA)

:::tip Info: the VAT group
With the introduction of this regulation, the possibility was provided for companies linked by financial, economic, and organizational interests to create a single group, considered as a single taxpayer (for VAT purposes only) in relation to the tax authorities. Therefore, it will have a single VAT number. The companies that are part of the group will invoice operations to third parties with a common VAT number, the group VAT number. In contrast, the sales of goods and the services exchanged between the companies within the group will not be relevant for VAT taxable amounts. Consequently, all operations carried out by one of the entities in the group are considered as carried out by the entire group. The invoice and **other documents, INCLUDING STATEMENTS OF INTENT**, are issued by the Group representative or by the participants indicating on them, in addition to the group VAT number, also the tax code of the participating entity that carried out the operation.
:::

:::note **VAT Group FLAG (FLAG Gruppo IVA)**: 
enables the ability to enter statements of intent related to a VAT group. Its activation does not affect the entry of ordinary statements and it is always advisable to activate it.

**FIELD SET AS ACTIVE BY DEFAULT AND SHOULD NOT BE DEACTIVATED, HIDDEN IN FLUENTIS VERSIONS 2021 AND LATER**
:::


**Nomenclature Field (Campo Nomenclatura) (in the detail grid)**: this field is relevant for the management of the VAT group, it is populated by the VAT group registry entered in the customer or supplier (tax information tab) or can be manually edited to insert the reference to the VAT group registry of the customer or supplier;

---

### Details of Statements of Intent (Dettaglio dichiarazioni di intento)

**To insert statements of intent into the record, type directly in the lower grid.**

**VAT reference date**: non-mandatory field active only for customer type records, enter the date assigned by the customer in the statement of intent;

**Protocol (Prot)**: non-mandatory field active only for customer type records, enter the protocol assigned by the customer in the statement of intent;

**Our Protocol Date (Data Ns. Protocollo)**: protocol date assigned internally at the time of recording the statement of intent in the record; this date serves as a reference field for the initial validity for application in purchase/sale documents; (also used if the "identification reference" and "progressive reference" fields are populated) It is advisable to populate it anyway, even in the management of customer invoices for the management of the electronic invoice tag.

**Our Protocol (Ns. Protocollo)**: protocol assigned internally at the time of recording the statement of intent in the record (**WARNING:** NECESSARY FOR THE CORRECT VALORIZATION OF THE INTENT LETTER TAG IN THE SALES ELECTRONIC INVOICE);

**Account / Subaccount / Description (Conto / Sottoconto / Descrizione)**: enter here the account of the entity holding the statement of intent (customer or supplier);

**Nomenclature**: this field is only relevant in records that manage the VAT group, it is populated by the VAT group registry entered in the customer (tax information tab) or is the registry itself of the customer, but it can be manually edited to insert the reference to the VAT group registry of the customer;

:::danger Important
**Start date / End date**: DO NOT fill in these fields for statements of intent that are currently valid. Following the latest regulatory changes, valid statements of intent without value constraints for a certain period are no longer allowed. Therefore, for the statement of intent to be correctly recorded and to activate the control on the value limit and the replacement of the VAT code in the invoice, the field must not be filled. If the customer cancels the statement (or if the validity is canceled for a supplier), it will be possible to indicate only the end validity date, from which the reading of the statement for subsequent documents will be blocked;
:::

:::danger Important
**Single operation / Total operations (Singola op. / Tot. Op.)**: activate either one of the two flags depending on whether the statement of intent is valid for only a single operation or is valid up to the amount specified in the following field.
:::

**Amount**: enter here the amount of the statement of intent. This value will be checked to ensure that it is not exceeded by the sum of the totals of the invoices issued in the statement of intent from the date of protocol registration;

**VAT Ceiling (IVA Plaf.) / VAT Ceiling Description (Descr IVA Plaf.)**: enter here the VAT exemption code due to the validity of the statement of intent. This VAT code will automatically replace the standard rate in the delivery note/invoice up to the amount of the statement of intent;

**Previous VAT (IVA prec.) / Previous VAT Description (Descr IVA prec.)**: enter here the standard VAT code that will be replaced by the VAT code entered in the previous field;

**Notes**: free notes field;

**Customs**: activate the flag if the statement of intent refers to an import and was issued to customs;

**File emitted**: flag automatically populated by the export procedure of the electronic trace of the statements issued to suppliers. Followed by the details of the created file (**File name** and **Folder**)

**Identification Ref.**: enter here the first part of the electronic protocol for transmission to the revenue agency of the statement of intent;

**Progressive Reference (Rif. progressivo)**: enter here the second part of the electronic protocol (progress line of the statement within the electronic supply; for example, 000001 in case a single statement of intent is transmitted);


N.B.
The modification regarding the electronic protocol has affected both the wording to be included in the invoice print and the XML format for the electronic invoice, so it will be automatically reported instead of the fields "Our protocol (Ns protocollo)"/ "Their protocol (Vs protocollo)".

It is still advisable to continue populating these fields along with the “Our Protocol Date (Data ns protocollo)” field, since in the absence of input of the electronic protocol, these fields will still be reported.


**Export Details**: enables the subsequent fields **Integrative** (related to **Declaration Value** - which is being integrated) and **Description goods** which represent possible data necessary for the records issued to suppliers. It is advisable to refer to the specific regulations on issuing statements of intent.

### Creation of Electronic File

To generate the electronic file for transmitting the issued statements, press the **Export*** button present in the ribbon bar.


The generated file will be stored in the document management (open via the button with the paperclip) and it will be possible to download a copy to the local PC (via the **Save Attachment*** command). 

### Management of Multiple Statements for Individual Customer / Supplier

**POSSIBILITY OF LINKING A SINGLE STATEMENT OF INTENT TO PURCHASE/SALE DOCUMENTS**

It is possible to specifically select, especially in the presence of multiple valid statements simultaneously, which statement to link to the document.

It is possible to select the statement of intent to reference among those entered, for a certain delivery bill (DDT) or invoice by recalling it from the combo box "Detail of statements (Dettaglio dichiarazioni)", thus managing specifically the string reported in the invoice print and in the XML trace.

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image04.png)

### Prints (Stampe)

**CONTROL PRINT OF THE REMAINING VALUES OF THE STATEMENTS OF INTENT**

From both the records search form and inside the selected record (by entering edit mode), it is also possible to process a control print (called ***Check statements of intent (Verifica dichiarazioni di intento) ***) that summarizes the amounts of the received statements of intent and the value of the turnover to keep track of the limits still billable for each statement.

There is an additional version of the print (selectable from the dropdown) called ***Check statement of intent with details (Verifica dichiarazione di intento con dettagli)*** which reports the details of each single document linked to the statement.


### Management of References to Letters of Intent from Previous Years

It can happen to manage this case: issuing a credit note to a customer referencing the statement of intent from the year (or from a year) prior. 

The customer may have already issued a statement of intent in the current year. For example, the credit note may be a correction of an invoice from the previous year for goods shipped also in the previous year, and therefore the reference to the previous statement of intent must be inserted.

In the header of the credit note, use the fields for references to the invoice being rectified:

Expand the **Reference type** section and fill in **Reference SI** (one field for the invoice number and the next for the invoice date).

Once this is done, the selectable statements of intent from the specific combo box will **also** include those from the record of the previous year (or whichever is indicated in the reference date).

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image06.png)

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rZM6NBOpIxQ" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>