---
title: Fluentis NSO
sidebar_position: 5
---

## Configuration (Configurazione)

The first configuration to make is to set the Electronic Order Transmission flag in *Home > Tables > General Settings > Electronic Document Configuration*.        
In the Electronic Document Configuration table, it is possible to define for each company the use of receiving and transmitting electronic orders with public administration; in the same table, it is also possible to identify how certain transactions should be executed.        
Among the tables of general settings, there is the PEPPOL section which includes:
The pre-coded tables:
- Standard PEPPOL customer order types, which contains the codes for order and sub-order types defined in the PEPPOL Standard code list.
- Standard PEPPOL unit of measure codes, which contains the units of measure defined in the PEPPOL Standard code list.
- Standard PEPPOL VAT codes, which contains the VAT codes defined in the PEPPOL Standard code list.
- Standard PEPPOL discount codes.
- Standard PEPPOL expense codes.
- Standard PEPPOL item classification.
- Process Nature.
- Document Nature.

## Tables to Configure (Tabelle da configurare)

The tables to configure are as follows:     

- The Fluentis order types that correspond to the PEPPOL order types (customer order type configuration).
- The Fluentis VAT codes that correspond to the PEPPOL VAT codes (VAT configuration).
- The Fluentis units of measure that correspond to the PEPPOL unit of measure codes (unit of measure configuration). 
- In the barcode types, it is necessary to define which barcode type identifies the AIC code, the standard coding, or the item classification.
- Configuration of discount types, where the Fluentis discount types are associated with the PEPPOL discount codes.
- Configuration of expense types, where the Fluentis expense types are associated with the PEPPOL expense codes.

## Pre-coded Table Data (Dati delle tabelle Precodificate)

It is necessary to identify the type of order, using the values from the corresponding code list provided by the PEPPOL standard, which includes the following two codes: 
- “220” for purchase orders in the strictest sense; 
- “227” for delivery orders.       

In documents of the type: 
- Initial and replacement order; 
- Replacement confirmation order;        

the order type code is indicated in the element “OrderTypeCode”, as shown in the following example: 

```xml
<cbc:OrderTypeCode>220</cbc:OrderTypeCode>             

In documents of the type:       
- Initial and replacement pre-agreed orders;       

the order type code is indicated in the “SpecialTerms” field of the “DeliveryTerms” element, as shown in the following example:        

`<cac:DeliveryTerms> <cbc:SpecialTerms>220</cbc:SpecialTerms> </cac:DeliveryTerms>`
         
There is an additional classification of order types, which is not mandatory.       
For order type 220 Purchase Order:      
- OF, Billing order for already consumed products 
- OFR, Billing order and replenishment 
For order type 227 Delivery Order:      
- CD Deposit account 
- CV Account for viewing 
- CG Free loan       

In documents of the type: 
- Initial and replacement order; 
- Replacement confirmation order;        

the subtype order code is indicated in the “SpecialTerms” field of the “DeliveryTerms” element, as shown in the following example:        

```xml
<cac:DeliveryTerms> <cbc:SpecialTerms>OFR</cbc:SpecialTerms> </cac:DeliveryTerms>
     
In documents of the type: 
- Initial and replacement pre-agreed orders;         

the subtype order code is indicated in the “SpecialTerms” field of the “DeliveryTerms” element, after the order type code, using the structured fields format, as shown in the following example:         

<cac:DeliveryTerms> <cbc:SpecialTerms>220#OFR</cbc:SpecialTerms> </cac:DeliveryTerms>

## Article Code (Codice Articolo)

The identification of the product (good or service) within each order line occurs not only through the name (element “Name”, which is mandatory) and the description (element “Description”), but also by using identifying codes. 
In particular, the layouts of the aforementioned documents provide, primarily, two types of code: 
- the code assigned by the Supplier (element “SellersItemIdentification/ID”); 
- the standard code, corresponding to the identifier assigned to the product by a unique identification system (element “StandardItemIdentification/ID”) selected from those present in the appropriate code list provided by the PEPPOL standard.         

The aforementioned elements are not mandatory; however, their use is strongly recommended.      
Example:     

```xml
<cac:OrderLine>
        <cac:LineItem>
        <cac:Item>
            <cbc:Name>Penna stilografica</cbc:Name>
            <cbc:Description>Penna stilografica edizione limitata</cbc:Description>
            <cac:SellersItemIdentification>
                <cbc:ID>Stilo24</cbc:ID>
            </cac:SellersItemIdentification>
            <cac:StandardItemIdentification>
                <cbc:ID schemeID=”0160”>0K10999746</ID>
            </cac:StandardItemIdentification>
        </cac:Item>
        </cac:LineItem>
</cac:OrderLine>


For fast-moving consumer goods, it is suggested to populate the element 
“StandardItemIdentification/ID” with the corresponding GTIN code (which corresponds to the “schemeID=”0160” of the PEPPOL code list), as shown in the previous example.         
For pharmaceutical products with the Marketing Authorization Code (AIC) issued by the Italian Medicines Agency (AIFA), the element 
“SellersItemIdentification/ID” must always be populated with the corresponding AIC code.

## Merchandise Group (Gruppo Merceologico)

For each product, within the relevant order line, it is possible to specify one or more classification codes by populating the “ItemClassificationCode/ID” field of the “CommodityClassification” element. 
The value to be indicated must be taken from a unique classification system selected from those present in the appropriate code list provided by the PEPPOL standard, as shown in the following example:       

```xml
<cac:OrderLine>        
<cac:LineItem>       
<cac:Item>       
<cac:CommodityClassification>        
<cbc:ItemClassificationCode listVersionID="19.0501" listID="STI">12345678</cbc:ItemClassificationCode>      
</cac:CommodityClassification>       
</cac:Item>       
</cac:LineItem>      
</cac:OrderLine>      

It is recommended to use at least one of the classification systems listed in the table below, where applicable.       

| Code | Description of the classification standard | Field of use |
| :-- | :-- | :-- |
| STI | Official European unique classification system for public procurement (CPV - Common Procurement Vocabulary) | Products and services subject to public procurement |
| STL | Anatomical, therapeutic, and chemical classification system (ATC - Anatomical Therapeutic Chemical classification system) | Medicines |
| STO | National Italian Classification of Medical Devices (CND) | Medical devices |
| STH | Commercial classification of products (GPC - Global Product Classification) | Fast-moving consumer goods |
| IB | International Standard Book Number (ISBN) | Books |
| ZZZ | Manually defined system among the parties | For medical devices, it allows specifying the values 'DM1', 'DM2' or 'DM0' (when the first two are not applicable) |

In Fluentis, these codes are to be assigned to the barcode codes table associated with the item.     

## Unit of Measure (Unità di misura)

In the order lines, it is necessary to indicate the quantity of the product by specifying a unit of measure among those indicated in the appropriate Code List provided by the PEPPOL standard, as shown in the following example:     

```xml
<cac:OrderLine> 
<cac:LineItem> 
<cbc:Quantity unitCode="C62">3</cbc:Quantity> 
</cac:LineItem> 
</cac:OrderLine>          

In the following table, the codes of the units of measure that are recommended to use are reported, where applicable (for more details, please refer to the Guidelines).         

| Code | Unit of Measure | Field of use |
| :-: | :-- | :-: |
| C62 | Product unit (good or service) | Quantity |
| PR | Pair | Quantity |
| XBK | Packet, box: primary packaging that contains multiple units of the same item | Packaging |
| DZP | Standard packaging containing twelve pieces of the same item | Packaging |
| KT | Equipment (kit): primary packaging that contains multiple units of different items but can be used together | Packaging |
| XBX | Pack, packaging (box): secondary packaging that contains multiple primary packages | Packaging |
| XOB | Pallet: platform or open box, usually made of wood, on which goods are held for ease of mechanical handling during transport and storage | Packaging |
| MTR | Meter | Length |
| CMT | Centimeter | Length |
| MMT | Millimeter | Length |
| MTK | Square meter | Area |
| CMK | Square centimeter | Area |
| MTQ | Cubic meter | Volume |
| CMQ | Cubic centimeter | Volume |
| MMQ | Cubic millimeter | Volume |
| LTR | Liter | Capacity |
| MLT | Milliliter | Capacity |
| GRM | Gram | Weight |
| HGM | Hectogram | Weight |
| KGM | Kilogram | Weight |
| MGM | Milligram | Weight |
| MC | Microgram | Weight |
| HUR | Hour | Time |
| DAY | Day | Time |
| MON | Month | Time |
| ANN | Year | Time |
| E40 | Working day | Labor |
| KWH | Kilowatt hour | Electricity |
| BQL | Becquerel | Radioactivity |
| 4N | Mega-Becquerel | Radioactivity |
| GBQ | Giga-Becquerel | Radioactivity |
| CUR | Curie | Radioactivity |
| MCU | Millicurie | Radioactivity |

## Delivery Destination (Destinazione merce)

The ID indicates the code attributed to the location where the supply must be executed. This code must always be included if the delivery location is an institutional address of the Client that has been associated with a unique identifier made available to the Supplier.          

The various fields of the “DeliveryLocation” element (including those that are not mandatory, where this helps specify its exact identification) should be appropriately populated, as shown in the following example, referring to a document of type Order or Confirmation Order. 
The indication of the delivery location is only expected with reference to the entire document.        

In order to facilitate the supply of goods to the institutional offices of public administrations, it is advisable that the respective delivery points be uniquely coded. Specifically regarding SSN entities, it is noted that from September 2019, a website will be available (http://www.puntidiconsegna-nso.it/) where it will be possible to publish the list of their institutional delivery point identification codes. Specifically, it is recommended that entities create the codes for institutional delivery points by preceding their tax code with the internal point code, defined freely, separated by the character “-“ (hyphen), without spaces in between. The format of the code will therefore be: Tax Code-Internal delivery point ID. For example, in the case of an entity with Tax Code “123456788901” and warehouse “acdg45”, the Ship-To Code to be included in the order will be "123456788901-acdg45” (see Paragraph 3.3.3.6). It is suggested to keep the length of this code within a total of 20 characters (including “-”).         

In Fluentis, the Delivery Destination is recognized via this ID code and is searched as a coded destination in the customer by assigning to the contact nickname in Fluentis the last 7 characters of the code that follow the – of the NSO delivery point.

## PEPPOL Customer Orders (PEPPOL Ordini clienti)

In Bizlink applications, there is the PEPPOL Customer Orders form to view all incoming messages from NSO and outgoing for NSO.         
After selecting a row of an order, pressing the “View” button on the ribbon bar opens another form **SDI Document Register**.       
Inside this form, some data related to the NSO file of the order are shown, such as the document status, linked files, and the content of the file.
It is possible to view the content of the order. It is also possible to view any notifications from the SDI.           
By pressing the **Download Attachment** button, it is possible to download the selected attachment in the “Attachments” grid, while pressing “Download the content of the register” allows downloading the file selected in the **SDI Document Register**, which contains the XML file of the order and all the files associated with it, such as the notification files.       
By pressing the **Open Document** button on the ribbon bar, it is possible to view the content of the Peppol order, provided it is at least in the “Inserted” state, directly in Fluentis, by opening the “Customer Orders” form.         
Pressing the **SDI Document Register** button in the “Customer Orders” form will open the “SDI Document Register” form, similar to what happens when pressing the “View” button on the ribbon bar of the *PEPPOL customer orders* form.       
Pressing the **Download Attachment** button on the ribbon bar of the *PEPPOL Customer Orders* form will download the XML file of the selected order to a folder specified by the user.        
Pressing the **Edit XML Data** button after selecting an order with SDI status “Error”, opens the form for editing the imported file data.           
In this form, it will be possible to correct any erroneous data on the received order, such as lines with a price of 0, non-automatically interpretable item codes, units of measure, in order to indicate missing mandatory data.         
In the **NSO Orders Register** grid, various information is displayed. Let's see the main ones:          
- SDI Status: this is the state of progress of the PEPPOL order (see the section regarding the order states).
- Type: this is the type of the PEPPOL order and can assume the following values:
> - 220 = Purchase order (order received from the supplier)
> - 227 = Delivery order
> - PRE = Pre-agreed order
- Number (Id): this is the order number, which along with client date and endpointClient uniquely identifies the order.
- Client Date: this is the order date, which along with number (I) and EndpointClient uniquely identifies the order.
- EndpointClient: this can indicate either the client's office code or the VAT number of the supplier who sent the order, and along with Number (Id) and Client Date uniquely identifies the order.
- Process Type: this indicates the type of process to which the order belongs and can assume 3 values:
> - Simple order
> - Complete order
> - Pre-agreed order
- Document Type: this indicates the last type of document or notification related to the order.
- Triplet: this is the reference to the order to which the current order refers; the triplet consists of: Document identifier, document date of issuance, and identifier of the issuing subject.
- NSO File Name: this indicates the name of the XML file of the PEPPOL order.
- NSO Received Date: this indicates the date of receipt of the order by the client or the sending of the pre-agreed order.
- NSO Last Event: this indicates the date of the last state change of the order.