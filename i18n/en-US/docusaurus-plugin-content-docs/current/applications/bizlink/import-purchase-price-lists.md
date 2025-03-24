---
title: Importing Supplier Price Lists (Importazione Listini Fornitore)
sidebar_position: 3
---


This document will explain how to **Import supplier price lists** into **Fluentis** using a **spreadsheet**.

This import is possible due to the use of **BizLink Parameters** since every time a row is processed, they will be invoked.


### How to open the import via spreadsheet

Click on **Tools** (usually located on the right side of Fluentis).

Click on the **BizLink** section.

Click on **On Demand Import > Purchase Documents > Supplier Price List Import** as shown in the figure below.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image03.png) 


### Data Section

In this section, we will enter the data that will then be made permanent by saving it to the Fluentis database.

Now, the import spreadsheet is displayed on the screen.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image04.png) 

At this point, you can take various paths:

 1. Import the already filled spreadsheet, **File > Open**.
 2. Add the various columns by copying and pasting from the price list saved on our PC.
 3. Save this file (**File > Save**) on our PC, then go to add your data and re-import it back into Fluentis (see point 1). This might be very useful to pass the template for the import spreadsheet to fill out for future price lists that will be sent by suppliers. 
 4. Manually add the fields.

**WARNING**: if we have a spreadsheet saved on our PC, it must follow the pattern of the sheet shown in the figure above. That is, the same column order, data type, etc. These latter points are explained in detail in the next paragraph.


### Field Insertion

When inserting a field, many things must be considered, including type, maximum length, required, etc.

General indications:

- If the field is written in red it is a mandatory field.

- If the cell name is highlighted in green, it indicates a **section**.

- If the cell name is highlighted in yellow, it indicates a **field**.

- Field: indicates whether the entry is mandatory or not.

- Type: indicates the type of the field.

- Excel formatting: indicates the recommended Excel formatting to avoid incorrect entries, see the last section Useful Tips and Warnings.

- Length: indicates if the field has a character limit to adhere to.

- Description: a brief description of the field.

*Example*: a real example of what can be written in that field.

- Mapping table/column: if present, indicates the respective field's mapping in the database; for more details see the last section Useful Tips and Warnings.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image05.png) 


**Vendor item data**:

Code (Codice):

- Field: mandatory
- Type: string
- Excel formatting: text
- Maximum length: 50 characters
- Description: reference code for the item used by the supplier
*Example*: 02030508

Description (Descrizione):

- Field: mandatory
- Type: string
- Excel formatting: text
- Maximum length: 200 characters
- Description: description given by the supplier for the item
*Example*: tennis ball sensitive to rotation, which may correspond to the item code

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image06.png) 


**Item data**:

Class (Classe):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: /
- Description: code referring to the class of the item
*Example*: “1” corresponds to semi-finished products, “IMB” corresponds to packaging
- Mapping table/column: select MBDC_Classe from MB_Classi

Internal Code (Codice interno):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 50 characters
- Description: if not assigned, it will take that of the supplier. It will identify the item, so if an item is given and I change its internal code accordingly, the new item will be added. Otherwise, if an item is given, I leave the item code unchanged and modify, for example, the description, an update will be executed for the item with that item code. (Do not update the unit of measure)
*Example*: 7710ct7tb

Internal Description (Descrizione interna):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 200 characters
- Description: if not assigned, it will take that of the supplier
*Example*: tennis ball sensitive to rotation

Unit of Measure (Unità di misura):

- Field: mandatory
- Type: string
- Excel formatting: text
- Maximum length: 3 characters
- Description: code referring to the measure used for the item in question
*Example*: “cm” corresponds to centimeters, “UDC” corresponds to pallet
- Mapping table/column: select MBUM_Codice from MB_UnitaMisura

VAT (IVA):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 3 characters
- Description: code referring to the applicable VAT for the item in question
*Example*: “22” corresponds to 22% VAT, “944” Exempt article 40 c. 4 bis DL 331
- Mapping table/column: select MBIV_Code from MB_iva

Merc Category (Cat Merc):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 3 characters
- Description: code referring to the product category of the item in question
*Example*: “206” corresponds to adhesives, “211” corresponds to raw materials
- Mapping table/column: select MBCM_Codice from MB_CatMerceologica

Invoice Type (Fatt acq):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 10 characters
- Description: code referring to the type of invoice issued for the item in question
*Example*: “4” corresponds to purchase of semi-finished products, “1” corresponds to raw materials
- Mapping table/column: select MBFA_TipoFatt from mb_TipoFattAcq

Barcode (Barcode):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: /
- Description: barcode of the item in question
*Example*: ABC-1234

Batch Type (Tipo lotto):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 2 characters
- Description: type of batch to which the item belongs
*Example*: “4” corresponds to purchase of semi-finished products, “1” corresponds to raw materials

Nomenclature (Nomenclatura):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 50 characters
- Description: nomenclature, item classification
*Example*: “32049000” corresponds to dyes
- Mapping table/column: select INCN_CodNomencl from IN_CodNomenc

Manufacturer Code (Codice produttore):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 100 characters
- Description: manufacturer code of the item
*Example*: art0102032019

Commercial Code (Codice commerciale):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: 100 characters
- Description: code of the commercial category
*Example*: “P” corresponds to private

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image07.png) 


**Price list data**:

Price (Prezzo):

- Field: mandatory
- Type: decimal
- Excel formatting: currency, no symbol
- Maximum length: /
- Description: list price of the item
*Example*: 10.99, 123.45

Price Unit (UMPrezzo):

- Field: mandatory
- Type: string
- Excel formatting: text
- Maximum length: /
- Description: used to define the price concerning the quantity (e.g., price per kilo, price per square meter)
*Example*: “kg” corresponds to kilograms
- Mapping table/column: select MBUM_Codice from MB_UnitaMisura


**Quantity**:

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: quantity of the item to which the previous price refers
*Example*: 500


**Added value**:

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: additional value that can be used in creating sales lists from purchase lists. For example, if there are transportation costs (that we must pay to the supplier), they are reported here to be used in calculating the sale price of that item.
*Example*: 123.45


**Additional % (% Aggiuntiva)**:

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: additional percentage that can be used in creating sales lists from purchase lists
*Example*: 10        

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image08.png)


**Discounts**:

Discount1 (Sconto1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: possible applicable discounts
*Example*: “50+10” on the total of the line means a first discount of 50% and an additional discount of 10% on the new total

The same applies to the other two discounts; only the discount value changes.
![](/img/it-it/applications/bizlink/import-purchase-price-lists/image09.png) 


**Discounts for quantity**:

Discount1 (Sconto1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: discount applied if a certain quantity of the item in question is purchased
*Example*: 10

Quantity1 (Quantità1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: minimum quantity required to have the respective discount
*Example*: 550

The same applies to the other two quantity discounts; only the corresponding value changes.
![](/img/it-it/applications/bizlink/import-purchase-price-lists/image10.png) 


**Discounts for value**:

Discount1 (Sconto1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: discount applied if a certain line taxable amount is exceeded
*Example*: 20

Value1 (Valore1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: minimum taxable amount required to have the respective discount
*Example*: 950

The same applies to the other two discounts and values.
![](/img/it-it/applications/bizlink/import-purchase-price-lists/image11.png) 


**Price per quantity**:

Price1 (Prezzo1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: unit price applied if a certain quantity is exceeded
*Example*: 3.99

Quantity1 (Quantità1):

- Field: not mandatory
- Type: decimal
- Excel formatting: number, decimal position = 2
- Maximum length: /
- Description: minimum quantity required to have the respective unit price
*Example*: 250

The same applies to the other two prices and their respective quantities; only the respective value changes.
![](/img/it-it/applications/bizlink/import-purchase-price-lists/image12.png) 


**Other Data (Altri dati)**:

Notes (Note):

- Field: not mandatory
- Type: string
- Excel formatting: text
- Maximum length: /
- Description: additional notes
*Example*: do not expose to sunlight

- Mapping table/column: select MBNC_Codice from MB_NoteCodificat


### BizLink Parameters

These parameters will be used to process the rows entered in the Data section. As seen in the image, some fields are already pre-filled, but nothing prevents us from modifying them.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image13.png)

1   BizLink Spreadsheet:

- Field: do not enter

2   Language (Lingua):

- Field: mandatory
- Type: string
- Description: ISO code related to the language
*Example*: “it-IT” represents the Italian language, “en-US” represents American English.

3   Company (Società):

- Field: mandatory
- Type: string
- Description: it is a pre-filled field as it takes values already within Fluentis, which can be seen in the top left corner.
*Example*: “1” corresponds to the demo company
- Mapping table/column: Select MBSC_Code from MB_Soc

4   Division (Divisione):

- Field: mandatory
- Type: string
- Description: as with the company, it is pre-filled
*Example*: “1” corresponds to the legal headquarters, “2” to the operational headquarters in Milan
- Mapping table/column: select MBDP_Code from MB_Dep

5   Country (Nazione):

- Field: mandatory
- Type: string
- Description: the country in which the division for which the price list was imported is located
*Example*: “GB” corresponds to Great Britain, “USA” corresponds to the United States
- Mapping table/column: select MBNZ_Codice from MB_Nazioni

6   Barcode (Barcode):

- Field: mandatory only if at least one item's barcode has been entered in the data section
- Type: string
- Description: used to indicate the type of barcode used
*Example*: “39” corresponds to COD39
- Mapping table/column: select MBBC_Codice from MB_BarCode

7   Account (Conto):

- Field: mandatory
- Type: string
- Description: account of the supplier, main account of the supplier
*Example*: “1701” which has 3 sub-accounts (see below)
- Mapping table/column: select MBPC_Conto from MB_PiaCon

8   Sub-account (Sottoconto):

- Field: mandatory
- Type: string
- Description: sub-account of the supplier, minor account of the supplier
*Example*: for account 1701 mentioned earlier, there are 3 sub-accounts: “001” corresponds to accounts, “002” corresponds to DDT values and “” (no specified sub-account) corresponds to liquid availability.
- Mapping table/column: select BPC_SottoConto from MB_PiaCon

9   Currency (Divisa):

- Field: mandatory
- Type: string
- Description: currency with which to interpret the values entered in the data section
*Example*: “EUR” corresponds to Euro, “USD” corresponds to Dollar
- Mapping table/column: select MBDI_Divisa from MB_Divise

10  Validity Start (Inizio validità):

- Field: mandatory
- Type: datetime
- Description: indicates the start of validity of the entered price list (dd/mm/yyyy)
*Example*: 1/10/2018

11  Validity End (Fine validità):

- Field: not mandatory
- Type: datetime
- Description: if present, indicates the end of validity of the entered price list (dd/mm/yyyy)
*Example*: 31/12/2027

12  Price List Discount Type (Tipo sconto listino):

- Field: not mandatory
- Type: string
- Description: if present, indicates the type of discount applied; there will be three different types, each for the respective discount in the Discounts section
*Example*: “4” corresponds to final discount on sales
- Mapping table/column: select MBST_Code from MB_Sconti

15 Discount Quantity Type (Tipo sconto quantità):

- Field: not mandatory
- Type: string
- Description: if present, indicates the type of discount applied
*Example*: “4” corresponds to final discount on sales
- Mapping table/column: select MBST_Code from MB_Sconti

16 Discount Value Type (Tipo sconto valore):

- Field: not mandatory
- Type: string
- Description: if present, indicates the type of discount applied
*Example*: “4” corresponds to final discount on sales
- Mapping table/column: select MBST_Code from MB_Sconti

17 For Third Party (Per terzista):

- Field: mandatory
- Type: boolean
- Description: indicates whether such a price list (for outsourced work) will be for a third party
*Example*: “1” corresponds to true, “0” corresponds to false

18 Article Insertion (Inserimento articolo):

- Field: mandatory
- Type: boolean
- Description: if set to 1, inserts the article in the MG_AnaArt item registry table
*Example*: “1” corresponds to true, “0” corresponds to false

19  Supplier Article Insertion (Inserimento articolo per fornitore):

- Field: mandatory
- Type: boolean
- Description: if set to 1, inserts the article in the supplier articles table MB_ArticoliFornitore, MG_FornPreferenziali
*Example*: “1” corresponds to true, “0” corresponds to false

### Start Import

Once the data has been entered, to start the import, click on the button in the import menu, located at the top left, also called “Import” as shown in the figure below.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image14.png)

 

### Conclusions – Insertion Successful

If everything goes well, no error message will appear. For further verification of success, check in the item registry (**Home > Articles**) if those imported from the supplier are present. Otherwise, an error screen will appear indicating which parameters and/or fields are incorrect. To interpret the type of error, see Useful Tips and Warnings in the last paragraph. 

### Useful Tips and Warnings

**Recommended Excel Formatting**:

- For a correct import, it is strongly recommended to format the columns according to the type indicated in the “Excel Formatting” section of each field. For example, if the field type is decimal and a currency will be entered in that field, format the field as currency. This is because if the cell is not formatted, Excel may discard insignificant digits. To insert formatting, follow these steps:

First, select the desired column as in the fig. below:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image15.png)


Then, after hovering the mouse pointer over the column, right-click.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image16.png)


Select by left-clicking ** > Format Cells…**

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image17.png) 

In this screen, you can format the selected column. Based on the indications provided in the Field Insertion section, select the appropriate category with the respective specifications (e.g., currency, no symbol). The same can also be done from the Fluentis spreadsheet.

**Warning**: a classic case concerns codes containing trailing zeros that appear non-significant, e.g., “001”. If the field is formatted as generic or number, the zeros will be discarded, while if formatted as a string, they will be retained.

**Mapping table/column**:

- If there is a mapping table/column entry in the Field Insertion, it means that the value entered in the field for import must already be in the database. To view the relevant data in the database, follow these steps, where the item class and its mapping will be used as an example:

select MBDC_Classe from MB_Classi (**\<-** this is the mapping). Execute the query in “Microsoft SQL Server Management Studio” and get the following result:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image18.png) 

Seen this way, it communicates nothing; to understand its meaning, replace the “*” symbol in the select clause with the field to create the new query. In this case, we would have select * from MB_Class, which serves to select the entire content of the table, now execute.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image19.png)

This is useful because, as shown in the figure, through the description (MBDC_Descr), it is possible to understand what the field represents and verify if what you will insert is present in the database.

The procedure just described is universal; it applies to every field.

The same representation can also be seen in Fluentis:

From the Fluentis Home, select **Items > Supplier Articles** (see fig. below).

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image20.png) 

Then, in the search form that appears, left-click on the triangle next to articles, which opens a dropdown where you can view the class of the articles with their description as shown in the figure.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image21.png) 

This applies to the item class. For other fields, you can execute the same procedure only in different locations.

Therefore, you should insert one of the existing values; otherwise, the import will fail and will communicate an error. This applies to every field that has a mapping table/column present. 

If you want to add a field with mapping not present in the database, it should be inserted either through a query or from Fluentis; in this case, the insertion query is discouraged as it is more complicated to formulate than the visualization seen earlier. The recommended procedure is, therefore, to insert from Fluentis. Still in the case of the item class, from the supplier item (see figure above), right-click inside the item class search filter and select **Open Form**.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image22.png) 

In the form that opens, press the **Search** button to display the existing item classes.

![](/img/neutral/common/search.png) 

Under the last line present, there is a blank row. It is used to insert new values.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image24.png)

There, write the new values to be inserted, and once done, simply press enter. 

This procedure is analogous for other fields; the only thing that changes is where the search filters are located to left-click to open the form.

**Errors**: 

- In the event of a failed import, as mentioned earlier, an error screen will appear.

If the error occurred in the Data section, it is possible to trace the row containing the error because it will say, for example, “System.ArgumentException: Error importing row 4”.

In this case (see figure below), the error will be found in row 4; which is, however, not the actual row containing the error. To understand exactly which row contains the error, you must add 1 to the row number previously seen in the left column. So: 

 Actual row containing the error = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image25.png)

To interpret the error, in the error message, follow these steps: in the same line containing the row number seen previously, there is the object it refers to, followed by the actual error, and finally the property related to it where the error was found. In the above example “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. In this case, as can be seen from the image above, the unit of measure relating to the purchase price list has generated the error as it is null. Its entry is indeed mandatory.

If the error occurred in the parameters, the message will be similar, and the resolution method remains the same, therefore, based on the property, verify the correct insertion of it.

**Warning**: If a completely empty row is found, no error will be communicated, but the import will terminate there. For example, if the first row (row n.4) is empty for some reason, and below (from row n.5 inclusive) there are populated rows, nothing will be imported.

**Warning**: If a price list of 10 rows is entered, for example, and an error occurs in row n. 7, the first 6 rows, having not caused any problems, have been inserted! If no values are changed in the first 6 rows (and if obviously the error has been corrected), restarting the import will result in no issue, including duplication, because it first checks if the article is already present. If any value is changed, this item will be inserted as it is seen as a new article.

Finally, another error message that may occur is the following.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image26.png) 

As can be seen from the above image, this type of message is easier to interpret as it provides the exact reference of the cell with the respective error. In this case, there is no value present in cell F:4.