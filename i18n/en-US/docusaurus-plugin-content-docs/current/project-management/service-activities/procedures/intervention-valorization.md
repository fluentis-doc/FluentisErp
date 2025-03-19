---
title: WorkReport valorization
sidebar_position: 1
---

This procedure allows for billing the Interventions that are in a **Controled** state. In the **Filter** area, you can set a series of filters to more accurately search for the interventions present in the system.

Once the filters are entered, simply click Search in the ribbon bar to display the results in the grid below. To value an Intervention, select it and click Valuate in the ribbon bar. 
You can set **Parameters** for the valuation in the related tab: you can choose the Invoicing of interventions by year, type, and/or different exchanges (it is important to remember that the registry must have the flag **Grouping by project** to allow interventions and invoices to be separated according to the project); you can choose whether to maintain the payments of the interventions or restore those from the registry; you can choose whether to group the deadlines; and you can include references, etc. 
It is important to note that in the table [Intervention Types](/docs/configurations/tables/project-management/intervention-type/), it is necessary to indicate a corresponding Invoice Type for the procedure to be successful.

The conditions for an intervention to be displayed are as follows: 
- the intervention type must specify the Invoice Type
- the status of the intervention must be "controlled" or "partially invoiced"
- the lines in the intervention's invoice plan must have the VAT code indicated

In the **Summaries** tab, you can consult the results of the valuation by pressing **Search** in the ribbon bar. By selecting a result row, it will be possible to view the **Intervention** and the generated **Sales invoice**. The specific buttons in the ribbon bar are:

![](/img/neutral/common/preview.png) Preview result: allows you to view a preview of the generated invoice;

![](/img/neutral/common/execute-restore.png) Restore valuation: performs the Rollback of the valuation;

![](/img/neutral/common/rollback.png) Restore invoice: performs the Rollback of the selected individual invoice.