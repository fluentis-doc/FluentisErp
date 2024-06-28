---
title: Fixed Assets Tab
sidebar_position: 7
---

The Fixed Assests Tab is dedicated to the management of multi-year use assets: it is used to survey purchasings, increments, alienations and destructions.

The upper section is dedicated to the new asset codification or to the selection of the existing asset to survey a new operation within the asset itself: in order to insert a new asset it is necessary just to fill a new line manually, while to select an already existing asset it is necessary to use the first button on the left called 'Select Existing Asset'. In case of manual insertion, the user has to select the asset-category, property type (normally the property suggested by default is fine), to assign a pre-code (in order to get a numeration inside this pre-code) and to confirm the new progressive numeration automatically assigned, then it is necessary to give a name to this new asset register (that is used in all module reports): in case of insert operation all these fields are re-taken directly from the existing asset. 

**Oper. Type**: this field is suggested on the base of the Ledger Template settings: typically, in case of purchasing or increments, 'Original Cost' operation is always fine while for selling can be 'Part. Alienation' and 'Tot. Alienation' (normally the user does not create two different templates but it is possible to change it every time). 

**Gen. Det. Account**: this field is taken from asset category or from the asset itself, while Cost Account normally is not used: at this point it is possible to insert the amount of the operation (that is the purchasing cost or the selling import in the case of the alienation) and the VAT rate of the operation (in case of purchasing with undeductible VAT, the amount of the undeductability increments the asset). 

**Starting Date of Activities**: it is suggested on the basis of the record date: from this date, the year from which the asset can be amortized can be seen; 

**Ending Date of Activities**: it is not inserted (but the visualization within the asset journal depends on this field too) because the depreciation are automatically managed in respect to the amortizable residual. 

**The Range of Warranty Dates**: on the contrary, it does not have operative importance. The following flags end the first grid: 

**Used**: identifies the asset purchased as already used (for this kind of assets, the percentage of depreciation in the first year is 100% and the anticipated depreciation is applicable just for one year), 

**In use**: (suggested by default while saving) indicates that the asset is used (without this flag the asset cannot be amortized), 

**Mainten**.: indicates that the asset is to be considered for maintenance planning. The field 'final notes' is not  reported in any report or procedure. 

**Profit-Meter** and **Dummy Society**: simply identify the assets to be considered in the assets reports that are included in these fiscal case studies, 'Deductibility Type' lets the user set the fiscal deductibility of Asset  Depreciation.

Various management messages can be sent during the line saving:

- The asset category has a value set in the field 'total depr. Limit' and the value inserted for the new asset is lower: we are talking about the assets whose value is lower than € 516. The fiscal rules can transform it to cost (that is 100% depreciation) within the year of purchasing. In this case, the message of a 100% depreciation within the first year is sent. This message set the flag in the upper part of the asset register so that it is specifically  managed in the depreciation automatic procedure.

- The accounting template includes cost centers management: in this case a message of center cost allocation to assets register is sent. This allocation is mandatory if the template includes the obligation to balance the CC with the accounting.

- The template is of partial selling and the asset category does not have the 'incremental' flag: in this case a message of allocation of the alienation amount to a specific patrimonial operation of the asset. To explain the situation, for every 'no-incremental' asset, every single line of operation is managed at a depreciation level and it is independent: the partial alienation (comparing to the whole asset) can be managed as a total sell of the single operation (for instance, I got a computer, I increment it with a scanner then I sell just the scanner).

Once having saved the situation is the following: the upper line is selected and in the various detail tabs in the lower part it is possible to see the detail of the asset, both as patrimonial operation (where a new line related to the operation uploaded above is added) and economic operation (normally is not used) and finally as depreciations.

In case of partial alienation (always for an 'incremental' asset or in case of a partial alienation not linked for a no-incremental one) the user has to integrate the line of the partial operation with the amount of the fund reversal  (negative sign) and give value to the related Capital Loss and Appreciation:  these amounts have to be inserted within the 'record' form for the general accounting. In the other cases, the application correctly updates the asset form, inserts the movement even in the VAT section of the registration and from here it updates the related record. In case of alienation, in particular, if the Capital Loss and the Appreciation detail accounts have been coded in the template and in the accounting parameters, the line related to selling operation have to be added (a reversal line of the active patrimonial total, one or more line of depreciation funds reversal and for Capital Loss/Appreciation difference).

Other operations can be activated in the asset tab: when a new asset is uploaded, it is possible to divide it in different tabs. It is possible that the purchase is related to a number of identical assets, as, for instance, 5 identical computers: the user instead of manually upload 5 assets, can upload one for the total, then, thanks to the special button, divide it into 5 identical parts (another option is to create a single asset that is made of 5 assets: on one hand this simplifies the situation of the assets Journal, on the other hand creates some problems in the assets alienations because they would be managed as partial alienation).

It is possible to delete the asset line inserted in the upper grid: in this case a confirmation message of the  asset register deletion is sent, for it the default is set on 'NO' (the message is sent at the moment of record closing, without saving) We suggest to pay particular attention to the message in order not to let asset tabs empty inside the database.

RIBBON BAR: it represents the form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the record. |
| New Record | Button to create a new record. |
| Insertion Parameters | It refers to the insertion parameters of the first note. |
| Open Register | Button to recall the register management of the selected detail account or the search of another register. |
| Select an Existing Asset | Button to select an asset that already exists and to survey a new operation inside it. |
| Delete Fixed Asset | Button to delete the selected asset. |
| Fixed Asset Link | Button to link the selected fixed asset to a father fixed asset.  |
| Delete selected data from depreciable  amount grid |  |
| Delete selected data from depreciation grid  |  |
| Split Fixed Assets  | Button to split the assets in creation in different tabs. |
| Revaluation Detail |  |



| Function | Meaning |
| --- | --- |
| Document Manager | Button to connect to the document management. |






