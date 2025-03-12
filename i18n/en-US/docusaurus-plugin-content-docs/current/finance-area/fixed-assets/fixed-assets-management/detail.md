---
title: Detail (Dettaglio)
sidebar_position: 1
---

**Fixed asset status**: it is managed automatically based on the operations linked to the asset and should not be forced. In the case of a previous asset, entering the depreciation fund will change the status to Partially/Fully Depreciated (Parzialmente/Totalmente ammortizzato). For the correct entry of a previous asset, see [**the attachment to the article on the accounting record of an asset**](/docs/finance-area/ledger-records/records/ledger-record).

The **start date of activity (data d'inizio attività)**, proposed as today's date, is the date on which the asset actually came into use in the company: only from this date will it be possible to depreciate the asset. The **end date of activity (data di fine attività)** normally should not be set except in special cases to block the calculation of depreciation and to no longer display the asset in the asset ledger: in normal management, in fact, upon completion of the remaining depreciation, the asset will no longer be depreciated. The **dates** related to **warranties (garanzie)** have an informative function not connected to any automation.

In the **Fixed asset** field, the relevant asset account for the selected asset category is automatically reported; the subsequent supplier code is not automatically managed by the program, as the suppliers and customers related to various operations will be indicated specifically within those. The industrial sub-account refers in detail to the industrial accounts plan, which is normally not used.

The **Location** field references the eponymous table and is used to store where the asset is physically located (e.g., a company site), while **Code** is a free text field to note the location and the serial number of the asset; the **Emp. code** can allow storing the subject that is using the asset.

Depending on the parameter settings (Configuration > Utilities > Asset Parameters (Configurazione > Utilità > Parametri Cespiti)), a **Depreciation percentage** may also be visible for the individual asset, to be used primarily rather than that of the belonging category, as well as the unit of measure for the quantities valued in the asset sheet.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image01.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image02.png)

In the **Deductibility types** field, the primary tax deductibility type for the depreciations of the individual asset can be associated. The combo box links to a specific table where the code and description of the possible types of deductibility can be encoded, and in the lower grid, the corresponding percentage of deductibility that will be used during the calculation of the depreciation amount to calculate the tax-deductible portion. The start/end date fields allow managing any changes in rates while keeping track of the previous ones.

The **Cost centres** section: allows assigning an automatic percentage of depreciation valuation to the various cost centers defined in the company. To enable reading, you must activate the **Accounting center enablement flag (flag Abilitazione centro contabilità)** within the Parameters form > Administration > Asset Parameters.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image03.png)

There are also a series of checkboxes visible by opening the Extra Data Expander:

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image04.png)

The **in use** default flag for the asset (if the flag is not present, the asset cannot be depreciated), the **used** asset status (if the flag is set, the advanced depreciation will be applied only in the first year of purchase, and the First-year depreciation flag (present in the [**Asset Categories**](/docs/configurations/tables/finance/fixed-asset-category) table) will not have any effect, meaning that the depreciation percentages applied in the first year will not be halved);

**In maintenance** means that the asset is to be counted in the maintenance printouts;

**Disposed** is a flag that is only active for intangible asset categories and serves to exclude it from printing in the asset ledger if the asset value has been written off the balance sheet (direct depreciation to account and not to a fund);

**Total Depreciation (Amm. Totale)** allows attributing 100% depreciation to the asset directly in the first year: upon saving the asset, the ERP will verify the correctness of this setting in relation to the limit set in the asset category; the printed asset status will be visible, indicating the non-modifiability of the header references of the asset if it has already been included in a definitive printout of the depreciable asset ledger;

Finally, the **Revenue meter (Ricavometro)** and **Sector Studies (Studi di settore)** flags are used to identify the assets to consider for these tax obligations.

| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Save (Salva) | Saves the asset, mandatory to assign a number to the asset and activate the various tabs. |
|  [Documents (Documenti)](/docs/guide/common/operations-with-data/document-manager)  | Management of the document archiving associated with the current form. |