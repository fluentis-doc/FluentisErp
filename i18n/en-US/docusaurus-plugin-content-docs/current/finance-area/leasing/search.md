---
title: Leasing Search (Ricerca Leasing)
sidebar_position: 2
---

From this position, it is possible to search for leasing contracts present in the database and proceed to modify their details, or to insert a new contract using the **New** button.

The search filters, in addition to the number, description, and date of stipulation, are possible for the payment bank of the installments and for the granting company (leasing company).

Another fundamental filter field is the **Leasing type**.

This field, also displayed in the results grid, refers to the **specific table (tabella specifica)** (accessible also with the right mouse button > Open form) that **must be filled out before entering a new leasing contract for the first time**.

![](/img/it-it/finance-area/leasing/search/image01.png)

The other data displayed in the results grid are the **Date of stipulation (Data di stipula)** (of the contract, the date from which the calculation of the competent days begins),

**Expiration date** (the date until which to calculate the total days for the calculation of the competent days),

**Number** of the contract,

**Description** of the asset granted in leasing,

**Account / sub-account (Conto / sottoconto)** of the payment bank and the granting company,

**Initial installment** (if foreseen and entered in the contract data),

**Processing fees (Spese di istruttoria)** (management fees of the contract if foreseen and entered),

**Residual debit**: a field calculated as the sum of the capital portions of the installments expected, net of those already accounted for as paid.

**LEASING TYPES TABLE (TABELLA TIPI LEASING)**:

Table that defines all the mandatory attributes of the leasing type, which must be recalled when entering a new leasing contract.![](/img/it-it/finance-area/leasing/search/image02.png)

**Code/Description**: freely assignable, identify the type of leasing we are coding.

**Leasing type**: currently only an informative field, does not determine any automation, defines whether it is Financial Leasing or Operating Rental.

**Accounting method**: WARNING, currently only the **Patrimonial** mode is implemented and allows for the regular functioning of the accounting procedures.

The Asset-based method corresponds to the Italian accounting principles OIC (which provide for accounting the installments according to the legal form of the contract, as a simple lease without transfer of ownership, and consequent registration in the asset and capital loading of the asset only at the end of the contract when the asset is redeemed).

The Financial method corresponds to the international accounting principles IAS/IFRS (which provide for considering the substance of the operation rather than the legal form by registering the asset in the assets and loading the asset card).

**Flow type**: a combo box that allows you to recall from the Flow Types table in the Cash Flow module the type (with the Extracontable flag within the Flow Types table) with which to represent the financial flows of needs for the various installments foreseen within the contract.

**Posting template**: accounting cause that will be used in the accounting registrations related to the leasing installments invoiced by the granting company to be accounted.

**Account / sub-account for interest (Conto / sottoconto interessi)**: indicate in these fields the account on which the interest portion of the expected installments will be accounted. This setting will be proposed in new contracts entered with this type.

**Account / sub-account for installments (Conto / sottoconto canoni)**: indicate in this field the account to be used for the capital portion of the installments that will be accounted. The account will be proposed in new leased contracts entered with this type.

**Account / sub-account for costs (Conto / sottoconto costo)**: indicate the account to be used for the cost of collecting the individual installments (if foreseen).

**VAT**: in the case of invoice registration of the installments, indicate the rate to be automatically proposed in the accounting registrations of the installments.