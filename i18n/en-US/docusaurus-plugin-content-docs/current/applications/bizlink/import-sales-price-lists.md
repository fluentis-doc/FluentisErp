---
title: Import Sales Price List
sidebar_position: 2
---

In this document, it will be explained how to **Import vendor price lists** into **Fluentis** using an **Spreadsheet**.

This import is possible due to the use of **BizLink Parameters**, as every time a line is processed, they will be called.

### How to open the import via electronic sheet

Click on **Tools** (by default located on the right side of Fluentis).

Click on the **BizLink** section

Click on **On Demand Import > Registries > Import Items and Sales Price Lists** as shown in the figure below.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image03.png)

### Data Section

In this section, we will enter the data that will then be permanently saved in the **Fluentis** database.

Now, the electronic sheet for import is displayed on the screen.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image04.png)

From this point, there are several paths you can take:

1. Import the already completed electronic sheet, **File > Open**.
2. Add various columns by copying and pasting from the saved price list on our PC.
3. Save this file (**File > Save**) on our PC, then go add the various data and re-import it later into Fluentis (see point 1). This could be very useful for passing the template of the electronic sheet for import to fill out for future price lists that suppliers will send us.
4. Manually add the fields.

**WARNING**: if we have an electronic sheet saved on our PC, it must follow the scheme of the sheet in the figure above. That is, the same order of columns, type of data, etc. These will be explained in detail in the next paragraph.

### Field Entry

When entering a field, several factors must be considered, including type, maximum length, required, etc.

General guidelines:

- If the field is written in red, it is a mandatory field.

- If the name of the cell is highlighted in green, it is a **section**.

- If the name of the cell is highlighted in yellow, it is a **field**.

- Field: indicates whether entry is mandatory or not

- Type: indicates the type of the field

- Excel Formatting: indicates the recommended Excel formatting to avoid incorrect entries; see the end of the document for Useful Tips and Warnings.

- Length: indicates whether the field has a character limit to respect

- Description: a brief description of the field

*Example*: real example of what to write in that field

- Mapping table/column: if present, indicates the mapping of the respective field in the database. For further details, see Useful Tips and Warnings at the end of the document.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image05.png)

**Item data**:

Class:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: code related to the item's class

*Example*: “1” corresponds to semifinished products, “IMB” corresponds to packaging

- Mapping table/column: select MBDC_Classe from MB_Classi

Code:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: reference code for the item

*Example*: 02030508

Description:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: item description, could also correspond to the code

*Example*: tennis ball sensitive to rotation, could correspond to the item code

Unit of Measure:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 3 characters

- Description: code referring to the measure used for the item in question

*Example*: “cm” corresponds to centimeters, “UDC” corresponds to pallet

- Mapping table/column: select MBUM_Codice from MB_UnitaMisura

VAT:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 3 characters

- Description: code referring to the VAT rate used for the item in question

*Example*: “22” corresponds to 22% VAT, “944” Exempt art. 40 c. 4 bis DL 331

- Mapping table/column: select MBIV_Code from MB_iva

Merc Category:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 3 characters

- Description: code referring to the merchandise category of the item in question

*Example*: “206” corresponds to adhesives, “211” corresponds to raw materials

- Mapping table/column: select MBCM_Codice from MB_CatMerceologica

Purchase Invoice:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 10 characters

- Description: code referring to the type of invoice issued for the item in question

*Example*: “4” corresponds to purchasing semifinished products, “1” corresponds to raw materials

- Mapping table/column: select MBFA_TipoFatt from mb_TipoFattAcq

Sales Invoice:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 10 characters

- Description: code referring to the type of invoice issued for the item in question

*Example*: “4” corresponds to purchasing semifinished products, “1” corresponds to raw materials

- Mapping table/column: select MBFA_TipoFatt from mb_TipoFattVend

Intra Nomenclature:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 50 characters

- Description:

*Example*: “32049000” corresponds to dyes

- Mapping table/column: select INCN_CodNomencl from IN_CodNomenc

Barcode:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: barcode of the item in question

*Example*: ABC-1234

Lot Type:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: 2 characters

- Description: type of lot to which the item belongs

*Example*: “4” corresponds to purchasing semifinished products, “1” corresponds to raw materials

![](/img/it-it/applications/bizlink/import-sales-price-lists/image06.png)

**Price list data**:

Price:

- Field: mandatory

- Type: decimal

- Excel Formatting: currency, symbol none

- Maximum Length: /

- Description: list price of the item

*Example*: “10.99”, “123.45”

Unit of Measure:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: used to define the price in relation to the quantity (e.g., price per kilo, price per square meter)

*Example*: “kg” corresponds to kilograms

- Mapping table/column: select MBUM_Codice from MB_UnitaMisura

Quantity:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: quantity of the item to which the previous price refers

*Example*: 500

Quantity-Value-Price per Quantity Type:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: Indicates whether the applied tiered values are based on quantity, value, or price per quantity. Typically, the one based on quantity is used, i.e., given a certain quantity, apply a discount of x%

*Example*: Qty, Val, PxQ

![](/img/it-it/applications/bizlink/import-sales-price-lists/image07.png)

**Discounts**:

Discount1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: possible applicable discounts

*Example*: “50+10” on the total of the line represents an initial discount of 50% and on the new total an additional discount of 10%

The same applies to the other two discounts; only the discount value changes.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image08.png)

**Quantity Discounts (Quantity Tier Type ‘Qty')**:

Discount1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: discount applied if a certain quantity of the item in question is purchased

*Example*: 10

Quantity1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: minimum quantity required to receive the respective discount

*Example*: 550

The same applies to the other two discounts and quantities; only the respective value changes.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image09.png)

**Value Discounts (Value Tier Type ‘Val')**:

Discount1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: discount applied if a certain line taxable amount exceeds

*Example*: 20

Value1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: minimum taxable amount required to receive the respective discount

*Example*: 950

The same applies to the other two discounts and values.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image10.png)

**Price per Quantity (Quantity Tier Type ‘PxQ')**:

Price1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: unit price applied if a minimum quantity is exceeded

*Example*: 3.99

Quantity1:

- Field: not mandatory

- Type: decimal

- Excel Formatting: number, decimal position = 2

- Maximum Length: /

- Description: minimum quantity required to receive the respective unit price

*Example*: 250

The same applies to the other two prices and their respective quantities; only the respective value changes.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image11.png)

**Other Data**:

Notes:

- Field: not mandatory

- Type: string

- Excel Formatting: text

- Maximum Length: /

- Description: additional notes

*Example*: do not expose to sunlight

- Mapping table/column: select MBNC_Codice from MB_NoteCodificat

### BizLink Parameters

These parameters will be used to process the rows entered in the Data section. As can be seen from the image, some fields are already pre-filled, but nothing prevents us from modifying them.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image12.png)

1      BizLink Spreadsheet:

- Field: do not enter/touch

2      Language:

- Field: mandatory

- Type: string

- Description: Iso code relating to the language

*Example*: “it-IT” represents the Italian language, “en-US” represents the English language in America.

3      Company:

- Field: mandatory

- Type: string

- Description: this is a pre-filled field as it takes the values already within Fluentis, which can be seen in the upper left corner.

*Example*: “1” corresponds to the demo company

- Mapping table/column: Select MBSC_Code from MB_Soc

4      Division:

- Field: mandatory

- Type: string

- Description: as for the company, it is pre-filled

*Example*: “1” corresponds to the legal office, “2” to the operational office in Milan

- Mapping table/column: select MBDP_Code from MB_Dep

5      Country:

- Field: mandatory

- Type: string

- Description: country in which the division for which the price list was imported is located

*Example*: “GB” corresponds to Great Britain, “USA” corresponds to the United States

- Mapping table/column: select MBNZ_Codice from MB_Nazioni

6      Barcode Type:

- Field: mandatory only if in the data section a barcode for at least one item has been entered

- Type: string

- Description: used to indicate the type of barcode used

*Example*: “39” corresponds to COD39

- Mapping table/column: select MBBC_Codice from MB_BarCode

7      Price List Nature (GEN-CUST):

- Field: mandatory

- Type: string

- Description: used to indicate whether the price list is standard or custom. GEN is usually indicated for price lists that can be passed from customer to customer as they will be the same. If it is CUST, it corresponds to a price list customized for the customer, i.e., specifically created for the customer for whom account and Detail account see parameters are entered.

*Example*: “GEN” corresponds to general, “CUST”

- Mapping table/column:

8      Price List Type:

- Field: mandatory

- Type: string

- Description: used to indicate the type of price list, to be inserted if price list nature = “GEN”; otherwise, it should not be entered.

*Example*: “GEN” corresponds to general, “PRO” corresponds to promotional

- Mapping table/column: select MBLV_List from MB_LisVen

9      Account:

- Field: mandatory

- Type: string

- Description: customer account, master account of the customer. If the price list is custom, the account and Detail account will be created as indicated in the respective parameters. If it is general, it should not be inserted.

*Example*: “1701,” which has 3 sub-accounts (see below)

- Mapping table/column: select MBPC_Conto from MB_PiaCon

10     Detail account:

- Field: mandatory

- Type: string

- Description: customer's Detail account, minor account of the customer. If the price list is custom, the account and Detail account will be created as indicated in the respective parameters. If it is general, it should not be inserted.

*Example*: for account 1701 seen earlier, there are 3 sub-accounts: “001” which corresponds to accounts, “002” which corresponds to DDT values, and “” (no Detail account specified) which corresponds to liquid availability.

- Mapping table/column: select BPC_SottoConto from MB_PiaCon

11     Currency:

- Field: mandatory

- Type: string

- Description: currency with which to interpret the values entered in the data section

*Example*: “EUR” corresponds to Euro, “USD” corresponds to Dollar

- Mapping table/column: select MBDI_Divisa from MB_Divise

12     Rounding:

- Field: mandatory

- Type: decimal

- Description: Indicates whether to round up or down

*Example*: 1 corresponds to none, 2 corresponds to excess, 3 corresponds to defect

- Mapping table/column: select MBRNT_Id from MB_RoundingType

13     Validity Start:

- Field: mandatory

- Type: datetime

- Description: indicates the start of validity of the inserted price list (dd/mm/yyyy)

*Example*: 01/10/2018

14     Validity End:

- Field: not mandatory

- Type: datetime

- Description: if present, indicates the end of validity of the inserted price list (dd/mm/yyyy)

*Example*: 31/12/2027

15     Discount Type Price List1:

- Field: not mandatory

- Type: string

- Description: if present, indicates the type of discount applied related to the **Discounts** section.

*Example*: “4” corresponds to final discount on sale

- Mapping table/column: select MBST_Code from MB_Sconti

16     Discount Type Price List2:

- Field: not mandatory

- Type: string

- Description: if present, indicates the type of discount applied related to the **Discounts** section.

*Example*: “4” corresponds to final discount on sale

- Mapping table/column: select MBST_Code from MB_Sconti

17     Discount Type Price List3:

- Field: not mandatory

- Type: string

- Description: if present, indicates the type of discount applied related to the **Discounts** section.

*Example*: “4” corresponds to final discount on sale

- Mapping table/column: select MBST_Code from MB_Sconti

18     Quantity Discount Type:

- Field: not mandatory

- Type: string

- Description: if present, indicates the type of discount applied

*Example*: “4” corresponds to final discount on sale

- Mapping table/column: select MBST_Code from MB_Sconti

19     Value Discount Type:

- Field: not mandatory

- Type: string

- Description: if present, indicates the type of discount applied

*Example*: “4” corresponds to final discount on sale

- Mapping table/column: select MBST_Code from MB_Sconti

### Start Import

Once the data has been entered, to start the import, click on the button in the import menu located at the top left, also called “Import” as shown in the figure below.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image13.png)

### Conclusions – Entry Completed

If everything goes well, no error message will appear. For further verification of success, check in the item registry (Home à Items) if those imported via the sales price list are present. Otherwise, an error screen will appear indicating which parameters and/or fields are incorrect. To interpret the error, see Useful Tips and Warnings in the last paragraph.

### Useful Tips and Warnings

**Recommended Excel Formatting**

- For a correct import, it is highly recommended to format the columns according to the type indicated in the “Excel Formatting” section of each field. For example, if the field type is decimal and a currency will be entered in that field, format the field as currency. This is because, for example, if the cell is not formatted, Excel will eliminate insignificant digits. To insert formatting, follow these steps:

First, select the desired column as shown in the figure below:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image14.png)

Then, after positioning the mouse pointer within the column, right-click.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image15.png)

Select by left-clicking **> Format Cells…** 

![](/img/it-it/applications/bizlink/import-sales-price-lists/image16.png)

In this screen, you can format the selected column. Based on the instructions provided in the Field Entry section, select the appropriate category, with the relative specifications (e.g., currency, symbol none). The same exact procedure is possible within the electronic sheet present inside Fluentis.

**Attention**: A classic case involves codes containing seemingly insignificant zeros, e.g., “001”. If the field is formatted as generic or number, the zeros would be discarded; if formatted as a string, they would be preserved.

**Mapping table/column:**

- If in the Field Entry section there is a mention of a mapping table/column, it means that the value entered within the field for import must already be present in the database. To view the relevant data present in the database, simply follow these steps, using the item class and its mapping as an example:

select MBDC_Classe from MB_Classi (ß this is the mapping). Execute the query in “Microsoft SQL Server Management Studio” and obtain the following result:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image17.png)

Seen this way, it doesn't communicate anything; to understand what it means, replace the symbol “*” after the select clause with the field to compose the new query. In this case, we would have select * from MB_Class, which serves to select the entire contents of the table; now execute it.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image18.png)

This is useful because, as shown in the figure, through the description (MBDC_Descr), it is possible to understand what the field represents and verify whether what you will insert is present in the database.

This procedure just described is universal, meaning it applies to every field.

The same representation can be seen in Fluentis:

From the Fluentis home, select **Items > Items** (see fig. below).

![](/img/it-it/applications/bizlink/import-sales-price-lists/image19.png)

Then in the search mask that appears, left-click on the small triangle next to items, which opens a dropdown where you can view the item classes with their respective descriptions as shown in the figure.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image20.png)

This is for item classes. The same procedure can be executed for other fields, although in different locations.

You must therefore insert one of the values present; otherwise, the import will not go through and will communicate an error. This applies to every field that contains a mapping table/column.

If you want to add a field with mapping not present in the database, it must be entered either via query or from Fluentis; in this case, the insert query is not recommended as it is more complicated to compose compared to the visualization seen previously. The recommended procedure is therefore to insert from Fluentis. Still dealing with item classes, from items (figure above) right-click within the class search filter and select **Open Form**.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image21.png)

In the form that will open, press the **Search** button to view the item classes present.

![](/img/neutral/common/search.png)

Under the last existing row, there is an empty row. This is used for inserting new values.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image23.png)

The new values to be inserted should be written there, and once done, just press Enter. 

This procedure is similar for other fields; the only difference is where the search filters are located, where you will left-click to open the form.

**Errors**:

- In the event of a failed import, as stated earlier, an error screen will appear on the screen.

If the error occurred in the Data section, it is possible to identify the row containing the error as it will state, for example, “System.ArgumentException: Error importing row 4”. In this case (see figure below), the error will be found in row 4; however, this is not the actual row containing the error. To precisely determine which row contains the error, you must add 1 to the numbers in the left column. So:

Actual row containing the error = Error importing row num + 1

![](/img/it-it/applications/bizlink/import-sales-price-lists/image24.png)

To interpret the error, in the error message, follow these steps: in the same row containing the line number seen previously, there is the object being referred to, then the actual error, and finally the related property where the error was found. In the example mentioned above: “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceLists not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. In this case, as indicated in the image above, the measurement unit related to the purchase price list created the error because it is null. Its entry is indeed mandatory.

If the error occurred in the parameters section, the message will be similar; the method for resolution remains the same, so based on the property, verify the correct entry.

**Attention**: If a completely empty row is found, no error will be communicated, but the import will terminate there. For example, if the first row (row no. 4) is empty for some reason, and the rows below (from row no. 5 inclusive) are populated, nothing will be imported.

**Attention**: If a price list of 10 rows is entered, for example, and an error occurs at row no. 7, the first 6 rows, not having caused any issues, have been inserted! If no values are changed in the first 6 rows (and if, of course, the error is resolved), restarting the import will not cause problems, including duplication, as it is first checked whether the item is already present. If any value is changed even slightly, that item will be inserted as it is seen as a new item.

Finally, another error message that might occur is the following.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image25.png)

As can be seen from the image above, this type of message is easier to interpret as the exact reference to the cell with the respective error is indicated. In this case, cell F:4 does not contain any value.