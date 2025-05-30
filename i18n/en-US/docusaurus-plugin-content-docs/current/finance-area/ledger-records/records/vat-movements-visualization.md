---
title: View VAT Movements
sidebar_position: 5
---
:::tip[What is is for]
The form allows you to **view movements** performed on **VAT registers** in conjunction with accounting entries (e.g., for receipt or issuance of invoices).

Useful for **controls** or **data extraction** related to VAT.

The on-screen display is particularly flexible, allowing quick export of extracted data or fast access for editing each movement with a double click.
:::


## Header:
At the top, there are **filter** fields:

**VAT Registers:** to extract movements related to one or more (by selecting from the dropdown while holding down the Ctrl key) VAT sections.

**VAT Code:** to filter movements made with a specific rate or VAT code (exemption, exclusion, etc.).

**From VAT Competence Date / To VAT Competence Date:** for searching movements based on VAT competence dates, meaning the date on which the movement will be effective for periodic VAT settlement. 

:::tip[Note]
**Main filter** being in the context of VAT, it searches within the period in which the movement affects the periodic VAT settlement, more than by the date the accounting entry was made (as it is known that VAT competence can be varied, typically backdated).

If you want to search for a specific date of the accounting entry, it is always possible to adjust the column filter in the results grid.
:::

**Operations:** filters based on the three categories (active, passive, and reverse charge) considered for matching VAT codes and lines of the printout for the Annual VAT Declaration. Refer to the table [**Rates / VAT Methods**](/docs/configurations/tables/finance/vat-rates)

**Fiscal Declaration Row:** filter to be matched with the previous one. After selecting the type of operations, it is possible to detail which VAT codes to filter as they are matched to a specific line of the printout for the Annual VAT Declaration. Refer to the table [**Rates / VAT Methods**](/docs/configurations/tables/finance/vat-rates)

**VAT Type:** filter related to the type of VAT operation. This data can be associated with VAT movements when creating accounting entries, section *VAT details of the movement*, through the homonymous field.

**Account / detail account:** allows filtering in relation to the counterpart account used in the entry that generated the VAT movements, for example, in case of purchases or sales, typically it can be filtered by the cost or revenue account.

**Header Account:** allows filtering by the detail account entered in the header of the entries that generated the VAT movements, for example, in case of purchases or sales, typically it can be filtered by supplier or customer.


## Data Grid:

Presents some fixed columns that contain the values of each movement such as taxable amount, tax, non-deductible share, and totals.

The other columns scroll and present the following data:

- **Date and Number of the accounting entry** that generated the VAT movement
- **Document Number** recorded, for example, the number of the purchase or sales invoice
- **Ledger template** (code and description) used for the accounting entry that generated the VAT movement
- **VAT Section** (code and description) that has been moved
- **VAT reference no.** of the movement
- **Account used in the header** of the entry (for example, customer or supplier)
- **Fixed Offset Account** used (for example, cost or revenue) in the accounting entry that generated the VAT movement
- **VAT code** (rate, exemption, exclusion, etc.) used for the movement
- **Non-deductible percentage** present on the VAT line of the movement in the accounting entry; the value may be manually enforced but is typically predefined for the VAT code used directly in the table [**Rates / VAT Methods**](/docs/configurations/tables/finance/vat-rates)
- **From / To VAT Competence Dates**, refers to the economic competence of the cost/revenue and thus not strictly connected to the VAT movement, although present and defined in the VAT section of the accounting entry.
- **Plafond acrrual**, data defined in the VAT section of the accounting entry and referring to the competence of the movement for the calculation of the [**plafond for habitual exporters**](/docs/finance-area/declarations/declarations/plafond/general-overview)
- **VAT accrual**, data already present in the filter fields in the header of the form and displayed here for each movement
- **Detail Description**, homonymous data present in the VAT section of the accounting entry
- **Competence date**, referring to the accounting competence present in the header of the accounting entry that generated the VAT movement
- **Document date**, referring to the invoice date present in the header of the accounting entry that generated the VAT movement
- **Code Type**, referring to the Document Type field present in the header of the accounting entry that generated the VAT movement
- **Fiscal operation type** (code/description) field present in the VAT section of the accounting entry, useful for matching the purchase type aimed at the statistical information provided in the annual VAT declaration. The field is visible in the entries upon activation in the parameters of accounting reasons.

## Totals at the bottom of the form:

- Taxable / Tax / Total **Selected**: refers to the selection activated by the mouse click (one or more rows simultaneously if the Ctrl key is held down)

- Taxable / Tax / Total: regardless of mouse selection, shows data related to all visible rows in the results grid (applying the header filters and/or those in the header columns of the grid itself)