---
title: Detail Account Situation
sidebar_position: 5
---

The printout displays the debit/credit/balance of the detail account.

 

It is possible, in particular, to filter the detail account linked to a specific project (e.g., Job Order).

**SPECIFIC REPORT OPTIONS**:

**View debit/credit**: option active by default; if deactivated, the debit/credit columns will not be displayed, only the balance column will be shown.

**View balance**: option active by default; if deactivated, the balance column will no longer be visible. Note that by deactivating both this option and the previous one, the printout will effectively be unusable as it will be empty.

**View amounts in currency**: by activating this option, the detail account will be grouped by currency, and totals for each group will be displayed both in currency and in Euro (or in the company’s currency in use).

**View opening values**: by activating this option, two additional columns will also be displayed showing the opening values for each individual detail account. The values reported are those related to the procedure **[Automatic Accounts Opening](/docs/finance-area/ledger-records/records/automatic-accounts-opening/search)**.

**Print account with balance equal to zero**: option deactivated by default; therefore, detail account with a zero balance will not be displayed. It can be activated to include these detail account.

**Grouping criteria**:

**None**: no groupings will be executed.

**Agent**: detail account related to customer registries will be grouped based on the agent linked in their respective registry. If multiple agents are present in the registry, the last one entered will be considered.

**Zone**: detail account related to customer registries will be grouped based on the Zone present in the **[registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)**.

**Agent / Zone**: a double grouping criterion will be active, first by agent and then, for each agent, grouped by zone.



| Function | Extended Description |
| --- | --- |
| Preview | Button to execute the print preview. |
| Report | Button to execute the physical printing of the document. |


:::important See Also 
[**VIDEO TUTORIALS ON ACCOUNTING REPORTS**](/docs/video/finance/intro)
:::