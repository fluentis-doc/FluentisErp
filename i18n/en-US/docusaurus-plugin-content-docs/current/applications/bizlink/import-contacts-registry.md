---
title: Import Contact Master Data
sidebar_position: 1
---

In this article, it will be explained how to **Import contact records** (customers or suppliers) into **Fluentis** using a **spreadsheet**.

This import is possible thanks to the use of **BizLink Parameters**, as every time a row is processed, they will be called.

### How to open the import via spreadsheet

Click on **Tools** (usually located on the right side of Fluentis).

Click on the **BizLink** section.

Click on **On Demand Import > Records > Import Customers/Suppliers** as shown in the image below.

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png) 

### Data Section

In this section, we will enter the data that will then be made permanent by saving it in the **Fluentis** database.

Now the import spreadsheet is displayed on the screen.

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png) 

At this point, various paths can be taken:

1. Import the already filled spreadsheet, **File > Open**.
2. Add the various columns by copying and pasting from the saved price list on our PC.
3. Save this file (**File > Save**) on our PC, then go to add the various data and re-import it later in **Fluentis** (see point 1). This could be very useful for passing the template of the import spreadsheet to fill out for future price lists that suppliers will send us.
4. Manually add the fields.

**WARNING**: if we have a spreadsheet saved on our PC, it must follow the scheme of the spreadsheet shown above. That is, the same column order, data type, etc. These are explained in detail in the following paragraph.

### Field Entry

When entering a field, many aspects must be considered, including type, maximum length, required, etc.

General indications:

- If the field is written in red, it is a mandatory field.
- If the cell name is highlighted in green, it is a **section**.
- If the cell name is highlighted in yellow, it is a **field**.
- Field: indicates whether entry is mandatory or not.
- Type: indicates the type of the field.
- Excel Formatting: indicates the recommended Excel formatting to avoid incorrect entries; see end of Useful Tips and Warnings.
- Length: indicates if the field has a character limit that must be respected.
- Description: brief description of the field.
*Example*: real example of what to write in that field.

- Mapping table/column: if present, indicates the mapping of the respective field in the database; for more details, see the end of Useful Tips and Warnings.

![](/img/it-it/applications/bizlink/import-contacts-registry/image05.png)

**General Data**:

Code:

- Field: mandatory.
- Type: string.
- Excel Formatting: text.
- Maximum length: 6 characters.
- Description: reference code of the customer/supplier.
*Example*: TEGOL.
- Mapping table/column: select MBAN_Nomignolo from MB_Anagr.

Business Name:

- Field: mandatory.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: business name of the customer/supplier.
*Example*: TEGOLA CANADESE spa.
- Mapping table/column: select MBAN_RagSoc from MB_Anagr.

Customer/Supplier:

- Field: mandatory.
- Type: string.
- Excel Formatting: text.
- Maximum length: 1 character.
- Description: Indicates whether we are entering a customer or a supplier. The two letters representing customer and supplier are specified in the parameters.
*Example*: “C” corresponds to supplier, ”F” corresponds to customer.

**Warning**: the only way to enter a contact that is both a customer and a supplier is to insert it first as a customer and then as a supplier.

Account:

- Field: optional.
- Type: string.
- Description: account of the supplier, master account of the supplier.
*Example*: “15200” corresponds to Clients Italy.
- Mapping table/column: select MBPC_Conto from MB_PiaCon.

Sub-account:

- Field: optional.
- Type: string.
- Description: sub-account of the supplier, sub-master account of the supplier.
*Example*: if accounts are passed with an empty system, you can use a coding like 01; 02; 03 or 001; 002; 003.
- Mapping table/column: select BPC_SottoConto from MB_PiaCon.

Open Items (true/false):

- Field: mandatory.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: flag for open items.
*Example*: simply write “true,” and as soon as you change cells, it will automatically write “TRUE” in the center of the cell or “FALSE” depending on the case.

Address:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: address of the customer/supplier.
*Example*: via le dita dalla tastiera 7.
- Mapping table/column: select MBAN_Indirizzo from MB_Anagr.

Municipality:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: municipality of the customer/supplier.
*Example*: Cordignano.
- Mapping table/column: select MBAN_Comune from MB_Anagr.

ZIP Code:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 5 characters.
- Description: postal code of the customer/supplier.
*Example*: 31016.
- Mapping table/column: select MBAN_CAP from MB_Anagr.

Province:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: province of the customer/supplier.
*Example*: “TV” corresponds to Treviso.
- Mapping table/column: select MBAN_Provincia from MB_Anagr.

Country:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: country of the customer/supplier.
*Example*: “IT” corresponds to Italy.
- Mapping table/column: select MBNZ_CodIso from MB_Nazioni.

Language:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: language used by the customer/supplier.
*Example*: “IT” corresponds to Italian.
- Mapping table/column: select MBAN_RagSoc from MB_Anagr.

Phone:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: phone number of the customer/supplier.
*Example*: 0438-123456.
- Mapping table/column: select MBAN_Telefono from MB_Anagr.

Email:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: main email of the customer/supplier.
*Example*: info@mycompany.com.
- Mapping table/column: select MBAN_Email from MB_Anagr.

Note:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: additional notes.
*Example*: 
- Mapping table/column: select MBAN_Note from MB_Anagr.

![](/img/it-it/applications/bizlink/import-contacts-registry/image06.png)

**Tax Data**:

Tax Code:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: Tax Code of the customer/supplier.
*Example*: IT01720550936.
- Mapping table/column: select MBAN_CodFiscale from MB_Anagr.

ISO Code:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 50 characters.
- Description: 
*Example*: “IT” corresponds to Italy.
- Mapping table/column: select MBAN_CodIso from MB_Anagr.

VAT Number:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 200 characters.
- Description: VAT number of the customer/supplier.
*Example*: 28207227700.
- Mapping table/column: select MBAN_PartitaIva from MB_Anagr.

![](/img/it-it/applications/bizlink/import-contacts-registry/image07.png)

**Payments**:

Payment Type:

- Field: mandatory.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: type of payment used by the customer/supplier.
*Example*: “04” corresponds to bank transfer.
- Mapping table/column: select MBTP_Pagamento from MB_TipoPag.

Payment Solutions:

- Field: mandatory.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: payment timing of the customer/supplier.
*Example*: “60 GG DF” corresponds to within 60 days from the invoice date, “On delivery” payment upon delivery of goods.
- Mapping table/column: select * from MB_SolPag.

ABI:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 5.
- Description: identifies the bank to which the customer's/supplier's current account belongs. It is part of the IBAN.
*Example*: 01234.

CAB:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 5.
- Description: indicates the branch of the respective bank (ABI) of the customer/supplier. It is part of the IBAN.
*Example*: 12345.

IBAN:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 27 characters.
- Description: it is a code used in transactions between different current accounts, which contains the identification of the country, the bank, and the account number.
*Example*: IT66C010050338 2000000218020.

SWIFT:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: 11 characters.
- Description: identifying figures that allow systems to understand instantly which is the receiving bank and which is the sending one, their name, and the location from which they operate. It is necessary for international payments. It consists of 8 characters + 3 optional.
*Example*: “UNCRITMM” corresponds to the SWIFT of UniCredit.

Zone:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: Zone defined at the beginning of the IBAN.
*Example*: “IT” corresponds to Italy.

![](/img/it-it/applications/bizlink/import-contacts-registry/image08.png)

**Agents**:

Agent:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: If there is an agent (present in the agent registry), it can be linked to the customer.
*Example*: 
- Mapping table/column: select * from MB_Agenti.

Commissions:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: Agent's commission, if different from the one entered in the agent record, there is a form where you can decide which takes priority over the other.
*Example*: 
- Mapping table/column: select * from MB_AgentiZone.

![](/img/it-it/applications/bizlink/import-contacts-registry/image09.png)

**Price Lists**:

Price List:

- Field: optional.
- Type: string.
- Excel Formatting: text.
- Maximum length: /.
- Description: 
*Example*: 

Discount 1:

- Field: optional.
- Type: decimal.
- Excel Formatting: number, decimal position = 2.
- Maximum length: /.
- Description: value of the discount.
*Example*: 550.

Discount 2:

- Field: optional.
- Type: decimal.
- Excel Formatting: number, decimal position = 2.
- Maximum length: /.
- Description: value of the discount.
*Example*: 5%.

### BizLink Parameters

These parameters will be used to process the rows entered in the Data section. As can be seen from the image, some fields are already pre-filled, but nothing prevents us from modifying them.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png)

BizLink Spreadsheet:

- Field: do not enter.

Language:

- Field: mandatory.
- Type: string.
- Description: ISO code related to the language.
*Example*: “it-IT” represents the Italian language, “en-US” represents the English language in America.

Company:

- Field: mandatory.
- Type: string.
- Description: it is a pre-filled field as it takes values already within Fluentis, which can be seen in the upper left corner.
*Example*: “1” corresponds to the demo company.
- Mapping table/column: Select MBSC_Code from MB_Soc.

Division:

- Field: mandatory.
- Type: string.
- Description: like the company, it is pre-filled.
*Example*: “1” corresponds to the legal office, “2” to the operational office in Milan.
- Mapping table/column: select MBDP_Code from MB_Dep.

Customer Identifier:

- Field: mandatory.
- Type: string.
- Description: Any letter we enter in the parameters that will then correspond to the customer/supplier field. For simplicity, “C” is recommended.
*Example*: “C” corresponds to customers.

Supplier Identifier:

- Field: mandatory.
- Type: string.
- Description: Any letter we enter in the parameters that will then correspond to the customer/supplier field. For simplicity, “F” is recommended.
*Example*: “F” corresponds to suppliers.

Customer Account Type Code:

- Field: mandatory.
- Type: string.
- Description: master account regarding customers. To see it from Fluentis, go to Home **>** Parameters **>** Administration **>** Accounting Parameters. Double click on the current year, and on the right, you should see the “Account Type.”
*Example*: “FIT” corresponds to customers in Italy.

Supplier Account Type Code:

- Field: mandatory.
- Type: string.
- Description: master account regarding suppliers. To see it from Fluentis, go to Home **>** Parameters **>** Administration **>** Accounting Parameters. Double click on the current year, and on the right, you should see the “Account Type.”
*Example*: “CIT” corresponds to suppliers in Italy.

Customer Group:

- Field: mandatory.
- Type: string.
- Description: You can see the codes present in Home **>** Accounting **>** Chart of Accounts; in the first display form, there is a group code.
*Example*: “1520” corresponds to Clients Italy.
- Mapping table/column: select MBGR_Gruppo from MB_GRUPP.

Supplier Group:

- Field: mandatory.
- Type: string.
- Description: You can see the codes present in Home **>** Accounting **>** Chart of Accounts; in the first display form, there is a group code.
*Example*: “2506” corresponds to Suppliers Italy.
- Mapping table/column: select MBGR_Gruppo from MB_GRUPPI.

Discount Type Code 1:

- Field: mandatory only if Discount 1 is entered.
- Type: string.
- Description: Represents the discount category applied to the price list.
*Example*: “C1” corresponds to cascading discount.
- Mapping table/column: select MBST_TipSco from MB_Sconti.

Discount Type Code 2:

- Field: mandatory only if Discount 2 is entered.
- Type: string.
- Description: Represents the discount category applied to the price list.
*Example*: “3” corresponds to commercial discount.
- Mapping table/column: select MBST_TipSco from MB_Sconti.

### Start Import

Once the data has been entered, to start the import, click on the button present in the import menu, at the top left, also called “Import” as shown in the figure below.

![](/img/it-it/applications/bizlink/import-contacts-registry/image11.png)

### Conclusions – Entry Successful

If all goes well, no error message will appear. For further verification of success, check in the item registry (**Home > Items**) if the items imported from the supplier are present. Otherwise, we will see an error screen indicating which parameters and/or fields are incorrect. To interpret the type of error, see Useful Tips and Warnings in the last paragraph.

### Useful Tips and Warnings

**Recommended Excel Formatting**:

- For correct import, it is highly recommended to format the columns according to the type indicated at the “Excel Formatting” of each field. For example, if the field type is decimal, and a currency is to be entered in that field, format the field as currency. This is because, for instance, if the cell is not formatted, Excel will remove insignificant digits. To apply formatting, follow these steps:

First, select the desired column as shown in the figure below:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png) 

Then, after positioning the mouse pointer inside the column, right-click.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png) 

Select by left-clicking **>** **Format Cells**...

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png) 

In this screen, you can then format the selected column. Based on the indications provided in the “Field Entry,” select the appropriate category with the relevant specifics (e.g., currency, no symbol). The exact same thing can also be done from the spreadsheet present within Fluentis.

**Attention**: A classic case involves codes containing seemingly insignificant zeros, e.g., “001.” If the field is formatted as generic or number, the zeros would be discarded; if formatted as a string, they are retained.

**Mapping table/column**:

- If the “Field Entry” contains the mapping table/column item, it means that the value entered in the field for import may already be present in the database. It was also inserted in the fields that will be entered from scratch for people to see an example if present in the database. To view the related data in the database, simply follow these steps, using the articles class and the relevant mapping as an example:

select MBDC_Classe from MB_Classi (**\<-** this is the mapping). Execute the query in “Microsoft SQL Server Management Studio,” and we get the following result:

![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png) 

Looking at it this way doesn’t convey much, to understand what it means, replace the “*” symbol after the select clause with the field to compose the new query. In this case, we would have select * from MB_Class, which serves to select the entire contents of the table; let’s execute it now.

![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png) 

This is useful since, as shown in the figure, through the description (MBDC_Descr), it is possible to understand what the field represents and verify whether what you will insert is present in the database.

This procedure just described is universal, i.e., it applies to every field.

The same representation can be seen in Fluentis:

From the Fluentis home page, select **Items > Supplier Items** (see figure below).

![](/img/it-it/applications/bizlink/import-contacts-registry/image17.png) 

Then, in the search form that appears, left-click on the triangle next to articles, which opens a dropdown where you can view the class of articles with the relevant description as shown in the figure.

![](/img/it-it/applications/bizlink/import-contacts-registry/image18.png) 

This applies to the class of articles. For the other fields, the same procedure can be followed, only in different areas.

We should therefore insert one of the values present; otherwise, the import will not be successful, and it will communicate an error. This applies to every field that has a mapping table/column.

If we want to add a field with mapping not present in the database, it should be inserted either via query or from Fluentis. In this case, the insertion query is discouraged as it is more complicated to compose compared to the visualization seen previously. The recommended procedure is therefore insertion from Fluentis. Also in the case of the article class, from supplier articles (figure above), right-click inside the article class search filter and select “open form.”

![](/img/it-it/applications/bizlink/import-contacts-registry/image19.png) 

In the form that opens, click the search button to view the existing article classes.

![search icon](/img/neutral/common/search.png) 

Below the last row present, there is an empty row. It is used to insert new values.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png) 

New values to insert should be written there, and once done, simply press Enter.

This procedure is similar for the other fields; the only difference is where the search filters are located for which you need to left-click to open the form.

**Errors**:

- In the event of a failed import, as mentioned earlier, an error screen will appear.

If the error was made in the Data part, it is possible to trace back to the row that contains the error, as it will state, for example, “System.ArgumentException: Error importing row 4.” In this case (see figure below), the error will be found on row 4; however, this is not the actual row containing the error. To accurately determine which row contains the error, the number in the left column must be added by 1. Thus:

Actual row containing the error = Error importing row number + 1.

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

To interpret the error, in the message itself, follow these steps: in the same row containing the previously mentioned row number, it states **the object** it refers to, then **the actual error**, and finally the **property** related to it where the error was found. As noted in the example above, “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.**PurchasePriceLists** not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit.” In this case, as noted in the image above, the unit of measure related to the purchase price list generated the error as it is null. In fact, its entry is mandatory.

If the error was made in the parameters section, the message will be similar; the resolution method remains the same, so based on the property, verify the correct entry of it.

**Warning**: If a completely empty row is found, no error will be communicated, but the import will stop there. For example, if the first row (row n.4) is empty for some reason, and below (from row n.5 onward) there are populated rows, nothing will be imported.

**Warning**: If an entry of 10 rows is inserted, for example, and an error occurs on row n.7, the first 6 rows will be inserted as they did not cause issues! If no values are changed in the first 6 rows (and obviously the error is corrected), restarting the import will not encounter issues, nor duplication, as it first checks whether the contact is already present. If any value is changed, even just one, that contact will be inserted as it is seen as a new contact.

Finally, another error message that may occur is as follows.

![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

As can be seen from the aforementioned image, this type of message is easier to interpret as the exact reference of the cell with the related error is provided. In this case, there is no value present in cell F:4.