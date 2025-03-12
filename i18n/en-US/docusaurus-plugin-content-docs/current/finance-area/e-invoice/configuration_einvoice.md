---
title: Other specific configurations for electronic invoicing (Altre configurazioni specifiche fatt. elett.)
sidebar_position: 4
---
### Management of credit notes (Gestione della nota di accredito)

Starting from version 606, credit notes must be entered in Fluentis always with a negative sign, specifically a negative value will be entered starting from the Quantity field. A warning message will be displayed in the document if the total is not negative, suggesting to reverse the signs.

Regarding electronic invoicing, it is required for the checks performed by SDI that the document sign be positive; the XML file generation parser will thus reverse the sign again (when the document type is TD04).

:::note Note
For accounting purposes, if mixed signs are present within the credit note (positive and negative lines), it is necessary to enable the possibility of managing their accounting by changing an internal database parameter (change from 0 to 1, previously set to -1 before the aforementioned change). Refer to the technical documentation and, if necessary, to the support service.
:::

### Article coding for customer  (Tag 2.2.1.3 CodiceArticolo)

The article code tag can be repeated multiple times, generating a double coding by changing the code in the tag 2.2.1.3.1 

```xml
    <CodiceTipo> . 
```
The default proposed Type Code (in sales invoices) refers to the article code present in Fluentis (from the item registries of the company in use) which can be reported in two different ways:
    
```xml
    <CodiceTipo> 
```
**By default, the coding occurs according to this scheme**
    
```xml
    <CodiceArticolo> 
    <CodiceTipo>Supplier Art. code (Codice Art. fornitore)</CodiceTipo>    
    <CodiceValore>1504X0</CodiceValore>
    </CodiceArticolo> 
```         

Alternatively, the *CodiceTipo* can be customized by valuing the field **[Supplier article code (Codice articolo fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information#codice_articolo_fornitore_cliente)** present in customer registry in the *fiscal information* tab. 

:::note Note
Please pay attention, this involves a pair of adjacent fields related to the coding of our company (supplier) for customization regarding the default, and the customer for a double coding to include in the invoice data.
:::

Example:

```xml
    <CodiceArticolo>
    <CodiceTipo>MIOCODICE</CodiceTipo>
    <CodiceValore>104X0</CodiceValore>
    </CodiceArticolo>
```

Other types of specific codings are possible, such as EAN coding or that specific to the medical devices sector.

Example:

```xml
    <CodiceArticolo> 
    <CodiceTipo>EAN</CodiceTipo>
    <CodiceValore>XX345678</CodiceValore>
    </CodiceArticolo>
```

It is possible to support the coding in the **[Barcode Types (Tipi Barcode)](/docs/configurations/tables/general-settings/barcode-types)** table.

A practical usage example for ‘Medical Devices’: three types of barcodes are coded (also activating the **Export Public Administration** flag for management of the barcode in the XML invoice data):

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode.png)

Then in **[item registry (anagrafica articolo)](/docs/erp-home/registers/items/create-new-items/item-registry/barcode)**, the value for each type of code is indicated:

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode2.png)

The result will be

```xml
     <CodiceArticolo> 
     <CodiceTipo>DM1</CodiceTipo> 
     <CodiceValore>26554/R</CodiceValore> 
     </CodiceArticolo> 
```

As required by the regulations of the Ministry of Health.

Regarding the possibility of a double coding in the invoice, by adding that of the customer document holder, the customer article code, if entered in the Customers tab of the item registry, related to the customer of the invoice, can be expressed in two different ways:

- with the CodiceTipo tag having the wording “Customer Art. code (Codice Art. cliente)” 

Example:

```xml
    <CodiceArticolo> 
    <CodiceTipo>Codice Art. cliente</CodiceTipo>    
    <CodiceValore>XX4</CodiceValore>
    </CodiceArticolo> 
```

- with the CodiceTipo tag equal to the customer article code (of the pair of fields *supplier/customer article code type*) present in customer registry in the *fiscal information* tab.

Example:

```xml
    <CodiceArticolo>
    <CodiceTipo>CODCLI</CodiceTipo>
    <CodiceValore>XX4</CodiceValore></CodiceArticolo>
    </CodiceArticolo>
```

Where CODCLI is the value entered in the *customer article code type* field in customer registry.

:::tip Insight
If you want to display the Fluentis article code differently from the standard, you must customize in ARM the transformation of FSItem called FullTextDescriptionXMLFE. If you do not want to insert anything in the CodiceArticolo tag for the “supplier art. code (codice art. fornitore)" CodiceTipo, in the transformation, in the grid, corresponding to the string “Engine Parameters,” nothing should be inserted. To exclude the class code in individual lines of the document, it is necessary to customize in Arm the FullTextDescription transformation of the FSItem object by modifying the text in the “Default” line's EngineParameters section from “ItemClassCode +”-“+ Code” to “Code.” 
:::

### Declaration of intent (tag 2.2.1.16 AltriDatiGestionali)

The intent declaration data is automatically entered as “other management data”: 

2.2.1.16.1 DataType INTENTO 

2.2.1.16.2 ReferenceText records the identifying and progressive reference by reading from the **[register of intent declarations (registro delle dichiarazioni di intento)](/docs/finance-area/declarations/declarations/intent-declaration)**

2.2.1.16.4 ReferenceDate records the protocol date by reading from the register of intent declarations.


### Fixed annotations in the invoice (tag 2.1.1.11 Causale)

To manage annotations that in the prints of old invoices were firmly entered in the report (example “Contribution Conai fulfilled where due”), new notes must be entered in the Encoded Notes table (Utility->Manage encoded notes). This type of annotations are reported in the tag Reason (Causale) of the XML file. 
The conditions to meet for the Causale tag to be filled are: 
- the encoded note type must have code        
   
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
   
- the note must be linked to the individual company 
- what is written in the Description field will be reported; if this is empty, what is in the Title field will be used. 
 
### Fixed annotations for the customer (tag 2.1.1.11 Causale)

To manage annotations to be reported based on the customer, encoded notes must be managed in the respective table (Utility->Manage encoded notes). This type of annotations are reported in the Causale tag of the XML file, which can be replicated multiple times in the file. 

The conditions for the Causale tag to be populated are: 
- the encoded note type must have code
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
- the notes must be entered in the ‘Various’ tab of the customer registry, dedicated to managing specific notes for printing of documents. 
- the note must have the flag ‘Print on Sales Invoices’ or, if this is empty, what is written in the note field of the line will be reported.
 
### Management of free additional data (tag 2.2.1.16 AltriDatiGestionali)

To manage ‘free’ additional line data, in Fluentis it is necessary to enter ExtraData with a code that starts with 

```
  AltriDGes_
```
(e.g. AltriDGes_AltriDati3). 

These ExtraData, of simple type, should be linked to the parent object  

```
   FSSalesInvoiceItem
```
on the ExtraData property (3 types are expected: string, numeric, date). 

On each article line, therefore, the user can freely (manually) add these additional data; as a result, the article line will have, (for example, if the extra data is of string type), this additional section: 

```xml
    <AltriDatiGestionali> 
    <TipoDato>AdditionalData3</TipoDato> 
    <RiferimentoTesto>Example text</RiferimentoTesto> 
    </AltriDatiGestionali> 
```

Where: 
- the ‘TipoDato’ is taken from the text following the code 
```
   AltriDGes_ 
```
of the extra data, 
- when the extra data type is numeric, the value in the ‘Value’ field of the extra data will go into the ‘ReferenceNumber’ tag, and what is in the ‘Description’ field (if not empty) of the same extra data will end up in the ‘ReferenceText’. 

Example

```xml
    <AltriDatiGestionali>
    <TipoDato>Thickness</TipoDato>
    <RiferimentoNumero>500</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Management of “administration reference” in document header (tag 1.2.6 RiferimentoAmministrazione)

The “RiferimentoAmministrazione (administration reference)” in invoice header is managed by taking from the customer registry the ‘Reference Person’ entered with the note 

```
   XMLPA
```

In the invoice, the fields “Name” + “ “ + “Surname” of the person 
as inserted will be reported.

### Management of “administration reference” for line details (tag 2.2.1.15 RiferimentoAmministrazione)

Some public entities require an ‘administration reference’ for each article line (and not in the header). 

In Fluentis, it is possible to insert ‘ExtraData’ with the code 

```
   RiferimentoAmminis
```

This extra data, of simple type, must be linked to the parent object 

```
   FSSalesInvoiceItem
```

with ExtraData property (expected as a string). 

On each article line, therefore, the user can freely (manually) add these additional data, and the result will be that the article line will have this additional section: 

```xml
    <RiferimentoAmministrazione>RifAmm</RiferimentoAmministrazione> 
```

Where the value ‘RifAmm’ is taken from the “Description” of the extra data entered in the article line. 

### Alternative unit of measure (tag 2.2.1.16 AltriDatiGestionali)
 
The quantity used for calculating the line price (regardless of whether it is the first or second, depending on the UMPrezzo flag of the line itself) is reported in the tag 2.2.1.5 Quantity. 

The unit of measure not related to the price is reported as ‘Other management data’, 

with TipoDato = 
```
   QTALTERNA
```
and the quantity is reported in the ‘ReferenceNumber’ tag. 

Example

```xml
    <AltriDatiGestionali>
    <TipoDato>QTALTERNA</TipoDato>
    <RiferimentoNumero>4.00</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Purchase Order Data (tag 2.1.2 DatiOrdineAcquisto) 

In the tag 

2.1.2 DatiOrdineAcquisto 

2.1.2.1 RiferimentoNumeroLinea 

2.1.2.2 IdDocumento 

The reference to the customer order is reported. 

In the **IdDocumento** tag, the text present in the **Your Reference** field of the **customer order header** linked to the invoice article line is reported, and **in the absence of such a value**, the *Your Reference* of the **invoice header** is reported. 

This tag is inserted only for invoice lines that are linked to customer order lines. 

If the invoice has not been created from customer orders in Fluentis to have the reference to the purchase order, a code must be entered in the **Order Ref (Rif.ordine)** field present for each line of the invoice in the detail tab for line **Item data**.

![](/img/it-it/finance-area/e-invoice/configuration/datiarticolo.png)

### DDT Data (tag 2.1.8 DatiDDT)
 
In the tag 

2.1.8 Dati DDT 

2.1.8.1 NumeroDDT 

2.1.8.2 DataDDT 

2.1.8.3 RiferimentoNumeroLinea 

The reference to the DDT from which the invoice was created is reported. 
In the “RiferimentoNumeroLinea,” only the invoice line numbers linked with a line DDT are reported. 

### Stamp Duty (Tag 2.1.1.6 DatiBollo)

To manage stamp duty fees, the following rules must be observed:

- In the **[Types of expenses (Tipi spese)](/docs/configurations/tables/general-settings/expenses-types)** table, the expense of type “stamp duty” must be entered with a flag on the *Stamp* field and with the *Stamp
value* of 2 euros. 
- In the customer registry, a stamp duty expense must be added in the **[Expenses Discounts (Spese sconti)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts)** section, selecting the code previously created in the *Types of expenses (Tipi spesa)* table. 
- To not charge it to the customer: in the stamp duty expense in the customer registry, the value must be 0. 
- In the **[Companies (Società)](/docs/configurations/tables/general-settings/company)** table, fill in the *Stamp charges* field (2 euros) and *Min roof expenses (Roof min spese)* (77.47 euros). 
- In sales invoices, stamp duty expenses appear automatically if present in customer registry. 
- In the sales invoice, it is possible to change the proposed expense value (Summary Panel > Agents/Discounts/Expenses), so for each individual invoice, a decision can be made on whether to charge it or not (to not charge the stamp duty but still get visibility on the invoice, it is sufficient to enter the expense with an amount = 0). 
- When the XML file is created, if there is a stamp duty expense in the invoice summaries, the virtual stamp duty section is added.

```xml
        <DatiBollo>
        <BolloVirtuale>YES</BolloVirtuale>
        <ImportoBollo>2.00</ImportoBollo>
        </DatiBollo> 
```

- If the invoice summaries contain the stamp duty expense with a value different from 0 (case of charge in the invoice), a detailed section is added in the XML with line number being the last of the invoice + 1 and the value of the stamp duty. 
 
This section is added for total invoice control.

```xml
    <NumeroLinea>2</NumeroLinea>
    <TipoCessionePrestazione>AC</TipoCessionePrestazione>
    <Descrizione>Stamp Duty Expense (Spesebollo)</Descrizione>
    <Quantita>1.00</Quantita>
    <PrezzoUnitario>2.00000000</PrezzoUnitario>
    <PrezzoTotale>2.00</PrezzoTotale>
    <AliquotaIVA>0.00</AliquotaIVA>
    <Natura>N3</Natura>
```

### CIG and CUP Codes (Tag 2.1.2.6 CodiceCUP and 2.1.2.7 CodiceCIG)
 
In the purchase order data tag, the CIG and CUP are contained; to report these 2 codes, the invoice must refer to a customer order in Fluentis or the order reference must be specified in the corresponding edit present in the Article Data (Dati Articolo) tab of the invoice. 

    2.1.2 \<DatiOrdineAcquisto> 
    2.1.2.1 \<RiferimentoNumeroLinea> 
    2.1.2.2 \<IdDocumento> 
    …….. 
    2.1.2.6 \<CodiceCUP> 
    2.1.2.7 \<CodiceCIG>

### Decimals to be used for numeric fields 
To know how many maximum decimals can be specified for each numeric field, refer to the technical specifications for electronic invoicing from the Revenue Agency:

As per specifications: 
- article quantity: decimals from 2 to 8 
- unit price: decimals from 2 to 8 
- discount percentage: 2 decimals 
 
### Withholding Tax and Enasarco (tag 2.1.1.5 DatiRitenuta)

For managing withholding tax: 

- In the customer registry, activate the **Withholding tax** flag in the **fiscal information** tab and specify what type of withholding to use through the **Withholding-tax type** combo box.
- In the **Withholding Types (Tipi ritenute)** table, correctly code the code for electronic invoicing (RT01, RT02). 
- Fill out the invoice as usual; the document automatically retrieves the withholding applicable to the lines where the calculation is possible and automatically calculates the withholding amount. 
- Create the XML file that reports the indication of the withholding and, for each line, the tag "Withholding YES (Ritenuta SI)" if the line is subject to withholding. 

Regarding Enasarco, with version 1.6 of the electronic invoicing schema (in force since 01/10/2020), it has been defined that section 2.1.1.5, initially dedicated to withholdings only, can now be replicated N times to also indicate Enasarco, which has been assigned the code RT04. Fluentis, if the withholding entered in the header has Enasarco settings, will also value the Enasarco calculation in the document and will fill section 2.1.1.5 as required.

:::danger[Attention]
ACCOUNTING: The active invoice linked to the withheld tax and the Enasarco contribution will be accounted for by automatically generating the correct accounting entry that cancels the withholding and the contribution from the customer credit.
PLEASE NOTE THAT IN THE CONFIGURATION OF THE ASSOCIATED WITHHOLDING TYPE, THE **Mat. val. types** field must be set to *Net payments (*Partite nette*), otherwise the accounting entry and the open item calculation will result incorrect and lacking the transfer of the withholding.
:::

:::tip **See also**
For managing the recharging of the **pension fund contribution**, see [**here**](/docs/configurations/tables/general-settings/expenses-types#ritenuta-dacconto-e-cassa-previdenza) in electronic invoicing.
:::