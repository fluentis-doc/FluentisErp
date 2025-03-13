---
title: Electronic Invoice of San Marino 
sidebar_position: 5
---

:::note NOTE
This section deals with the management of electronic invoicing concerning **resident** economic operators or established in San Marino who use Fluentis.

It therefore does NOT concern the aspects related to invoicing by Italian entities to San Marino or received from San Marino.
:::

### Table *Configuration of electronic documents*

Within the table, normally filled out for the configuration of the Fluentis Business Hub which connects with the Italian ES, it is necessary in this case to fill out, in addition to the usual fields for which reference is made [**here (video *Initial Configuration of Electronic Invoicing*)**](/docs/finance-area/ES-documents/ES-documents-intro/), two specific fields valid for San Marino:

- the flag **San Marino Test** (to identify the connection to the simulation tax environment) which prevails and bypasses the flag *Is it test* present in the header (which is irrelevant in this case)

- **San Marino Token** to enter the credential for connecting with the San Marino tax office (instead of the Italian ES).

![](/img/it-it/finance-area/sdi-documents/sanmarino/sdiconfig.png)

:::tip INFO
Although the fields in the table related to the connection with Fluentis Business Hub and the Italian ES are mandatory (such as username and password), for San Marino the call will be made directly to the web service of the San Marino financial administration. Therefore, it may be necessary to enter "dummy" Fluentis Business Hub credentials in order to save the form content and populate the fields actually needed for the connection, such as the Token for the San Marino web service.
:::

### Bizlink Connectors to be Enabled

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors.png)

In the event that the connectors visible in the image are not already present in the system and it becomes necessary to manually add them, it is advisable to copy the codes and descriptions present and then select the types related to San Marino electronic invoicing in the various fields.

<details>

  <summary>In Particular: (Click to expand)</summary>
 
  1. Connector type: San Marino INPUT and OUTPUT respectively for incoming and outgoing invoices.
  
  2. Partner: Fluentis
  
  3. Flow: San Marino
   
  4. Identifier: Must correspond to the parameter *Globalidentifier* set in the Bizlink service configurations, otherwise the connectors in question will be disabled. Therefore, at the time of installation and before use, the connectors might appear disabled for precaution, and they need to be activated by deleting the string SANMARINO from the connectors if the Bizlink service parameter is set to NULL, or re-entering the string SANMARINO in the service's *Globalidentifier* parameter while leaving the connectors as they are; in this case, however, the string SANMARINO must be included in all other connectors that are necessary for the desired functionalities.
  
  5. Flow Operation: select the items respectively for sending, receiving, or canceling, respectively for purchase or sale invoices; the items are consistent with the codes visible in the image (which are the necessary connectors).
    
  Flow document: select the items respectively for sending or receiving.
  
![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors3.png)

</details>

## BASIC LOGIC

### **Purchases**:

The economic operator of San Marino receives from the San Marino tax office, along with a certified email notifying the incoming "foreign" invoice (that is, from an Italian company selling to a San Marino entity), the document from the Italian ES and finds the file in the *Incoming Purchase Documents* as usual.

The aforementioned electronic purchase invoice is currently, within Fluentis, in the ***Not assigned*** state. 

For the company in question, the flag that activates the creation of purchase invoices from the ES File must have been activated (in the Company table - SH_Companies directly in the database). The user then creates the purchase invoice (the electronic invoice at this point moves to the ***Received***) integrates the necessary data, particularly the invoiced purchase type in the lines, to specify the type of goods - see image below - and the VAT rate for the calculation of the single-phase tax, data required by the San Marino tax regulations.

<details>

  <summary>Invoice Integration Details: (Click to expand)</summary>

The indication of the merchandise type is done directly through the purchase invoicing item definition table, where, in the VAT Type field (fixed table), the information will be contained to populate the appropriate tag.

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/xmlpurchaseinvoice.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/vatintegration.png)

</details>

Once the invoice has been integrated, through a specific state change (workflow) a file for the import integration is created to be sent to the San Marino tax office.

The document states, specific for San Marino, at this point are:

- **Checked**: performs a test on the Fluentis purchase invoice to verify that the necessary fields have been filled;
- **Generated**: creates the file with XML-SM structure.
- **To be sent**: transmits the file to FBH and from there to the San Marino tax office.
- **Rejected HUB_SM**: if the file is not purchased and therefore not processed by the San Marino tax office - from this state it can be reverted to *Received*.
- **In HUB-SM**: for the duration that the file remains at the San Marino tax office.
- **Discarded Non-compliant HUB-SM**: if the San Marino tax office rejects the file; from here it can be reverted to the *Received* state for corrections and new submission.	
- **Acquired HUB-SM**: if the processing goes well. The success of acquiring data from the XML-RSM format determines the act of submitting the invoice to the Tax Office, recorded on the date of file transmission.
- **Canceled**: a state that can be reached by sending a cancellation request; if the request is successful, the document can then be reverted to the *Received* state.
 
:::note **NOTE**
In the time between file transmission and actual processing, the operator has the option to cancel them, should they notice any compilation errors in the meantime.

The upload of an integration file in the temporary area triggers the immediate cancellation of any other integration file that may refer to the same FE Import file and be present at that moment in the temporary area; essentially, for each reference FE Import in the temporary area, the last version uploaded of the integration file prevails.
:::

The Tax Office, through automated processes, processes the invoices in batches and proceeds with the issuance of any payment notices related to the import tax (Single-phase tax).
The last step of the process is the confirmation of receipt and acceptance of the file by the San Marino tax office (notification of "Validation"), which updates the status of the document.

The purchase invoice is then recorded as usual, to register it in accounting.


:::note **Note**
Invoices for importing services exempt from single-phase tax must be integrated at the HUB-SM by indicating Merchandise Type 9 "Exempt Services," using the methods described in this document, in order to avoid their indefinite pending in the list of invoices to be submitted.
For this type of invoice, neither batch processing nor the forwarding of any "validation" notifications to the ES is foreseen.
:::

### **Sales**:

The flow is similar to that of Italy (it is the same ES trace, even if some tags are filled out in a particular way). 

<details>

  <summary>Specific Tags for San Marino (specific for SM): (Click to expand)</summary>

Fixed Tag VAT number of the sender example:

```xml
    <IdTrasmittente>
    	<IdPaese>SM</IdPaese>
    	<IdCodice>96428100588</IdCodice>
    </IdTrasmittente>
```    

For each section 2.2.1 Line Detail of section 2.2 Goods and Services Data 

```xml
    <AltriDatiGestionali>
    		<TipoDato>TM</TipoDato>
    		<RiferimentoTesto>1</RiferimentoTesto>
    	</AltriDatiGestionali>
```

where the value of the Tag TipoDato *TM* is fixed and the value of the RiferimentoTesto tag is taken from the list of values in the **VAT Type** field linked to the **Sales Turnover** classes (Fluentis table) inserted in the invoice.

![](/img/it-it/finance-area/sdi-documents/sanmarino/salesturnover.png)

In the Summary Data section, for each value of the VAT Type field (above) linked to sales turnover found in the document, a specific tag *RiferimentoNormativo* is inserted where the value is obtained by concatenating the VAT Type code linked to turnover and the value of the VAT Category field present in the table [**VAT Rates**](/docs/configurations/tables/finance/vat-rates). 

```xml
    <DatiRiepilogo>
    		<AliquotaIVA>0.00</AliquotaIVA>
    		<Natura>N3.1</Natura>
    		<ImponibileImporto>1725.00</ImponibileImporto>
    		<Imposta>0.00</Imposta>
    		<EsigibilitaIVA>I</EsigibilitaIVA>
    		<RiferimentoNormativo>**TM:1**, EXEMPTION</RiferimentoNormativo>
    	</DatiRiepilogo>
```

</details>

The San Marino tax office acts as an intermediary in the sending process, so special document states are foreseen linked to the fact that the file passes through the San Marino tax office (so it is San Marino that performs an initial test of the specific requests in terms of tag value assignment) and then, if also accepted by the Italian ES, the document state reaches the usual state (e.g., Delivered). 

Information regarding delivery notifications, etc. (Italian) passes through the San Marino tax office, which forwards them to the Fluentis Business Hub for acquisition into the management system.

(Primary) WORKFLOW STATES (in *italics* those *SPECIFIC TO SM*):

- **Checked**: performs a test on the Fluentis purchase invoice to verify that the necessary fields have been filled; a particular check added for San Marino is the requirement that only the following combinations related to merchandise type (tag TM) can be contained in the same invoice: Raw materials with Consumer Goods and with Capital Goods, and separately The work services, both with and without raw materials (separated from each other). 
- **Generated**: creates the file with XML-SM structure.
- **To be sent**: transmits the file to FBH and from there to the San Marino tax office.
- ***Rejected HUB_SM***: if the file is rejected by the San Marino tax office for formal errors concerning the XML trace specifications - from this state it can be reverted to *Not examined*.
- ***In HUB-SM***: for the time that the file remains at the San Marino tax office.
- ***Canceled HUB SM***: following a cancellation request activated by a specific state change.
- ***Rejected Non-compliant HUB-SM***: if the San Marino tax office rejects the file due to substantial errors related to the accuracy of the data in the invoice (The Tax Office, through automated processes, performs data acquisition and processing of invoices in batches, then proceeds to any checks (e.g., payments of VAT charged in the invoice to be forwarded to the Italian Financial Administration, etc.), then determines the continuation of the process.); from here it can be reverted to the *Received* state for corrections and new submission.	
- ***Not delivered to the ES***: in case of delivery impossibility. 
- ***Awaiting response***: awaiting the response message from the Italian ES.
- **In ES**: in transit at the Italian ES, which carries out the normal checks required in Italy.
- **Non-compliant**: rejected due to non-compliance with the checks carried out by the Italian ES.
- **Failed delivery**: impossibility of delivery to the recipient.
- **Delivered**: delivery to the recipient occurred.

<details>

  <summary>State transition details (specific to SM): (Click to expand)</summary>

To be sent --> Rejected by HUB - SM (automatic)

To be sent --> Transfer to HUB - SM (automatic)

Rejected by HUB - SM --> Revert to not examined (manual)

Transfer to HUB - SM --> To be canceled from HUB-SM (manual) --> From this state, it will be automatically reset to Not examined (or to other states depending on the response from HUB-SM)

---

Transfer to HUB-SM --> Discarded by HUB-SM (automatic)

Transfer to HUB-SM --> Not acquired by HUB-SM (automatic) --> Passes to Discarded by HUB-SM (automatic) or Accepted by HUB-SM (automatic)

Transfer to HUB-SM --> Accepted by HUB-SM (automatic)

---

Rejected by Hub SM Non-compliant  --> Reverts to not examined (manual)

Accepted by HUB-SM --> In ES (automatic)

Accepted by HUB-SM --> Not transmitted to ES (automatic)

Accepted by HUB-SM --> Awaiting response from ES (automatic)


</details>

:::note Note
If the invoice falls within the scope of the interchange agreements, the HUB-SM transmits the FE file to the ES and the subsequent steps continue; otherwise, the process concludes.

The ES notifies the HUB-SM of the receipt or rejection of the FE file. In case of receipt, the Italian transferor/client has the electronic invoice available on the Italian "Invoices and Payments" portal or in the "tax drawer." If the invoice contains VAT charges, then it is in a "suspended" state (awaiting validation); otherwise, it is considered completed from the transferor's perspective.

HUB-SM notifies the OESM of the outcome received from the ES (receipt/rejection).
:::

The Transferor/Provider OESM produces the electronic invoice and transmits it to the HUB-SM (both in cases of VAT charges - where the tax will then be sent by the SM tax office to the Italian Revenue Agency, and without VAT charges).

During the transmission phase:
- the calculation of the hash code corresponding to the file occurs, the value of the hash is stored in the HUB-SM and returned to the transmitter.
- the syntactic check of the FE file: if errors are detected, these are immediately reported to the transmitter and the FE file is immediately rejected.

Once transmitted to the HUB-SM, each FE file remains deposited in a temporary area until the automatic processing is executed that validates, acquires, and processes the data; within this time frame, the transmitter can delete or replace the files transmitted and not yet processed.

Invoices that do not contain VAT follow a shorter procedure; the invoice successfully acquired by HUB SM is included in an Export Batch and sent to the Italian ES. The communication of a positive outcome from the ES triggers from the Tax Office the registration of the Refund Requests in the Tax Account, thus creating credit availability.

Sales with VAT, after the initial formal check, are included in Export Batches but remain pending until the OESM makes the payment to the tax office's bank account in SM for the VAT and presents the paper receipt of the payment to the tax office. Only at this point will the files of the related invoices be forwarded to the Italian ES.

For invoices with VAT charges, the communication of a positive outcome from the ES triggers the Tax Office's registration of the Refund Requests in the Tax Account, thus creating credit availability. At this point, the Italian purchaser will be able to consult the invoices with VAT charges that have not yet been completed on the "Invoices and Payments" portal, highlighting the following two processing stages:

- Invoice not yet validated by the Revenue Agency (Provincial Directorate PU), therefore valid only for commercial purposes;
- Invoice validated by the Revenue Agency (Provincial Directorate PU), therefore valid for VAT deduction by the Italian purchaser.

For each FE file sent from the HUB-SM to the ES, the latter system produces and returns to the HUB-SM a receipt XML file, certifying delivery or non-delivery or rejection.


## MANAGEMENT OF SINGLE-PHASE TAX AT FIXED AMOUNT

:::tip Info
The tax regime in San Marino currently provides, in general, a single-phase tax of 17% on the purchases/imports of generic goods, or other rates based on the type of goods, such as fuels, etc.

For agency services only, a fixed single-phase tax of €2 is foreseen.
Other types of services are exempt from single-phase tax, but the purchase invoice (as explained better below) is nevertheless processed by companies resident in San Marino to send the tax office the file with the purchase integration, albeit with an exempt VAT code.

For the sale of GOODS to Italy, the application of VAT (Italian) is optional and is applied at the customer's request; otherwise, they are invoiced with the exemption VAT code.

The sale of services is always exempt.
:::

For agency service purchases (commissions), San Marino legislation provides for a fixed single-phase tax of €2 for each document: essentially, regardless of the taxable base of the tax, the amount is fixed at this fixed amount.

### CONFIGURATION IN VAT RATES TABLE 
The single-phase tax is essentially the VAT rate applied to various items, for the localization of San Marino we have visibility of the **Fixed value** field:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase1.png)

When a value is set in this field, the percentage field will be reset to zero and vice versa.

### USE IN DOCUMENTS OF THE PURCHASE/SALES CYCLE, IN COMPENSATIONS, IN REGISTRATIONS, IN ACCOUNTING

E.g., sale invoice: **first article line** with fixed single-phase tax, will be valued with the relative amount:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase2.png)

All other article lines (or charges) with the same fixed rate will instead have tax = 0:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase3.png)

Total in VAT summaries: regardless of the total tax base for this rate, the tax amount will be the one fixed in the table.

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase4.png)

Result in accounting: only one line will have the fixed amount of €2.

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase5.png)

In manual registrations, the fixed tax field will be non-modifiable: to be precise, it seems modifiable, but once the user exits the field, Fluentis will cancel the modification to restore the earlier amount taken from the VAT table.

### INTEGRATION OF IMPORT INVOICE, DETAILS FOR SINGLE-PHASE FIXED TAX
When an electronic invoice is received from Italy, the purchase invoices are created from the ES file, the purchases turnover are assigned to the lines, and the relevant VAT rates are applied, then the telematic submission is made to the SM tax office of the integration, to pay the related tax.

:::note Note
The flag to identify the fixed tax of €2 called ‘San Marino,’ used also for the creation of the integration file, should be considered obsolete as currently the new specific field is read directly, which is correctly managed in the document and in the accounting.
:::