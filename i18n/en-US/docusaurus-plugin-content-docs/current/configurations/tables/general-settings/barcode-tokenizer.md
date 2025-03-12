---
title: Barcode tokenizer
sidebar_position: 48
---

Many of the operations that can be performed in Fluentis WMS can be facilitated and accelerated by using the *Input code* field, which, if properly configured, intelligently reprocesses the data acquired through barcode reading and autonomously inserts the values into the corresponding fields. This provides a significant advantage to the operator both in terms of input speed and efficiency, as they will only need to read the data in the same *Barcode Code* field without the issue of having to change focus.

In the header table, the fields to be entered are: 

> **Code**: indicates the prefix of the barcode tokenizer;        
> **Description**: indicates the description of the barcode tokenizer;        
> **Separator**: indicates the separator character of the barcode tokenizer.

In the detail table, the objects and properties that we will read from the barcode must be defined.

The barcode must be created using **BarcodeCode (CodiceBarcode)** + **Separator** + **BusinessObject.Property (OggettoBusiness.Proprietà)** [ + **Separator** + **BusinessObject.Property (OggettoBusiness.Proprietà)** ]  

The last part **BusinessObject.Property (OggettoBusiness.Proprietà)** can be repeated multiple times; the Length or the **Separator** defined in the table will allow for identifying the correct values.       

Typically, in a barcode tokenizer, there is only one **Main object**, which can be composed of multiple **Business Objects**.      
These **Business Objects** can be direct properties of the **Main object** (in which case the **Business Object** will be the same as the **Main object**) or they can be properties belonging to other **Business Objects**, but still referenced in the **Main object**.          
We can say that the **Main object** that is returned from the barcode reading is constituted by the composition of all the properties of the inserted **Business Objects**.     

:::note Note
Of course, depending on the data set being used, one must ensure that the configuration identifies a unique result.
:::

Below are some examples of constructing the Barcode tokenizer:

Example: Item-MOB-ART

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Item | Item Barcode | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| Item | Item Barcode | - | FSItem | Code | 50 | - | 20 | FSItem |

Example: Loc-01-L1

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Loc | Location Barcode | - | FSWarehouse | Code | 10 | - | 10 | FSLocation |
| Loc | Location Barcode | - | FSLocation | CodeLocation | 100 | - | 20 | FSLocation |

Example: UDC-2023-5-21

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| UDC | UDC Barcode | - | FSLoadingUnit | Year | 4 | - | 10 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Group | 4 | - | 20 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Number | 4 | - | 30 | FSLoadingUnit |

Example: Lot-MOB-ART-123

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Lot | Lot | - | FSItemClass | Code | 3 | - | 10 | FSBatchRegister |
| Lot | Lot | - | FSItem | Code | 50 | - | 20 | FSBatchRegister |
| Lot | Lot | - | FSLotRegister | Code | 05 | - | 30 | FSBatchRegister |

Example: MesPop-10824

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| MesPop | Production Order Phase | - | FSProductionOrderPhase | Id |  | - | 10 | FSProductionOrderPhase |

Example: Qty-50

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Qty | Quantity | - |  |  | 100 | - | 10 |  |

Example: ItemQty-MOB-ART-35

| Code (Codice) | Description (Descrizione) | Separator (Separatore) | Business Object (Oggetto business) | Property (Proprietà) | Length (Lunghezza) | Separator (Separatore) | Sequence (Sequenza) | Main Object (Oggetto principale) |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| ItemQty | Item Quantity | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| ItemQty | Item Quantity | - | FSItem | Code | 50 | - | 20 | FSItem |
| ItemQty | Item Quantity | - |  |  | 100 | - | 30 |  |

The last examples do not fit into the logic described for the barcode tokenizer; this is because we wanted a way to map in the barcode also the quantity, which, however, cannot be attributed to any Object/Property at the moment of reading. Of course, this logic needs to be implemented in the individual forms.