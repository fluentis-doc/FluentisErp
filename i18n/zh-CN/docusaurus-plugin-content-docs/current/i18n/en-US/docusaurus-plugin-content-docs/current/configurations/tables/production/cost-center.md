---
title: Cost Centers
sidebar_position: 6
---

This is the table where rates are entered to associate with the machine and the labor group to value the processing phases of various work centers.

The table allows the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Cost Centers**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results within the results grid.

**Insert Cost Centers**

To be able to enter new codes, it is necessary to click on the first empty row in the grid or press the **New** button, and it will be possible to select the cost center you want to add from the combo. To create a new one, however, it will be necessary to enter it in the table of [Corporate Centers](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers/) by activating the flag **Visible in production**; otherwise, it will not be possible to view it in the insertion combo of **Cost Centers**.

For the new record, at least the mandatory fields required by the program must be entered: the **Code** of the cost center and the **Version**, as it is possible to have different costs for the various versions despite having the same cost center.         
At this point, it is possible to associate the **Cost** with the center, which will be used for costing. If no **MU** is specified, the inserted rate will be understood as an hourly rate.

Cost centers can be associated with the following resources:
- [Machine](/docs/configurations/tables/production/machines)
- [Labor group](/docs/configurations/tables/production/labour-group)
- [Single operator of the labor group](/docs/configurations/tables/production/labour-group)

For everything not detailed in this document about the common functionality of forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).