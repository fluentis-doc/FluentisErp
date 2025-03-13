---
title: Period Balance Sheet 
sidebar_position: 1
---

This report serves to present a basic overview of the company’s balance sheet, dividing by default the four typical sections: assets/liabilities/costs/revenues. It is emphasized that the report works solely for the accounting competence date entered in the header of the record, regardless of the date of registration in the journal.

Furthermore, it should be noted that the dates of competence have been distinguished for the accounts of the balance sheet, as opposed to those of the income statement.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-balance-sheet/image01.png)

In this way, it is possible and recommended to keep the range of economic dates within the current year (e.g., 01/01/2018 - 31/12/2018) and extend the start date of the balance sheet accounting competence to the last account opening (e.g., 01/01/2017) in the case where the previous year (2017) has not yet been closed. This is necessary in this situation to obtain the correct current balance of the accounts in the absence of opening values for the current year that would otherwise be omitted filtering normally.

Various layouts are available, including a representation with opposing sections and one with grouping in order to obtain totals by account and by level of the chart of accounts structure. The desired print can be selected from the dropdown at the top left.

**View amounts with negative sign**: if set, the application will insert each detail account in the corresponding section (according to its account type) with a potential negative sign when the balance is in the opposite section. If the flag is not set, as by default, each detail account will be displayed in the section relating to its balance;

**Nomenclature detail**: by default, the application excludes all details of detail accounts related to customers/suppliers and agents. Only with the corresponding flag will the details of these registry detail accounts be displayed;

**Exclude memo account**: order accounts are displayed at the bottom of the asset and liability sections. With this flag, order accounts will not be displayed in the report. It is particularly noted that order accounts are never subject to closing/opening in the application’s automatic procedure;

**Comparison with previous year**: with this option, the column for the current year will be displayed along with one for the balance of the same period but from the previous year set as the filter;

**Exclude template**: if closing entries have been recorded, to obtain the balance sheet balances, it will be necessary to exclude movements based on the closing reason itself. Running the report without excluding this will yield a report with all balances at zero (except for order accounts as mentioned above): this can be used as a verification check of the successful completion of the closing operations;

It is also possible to include movements derived from provisional registrations in the print.

<iframe width="560" height="315" src="https://www.youtube.com/embed/E_lIBlV2OXI" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

---

### Reclassification of balance for regulatory balance preparation

:::important See Also 
[**VIDEO TUTORIALS ON FISCAL REPORTS**](/docs/video/finance/intro)
:::