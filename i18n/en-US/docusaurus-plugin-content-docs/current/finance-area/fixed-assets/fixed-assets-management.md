---
title: Fixed assets management
sidebar_position: 3
---

LINK:

**[Detail (Dettaglio)](/docs/finance-area/fixed-assets/fixed-assets-management/detail)**

**[Asset Operations (Operazioni Patrimoniali)](/docs/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations)**

**[Economic Operations (Operazioni Economiche)](/docs/finance-area/fixed-assets/fixed-assets-management/economical-operations)**

**[Linked Assets (Cespiti collegati)](/docs/finance-area/fixed-assets/fixed-assets-management/linked-fixed-assets)**

**[Asset Ownership (Proprietà cespiti)](/docs/finance-area/fixed-assets/fixed-assets-management/fixed-assets-property)**

 

From this form, it is possible to manually enter a new asset card (this type of operation is not normally provided for, a practical example could be the addition of previous assets for which one does not intend to load the already existing accounting registration, perhaps from a previous software).

This procedure is an alternative to entering the card directly from the accounting registration of the purchase invoice specifically configured for asset management (the latter procedure is recommended).

 

**Header**

Setting the **Fixed Asset Category** of belonging: select the category from the combo box (linked to the **[asset category table (tabella categoria cespite)](/docs/configurations/tables/finance/fixed-asset-category)**);

**Property type**: normally owned as proposed by default; leasing and rental assets are also provided, which are numbered separately from others and do not appear in the prints of the depreciable asset book. This management allows simulating the year-end depreciation calculations for comparison to the leasing fee paid for tax calculations. In the case of a non-owned asset, it will be possible to enter some reference notes regarding the related contract.

**Division**: set by default to the current division, can be changed if necessary. This field can only be set at the time of entering the new asset and cannot be modified afterward.

**Accounting type**: (accounting type): field not typically filled during the manual entry of the card, it is populated during the accounting registration to impose a particular counterpart account (defined in the asset accounting types table) compared to that defined in the belonging asset category.

 

**Classification code**: can be assigned to the asset numbering; if not entered, the proposed numbering will indeed be unique across all assets of the active company/division; by entering a precode, the asset number will be unique for each of the existing pre codes.


**Material/Immaterial (Mat./Immat.)**: nature of the asset (material or immaterial); it is automatically proposed based on the data contained in the belonging asset category.


**Propr. note**: free note field
 

**Fixed asset number**: proposed automatically in consecutive order, can be manually forced while respecting uniqueness (also in relation to the precode).


**Fixed assets description**: mandatory field, it will be displayed and reported in various prints and procedures of the module. 

 

Depending on the settings of the asset categories and the module parameters, the specific type of objective depreciation assigned to the asset may also be visible, with a specific percentage to be used for the asset instead of the standard type.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/image01.png)